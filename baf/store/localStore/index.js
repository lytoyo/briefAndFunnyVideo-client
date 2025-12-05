import http from "../../utils/request";

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
		var userInfo = undefined;
		uni.getStorage({
			key:'userInfo',
			success(res) {
				userInfo = res.data
			}
		})
		return userInfo
	},
	
	//用户退出登录
	clearUserInfo(){
		uni.removeStorageSync('userInfo');
		http.clearToken();
	},
	
}