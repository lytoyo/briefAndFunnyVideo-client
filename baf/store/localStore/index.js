import http from "@/utils/request.js";

export default {

	//保存用户数据
	saveUserInfo(userInfo) {
		uni.setStorageSync('userInfo', userInfo)
	},

	//获取用户id
	getUserid() {
		try {
			const userInfo = uni.getStorageSync('userInfo');
			if (userInfo && userInfo.id) {
				return userInfo.id;
			}
			return undefined;
		} catch (error) {
			console.error('获取用户ID失败:', error);
			return undefined;
		}
	},

	//获取用户信息
	getUserInfo() {
		try {
			const userInfo = uni.getStorageSync("userInfo");
			
			return userInfo || undefined;
		} catch (error) {
			console.error('获取用户信息失败:', error);
			return undefined;
		}

	},

	//用户退出登录
	clearUserInfo() {
		uni.removeStorageSync('userInfo');
		http.clearToken();
	},

}