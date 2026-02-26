import http from "@/utils/request.js";
import appConfig from "@/config/index.js"
import config from "@/config/index.js";

export const uploadBlog = (data={},config={})=>{
	return http.post(
		"server/blog/uploadBlog",
		data,
		config
	)
}

	
export const askPostList = (params={},config={})=>{
	return http.get(
		"server/blog/postList",
		params,
		config
	)
}

export const likedHandle = (data = {},config = {})=>{
	return http.post(
		"server/blog/likedHandle",
		data,
		config
	)
}

export const collectHandle = (data = {},config = {}) => {
	return http.post(
		'server/blog/collectHandle',
		data,
		config
	)
}

export const gainPostDetail = (params = {},config = {}) => {
	return http.get(
		'server/blog/gainPostDetail',
		params,
		config
	)
}

export const gainPostComment = (params = {}, config = {}) => {
	return http.get(
		'server/blog/gainPostComment',
		params,
		config
	)
}

export const commentLikedHandle = (data = {}, config = {}) =>{
	return http.post(
		'server/blog/commentLikedHandle',
		data,
		config
	)
}

export const childCommentList = (params = {},config = {}) =>{
	return http.get(
		'server/blog/childCommentList', 
		params,
		config
	)
}

export const comment = (data = {},config = {}) => {
	return http.post(
		'server/blog/comment',
		data,
		config
	)
}