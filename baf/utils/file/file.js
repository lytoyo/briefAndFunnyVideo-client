import http from "@/utils/request.js";

export const uploadFileZone = (params = {},config = {})=>{
	return http.post(
		'server/file/uploadZone',
		params,
		config
	)
}