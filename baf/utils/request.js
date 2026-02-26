import appConfig from '@/config/index.js'
import userStore from '@/store/localStore/index.js'

class HttpRequest {
    constructor() {
        this.baseURL = appConfig.BASE_URL
        this.timeout = 30000
        this.requestQueue = new Map()
        
        //  认证配置 - 修复了字段名
        this.authConfig = {
            enabled: false,                    // 默认关闭认证
            tokenField: 'Authorization',       // 认证字段名
            tokenPrefix: 'Bearer ',            // token前缀
            tokenStorageKey: 'auth_token'      // 存储key
        }
    }
    
    //  启用认证功能
    enableAuth() {
        this.authConfig.enabled = true
        return this
    }
    
    //  禁用认证功能
    disableAuth() {
        this.authConfig.enabled = false
        return this
    }
    
    //  设置token
    setToken(token) {
        uni.setStorageSync(this.authConfig.tokenStorageKey, token)
        return this
    }
    
    //  获取token
    getToken() {
        return uni.getStorageSync(this.authConfig.tokenStorageKey) || ''
    }
    
	//判断是否已经登录
	hadLogin(){
		var token = uni.getStorageSync(this.authConfig.tokenStorageKey)
		if(token === '' || token === undefined) return false;
		else return true;
	}
	
    //  清除token
    clearToken() {
        uni.removeStorageSync(this.authConfig.tokenStorageKey)
        return this
    }

    //  核心请求方法
    request(params) {
        const requestId = Date.now().toString()
        return new Promise((resolve, reject) => {
            const requestConfig = this.buildConfig(params)
            this.requestQueue.set(requestId, requestConfig)
			
            uni.request({
                ...requestConfig,
                success: (res) => {
                    this.requestQueue.delete(requestId)
                    this.handleBusinessResponse(res.data, resolve, reject)
                },
                fail: (err) => {
                    this.requestQueue.delete(requestId)
                    this.handleNetworkError(err)
                    reject(err)
                }
            })
        })
    }

    //  构建配置
    buildConfig(params) {
        const baseHeader = {   
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'Basic c2FiZXI6c2FiZXJfc2VjcmV0', // 基础认证
            ...params.header
        }
		
        if(this.getToken()){
			const authHeader = this.buildAuthHeader()
			if (authHeader) {
			    baseHeader[this.authConfig.tokenField] = authHeader
			}  
		}
        //  动态添加认证头
        if (this.shouldAddAuthHeader(params)) {
            const authHeader = this.buildAuthHeader()
            if (authHeader) {
                baseHeader[this.authConfig.tokenField] = authHeader
            }
        }
        return {
            url: this.baseURL + params.url,
            method: params.method || 'GET',
            data: params.data,
            header: baseHeader,
            timeout: this.timeout
        }
    }
    
    //  判断是否需要添加认证头
    shouldAddAuthHeader(params) {
		
        // 公开接口不需要认证
        if (this.isPublicApi(params.url)){
			return false
        }
        return true
    }
    
    //  构建认证头
    buildAuthHeader() {
        const token = this.getToken()
        if (!token) {
            uni.showToast({
            	title:'该操作需要登录',
				icon:'none'
            }),
			uni.navigateTo({
				url:'/pages/loginAndRegister/loginAndRegister'
			})
        }
        return this.authConfig.tokenPrefix + token
    }
    
    //  判断是否是公开接口
    isPublicApi(url) {
        const publicApis = [
			'server/system/code',
            'server/system/login',
            'server/system/register',
			'server/search/complement',
			'server/search/comprehensiveSearch',
			'server/search/postQueries',
			'server/search/categoryQueries',
			'server/search/userQueries',
			'server/file/zoneRequest',
			'server/blog/postList',
			'server/blog/gainPostDetail',
			'server/blog/gainPostComment',
			 'server/user/collectPostList'
        ]
		
        return publicApis.some(api => url.startsWith(api))
    }

    //  快捷方法
    get(url, params = {}, config = {}) {
        return this.request({
            url,
            method: 'GET',
            data: params,
            ...config
        })
    }

    post(url, data = {}, config = {}) {
        return this.request({
            url,
            method: 'POST',
            data,
            ...config
        })
    }

    put(url, data = {}, config = {}) {
        return this.request({
            url,
            method: 'PUT',
            data,
            ...config
        })
    }

    delete(url, config = {}) {
        return this.request({
            url,
            method: 'DELETE',
            ...config
        })
    }

    //  文件上传 - 支持认证
    upload(url, filePath, formData = {}, config = {}) {
        return new Promise((resolve, reject) => {
            const headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Basic c2FiZXI6c2FiZXJfc2VjcmV0',
                ...config.header
            }
            const authHeader = this.buildAuthHeader()
            
            if (authHeader) {
                headers[this.authConfig.tokenField] = authHeader
            }
			
            uni.uploadFile({
                url: this.baseURL + url,
                filePath,
                name: 'file',
                formData,
                header: headers,
                success: (res) => {
                    try {
                        const responseData = typeof res.data === 'string' 
                            ? JSON.parse(res.data) 
                            : res.data
                        
                        this.handleBusinessResponse(responseData, resolve, reject)
                    } catch (error) {
                        resolve(res.data)
                    }
                },
                fail: reject
            })
        })
    }

    
    //  处理业务响应
    handleBusinessResponse(responseData, resolve, reject) {
        if (responseData && typeof responseData === 'object' && 'code' in responseData) {
            const { code, msg, data } = responseData
            if (code === 200) {
                resolve(data !== undefined ? data : responseData)
            } else {
                this.handleBusinessError(code, msg, responseData)
                reject(new Error(msg || `业务错误: ${code}`))
            }
        } else {
            resolve(responseData)
        }
    }
    
    //  业务错误处理
    handleBusinessError(code, msg, data) {
        let message = msg || '操作失败'
        
        switch (code) {
			case 400:
				message = '输入数据有误，请重新输入'
				break
            case 401:
                message = '登录已过期，请重新登录'
                this.handleUnauthorized()
                break
			case 404:
				message = '未找到该资源，请稍后重试'
				break
            case 500:
                message = '服务奔溃，请稍后重试'
                break
			case 503:
				message = '服务器繁忙，请稍后重试'
				break
            default:
                message = msg || `操作失败: ${code}`
        }
        
        uni.showToast({
            title: message,
            icon: 'none',
            duration: 2000
        })
    }
    
    //  未授权处理
    handleUnauthorized() {
        this.clearToken() // 清除token
		userStore.clearUserInfo();
        setTimeout(() => {
            uni.reLaunch({
                url: '/pages/loginAndRegister/loginAndRegister'
            })
        }, 1500)
    }
    

    //  HTTP错误处理（仅用于文件下载）
    handleHttpError(statusCode) {
        let message = '下载失败'
        switch (statusCode) {
            case 404: 
                message = '文件不存在'
                break
            case 500: 
                message = '服务器错误'
                break
            default: 
                message = `下载失败: ${statusCode}`
        }
        uni.showToast({ 
            title: message, 
            icon: 'none', 
            duration: 2000 
        })
    }

    //  网络错误处理
    handleNetworkError(err) {
        let message = '网络异常'
        if (err.errMsg.includes('timeout')) {
            message = '请求超时'
        } else if (err.errMsg.includes('fail')) {
            message = '网络连接失败'
        }
        uni.showToast({ 
            title: message, 
            icon: 'none', 
            duration: 2000 
        })
    }
}

//  创建全局实例
const http = new HttpRequest()

export default http


