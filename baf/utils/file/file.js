import http from "@/utils/request.js";
import appConfig from "@/config/index.js"

export const uploadFileZone = (formdata,path,chunkIndex)=>{
	uni.uploadFile({
	    url: appConfig.BASE_URL + 'server/file/uploadZone',
	    filePath: path, //切片返回的路径
	    name: 'file',
	    header: {
	        "Authorization": http.authConfig.tokenPrefix+http.getToken()
	    },
	    formData: {
	       "md5": fromdata.hashCode,
	       'chunkIndex': chunkIndex, //分片序号
	    }
	})
}

export const zoneMerge = (data = {}, config={}) =>{
	return http.get(
		'server/file/zoneMerge',
		data,
		config
	)
}

export const uploadCommentFile = (filePath = {},formData = {},config = {}) => {
	return http.upload(
		'server/file/commentFileUpload',
		filePath,
		formData,
		config
	)
}

