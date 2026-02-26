<!-- components/chunk-uploader/index.vue -->
<template>
	<view class="chunk-uploader">
		<!-- 文件选择器 -->
		<file-picker ref="filePicker" :maxImageCount="maxImageCount" :maxVideoCount="maxVideoCount"
			@select="onFileSelect" @remove="onFileRemove" @change="onFileChange" />
		<button @click="uploadFile()">{{$t('chunkUploader.uploadBlog')}}</button>
		<button @click="clearMer()">清除缓存</button>
	</view>
	
</template>

<script>
	// 导入spark-md5库
	import SparkMD5 from 'spark-md5'
	import FilePicker from '@/components/file-picker/index.vue'
	import appConfig from '@/config/index.js'
	import {
		uploadFileZone
	} from '@/utils/file/file.js'
	import http from '@/utils/request.js'
	export default {
		components: {
			FilePicker,
		},
		name: 'ChunkUploader',
		props: {
			// 分片大小（字节）
			chunkSize: {
				type: Number,
				default: 5 * 1024 * 1024 // 5MB
			},
			//最多多少张图片
			maxImageCount: {
				type: Number,
				default: 9
			},
			//最多多少段视频
			maxVideoCount: {
				type: Number,
				default: 1
			},
		},
		data() {
			return {
				uploadQueue: [], // 上传队列
				currentUploads: 0, // 当前正在上传的总数量
				currentFinishedUploads: 0 //当前已完成上传的文件数量
			}
		},
		mounted() {
			this.uploadQueue = [],
			this.currentUploads = 0;
			this.currentFinishedUploads = 0;
		},
		
		methods: {
			clearMer(){
				http.clearToken()
			},
			// 文件选择回调
			onFileSelect(files) {
				files.files.forEach(file => {
					this.addToUploadQueue(file)
					this.currentUploads += 1
				})
			},
			// 从队列移除文件
			onFileRemove(file) {
				const index = this.uploadQueue.findIndex(item =>
					item.file.path === file.file.path
				)
				if (index !== -1) {
					this.uploadQueue.splice(index, 1)
					this.currentUploads -= 1
				}
			},
			//文件类型更改
			onFileChange() {
				this.uploadQueue = [],
					this.currentUploads = 0;
			},
			// 添加到上传队列
			addToUploadQueue(file) {
				this.uploadQueue.push({
					file: file, //文件
				})
				this.currentUploads += 1
			},
			uploadBlogAndSkip(){
				uni.showLoading({
					title:'文件上传中,请勿关闭'
				})
				this.uploadFile()
				
			},
			//上传博客
			async uploadFile() {
				if (this.uploadQueue.length > 0) {
					var filesInfo = []
					const FileSpliter = uni.requireNativePlugin("Forke-FileSpliter");
					for (var i = 0; i < this.uploadQueue.length; i++) {
						const fileInfo = this.uploadQueue[i].file;
						var md5 = Number(Math.random().toString().substr(5, 10) + Date.now()).toString(36)
						var fileName = md5 + fileInfo.suffix
						this.uploadQueue[i] = {
							...this.uploadQueue[i],
							fileName:fileName
						}
						//文件大小小于1M，直接上传
						if (fileInfo.size < this.chunkSize) {
							var fileMsg = {
								"md5": md5,
								"suffix": fileInfo.suffix,
								"size": fileInfo.size,
								"type": fileInfo.type,
							}
							if (fileInfo.type === 'video') {
								fileMsg = {
									...fileMsg,
									"width": fileInfo.width,
									"height": fileInfo.height,
									"duration": fileInfo.duration,
								}
							}
							//直接上传
							uni.uploadFile({
								url: appConfig.BASE_URL+'server/file/smallFileUpload',
								filePath: fileInfo.path,
								name: 'file',
								header: {
									"Authorization": http.authConfig
										.tokenPrefix + http.getToken()
								},
								formData: {
									...fileMsg
								},
								success(res) {
									this.currentFinishedUploads += 1
								}
							})
							//上传进度+1
						} 
						//文件大小大于1M，分片上传
						else {
							let formdata = {
								"hashCode": md5,
								"suffix": fileInfo.suffix, //文件后缀
								'size': fileInfo.size, //文件大小
								'chunkSize': this.chunkSize, //分片大小 1m
								'chunkCount': Math.ceil(fileInfo.size / this.chunkSize), //分片次数  
							}
							plus.io.resolveLocalFileSystemURL(fileInfo.path, (entry) => {
								entry.file((file) => {
									FileSpliter.splitFile({
										filePath: file.fullPath,
										savePath: plus.io.convertLocalFileSystemURL("_doc/FileSpliter"),
										fileName: file.name,
										chunkSize: this.chunkSize
									}, (ret) => {
										if (ret) {
											if (ret.code == 'process') {
												uni.uploadFile({
													url: 'http://10.99.21.126:8884/server/file/uploadZone',
													filePath: ret.path, //切片返回的路径
													name: 'file',
													header: {
														"Authorization": http.authConfig.tokenPrefix + http.getToken()
													},
													formData: {
														"md5": formdata.hashCode,
														'chunkIndex': ret.chunk, //分片序号
													}
												})
											} else if (ret.code == 'complete') {
												this.currentFinishedUploads += 1
												this.deleteFiles(file.name)
											} else if (ret.code == 'start') {
											}
										}
									})
								}, (ret) => {
									//失败回调
								})
							})
							var fileMsg = {
								"md5": formdata.hashCode,
								"suffix": formdata.suffix,
								"size": formdata.size,
								"type": fileInfo.type,
								"chunkCount": formdata.chunkCount
							}
							if (fileInfo.type === 'video') {
								fileMsg = {
									...fileMsg,
									"width": fileInfo.width,
									"height": fileInfo.height,
									"duration": fileInfo.duration,
								}
							}
							filesInfo.push(fileMsg)
						}
					}
				}	
				//告知父组件文件全部上传完毕，并返回需要进行分片合并的文件信息
				this.$emit("uploadFileComplate", {
					filesInfo: filesInfo,
					uploadQueue: this.uploadQueue
				})
				uni.hideLoading()
			},
			deleteFiles(fileName) {
				const FileSpliter = uni.requireNativePlugin('Forke-FileSpliter');
				FileSpliter.clearFilePath({
					savePath: plus.io.convertLocalFileSystemURL("_doc/FileSpliter"),
					fileName: fileName
				}, (ret) => {}, (ret) => {});
			},
			// 格式化文件大小
			formatFileSize(bytes) {
				if (bytes === 0 || !bytes) return '0 B'
				const k = 1024
				const sizes = ['B', 'KB', 'MB', 'GB']
				const i = Math.floor(Math.log(bytes) / Math.log(k))
				return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
			},
		}
	}
</script>

<style scoped>
	.chunk-uploader {
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
	}
</style>