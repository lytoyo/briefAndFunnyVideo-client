import http from "@/utils/request.js";

export default {
	
	//保存用户数据
	saveUserInfo(userInfo){
		uni.setStorage({
			key:'userInfo',
			data: userInfo
		})
	},
	
	//获取用户id
	getUserid(){
		var id = undefined;
		uni.getStorage({
			key:'userInfo',
			success(res) {
				id = res.data.id
			}
		})
		return id
	},
	
	//获取用户信息
	getUserInfo(){
		const userInfo = uni.getStorageSync("userInfo")
		return userInfo?userInfo:undefined
		
	},
	
	//用户退出登录
	clearUserInfo(){
		uni.removeStorageSync('userInfo');
		http.clearToken();
	},
	
}