import http from "@/utils/request.js";

export const complement = (params = {},config = {})=>{
	return http.get(
		'server/search/complement',
		params,
		config
	)
}

export const comprehensiveSearch = (params = {},config = {}) => {
	return http.get(
		'server/search/comprehensiveSearch',
		params,
		config
	)
	
}
