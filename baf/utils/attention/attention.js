import http from "@/utils/request.js";
import appConfig from "@/config/index.js"
import config from "@/config/index.js";

export const attentionList = (params={},config={})=>{
	return http.get(
		"server/blog/list",
		params,
		config
	)
}

	
