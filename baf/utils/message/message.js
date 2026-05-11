import http from "@/utils/request.js";

export const checkP2pId = (params = {},config = {})=>{
	return http.get(
		'server/message/checkP2pId',
		params,
		config
	)
}

export const createPrivateWindow = (data = {}, config = {}) => {
	return http.post(
		'server/message/createPrivateWindow',
		data,
		config
	)
}

export const gainChatMessage = (params = {}, config = {}) => {
	return http.get(
		'server/message/gainChatMessage',
		params,
		config
	)
}

export const uploadChatFile = (filePath = {},formData = {},config = {}) => {
	return http.upload(
		'server/message/uploadChatFile',
		filePath,
		formData,
		config
	)
}

export const getHistoryChatMessage = (params = {},config = {}) => {
	return http.get(
		'server/message/getHistoryChatMessage',
		params,
		config
	)
}