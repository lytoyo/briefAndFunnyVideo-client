import http from "@/utils/request.js";


export const userStatus = (params = {},config = {})=>{
	return http.get(
		'server/user/status',
		params,
		config
	)
}
export const askPost = (params = {},config = {})=>{
	return http.get(
		'server/user/askPost',
		params,
		config
	)
}

export const selfPostList = (params = {},config = {})=>{
	return http.get(
		'server/user/selfPostList',
		params,
		config
	)
}

export const likedPostList = (params = {},config = {})=>{
	return http.get(
		'server/user/likedPostList',
		params,
		config
	)
}

export const collectPostList = (params = {},config = {})=>{
	return http.get(
		'server/user/collectPostList',
		params,
		config
	)
}

export const otherUserDetail = (params = {}, config = {}) =>{
	return http.get(
		'server/user/otherUserDetail',
		params,
		config
	)
	
}