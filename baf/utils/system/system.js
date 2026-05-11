import http from "@/utils/request.js";


export const requestCode = (params = {},config = {})=>{
	return http.get(
		'server/system/code',
		params,
		config
	)
}

export const login = (data = {},config = {}) =>{
	return http.post(
		'server/system/login',
		data,
		config
	)
}

export const register = (data = {},config = {}) => {
	return http.post(
		'server/system/register',
		data,
		config
	)
}

export const modPassword = (data = {},config = {}) => {
	return http.post(
		'server/system/modPassword',
		data,
		config
	)	
}

export const logOff = (params = {},config = {}) => {
	return http.post(
		'server/system/logoff',
		params,
		config
	)
}