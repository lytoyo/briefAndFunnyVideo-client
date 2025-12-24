<!-- components/chunk-uploader/index.vue -->
<template>
	<view class="chunk-uploader">
		<!-- 文件选择器 -->
		<file-picker ref="filePicker" :maxImageCount="maxImageCount" :maxVideoCount="maxVideoCount"
			@select="onFileSelect" @remove="onFileRemove" @change="onFileChange" />
		<button @click="uploadBlog()">上传博客</button>
		<button @click="clearMemory()">清除缓存</button>
	</view>
</template>

<script>
	// 导入spark-md5库
	import SparkMD5 from 'spark-md5'
	import FilePicker from '@/components/file-picker/index.vue'
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
				default: 1 * 1024 * 1024 // 1MB
			},
			// 最大文件大小（字节），超过此大小使用分片上传
			maxFileSize: {
				type: Number,
				default: 1 * 1024 * 1024 // 1MB
			},
			// 是否允许多选
			multiple: {
				type: Boolean,
				default: true
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
			// 最大并发数
			maxConcurrent: {
				type: Number,
				default: 3
			},
			content: {
				type: String,
				default: undefined
			}
		},

		data() {
			return {
				uploadQueue: [], // 上传队列
				uploadZoneQueue: [], //上传分片队列
				uploadStats: {
					total: 0,
					success: 0,
					error: 0,
					progress: 0
				},
				currentUploads: 0, // 当前正在上传的数量
				fileZoneArr: []
			}
		},

		computed: {
			canStartUpload() {
				return this.uploadQueue.some(item =>
					item.status === 'waiting' || item.status === 'paused' || item.status === 'error'
				) && !this.isPaused
			},

			canPauseAll() {
				return this.uploadQueue.some(item =>
					item.status === 'uploading' || item.status === 'md5'
				) && !this.isPaused
			}
		},

		methods: {
			// 文件选择回调
			onFileSelect(files) {
				files.files.forEach(file => {
					this.addToUploadQueue(file)
				})
			},
			// 从队列移除文件
			onFileRemove(file) {
				const index = this.uploadQueue.findIndex(item =>
					item.file.path === file.file.path
				)

				if (index !== -1) {
					this.uploadQueue.splice(index, 1)
				}
			},
			//文件类型更改
			onFileChange() {
				this.uploadQueue = []
			},
			// 生成文件ID
			generateFileId() {
				return Date.now() + '-' + Math.random().toString(36).substr(2, 9)
			},
			// 添加到上传队列
			addToUploadQueue(file) {
				const fileId = this.generateFileId()
				var templateName = file.path + file.size + file.type + file.suffix
				var md5 = SparkMD5.hash(templateName);
				this.uploadQueue.push({
					id: fileId, //文件id
					file: file, //文件
					status: 'waiting', //状态
					progress: 0, //上传进度
					chunkSize: this.chunkSize, //分片大小
					totalChunks: Math.ceil(file.size / this.chunkSize), //总的分片数量
					currentChunk: 0, //当前分片下标
					uploadedChunks: 0, //已经上传的分片
					md5: md5,
					chunks: [] // 存储分片信息
				})
			},
			async uploadBlog() {
				
				//将文件进行分片
				if (this.uploadQueue !== []) {
					console.log('正在分片')
					await this.zoneManage()
					await this.sliceZone()
					console.log(this.uploadZoneQueue)
					console.log(this.fileZoneArr)
				}
				//用分片信息去切割文件分片
				
				//将每个文件都进行上传
				for (var i = 0; i < this.uploadQueue.length; i++) {
					var file = this.uploadQueue[i].file;
					var chunks = this.uploadQueue[i].chunks;
					//上传每个分片
					for (var j = 0; j < chunks.length; j++) {


					}
				}

			},

			async sliceZone() {
				if (this.uploadZoneQueue.length === 0) return;
				this.fileZoneArr = [];
				const FileSpliter = uni.requireNativePlugin('Forke-FileSpliter')
				
			},
			//分片处理
			async zoneManage() {

				// 清空之前的队列
				this.uploadZoneQueue = []
				this.currentUploads = 0

				// 为每个文件进行分片处理
				for (let i = 0; i < this.uploadQueue.length; i++) {
					const queueItem = this.uploadQueue[i]
					try {
						// 清空之前的分片信息
						queueItem.chunks = []

						// 对文件进行分片处理
						await this.sliceFile(queueItem)

						// 将分片添加到全局分片队列
						await this.addChunksToUploadZoneQueue(queueItem)

					} catch (error) {
						console.error(`文件 ${i + 1} 分片处理失败:`, error)
					}
				}

				// 更新总上传数量
				this.currentUploads = this.uploadZoneQueue.length

			},

			// 对单个文件进行分片处理
			async sliceFile(queueItem) {
				return new Promise((resolve) => {
					const file = queueItem.file
					const chunkSize = queueItem.chunkSize
					const totalSize = file.size
					const totalChunks = Math.ceil(totalSize / chunkSize)

					// 重置分片信息
					queueItem.totalChunks = totalChunks
					queueItem.currentChunk = 0
					queueItem.uploadedChunks = 0

					// 如果文件大小不超过分片大小，则作为一个整体
					if (totalChunks <= 1) {

						queueItem.chunks.push({
							index: 0,
							start: 0,
							end: totalSize,
							size: totalSize,
							uploaded: false,
							fileId: queueItem.id, // 所属文件ID
							fileName: this.getFileName(file.path) // 文件名
						})
						resolve()
						return
					}


					// 创建分片信息
					for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
						const start = chunkIndex * chunkSize
						const end = Math.min(start + chunkSize, totalSize)
						const size = end - start

						queueItem.chunks.push({
							index: chunkIndex,
							start: start,
							end: end,
							size: size,
							uploaded: false,
							fileId: queueItem.id, // 所属文件ID
							fileName: this.getFileName(file.path) // 文件名
						})
					}
					resolve()
				})
			},
			
				
			clearMemory(){
				http.clearToken();
			},

			// 将单个文件的所有分片添加到全局分片队列
			async addChunksToUploadZoneQueue(queueItem) {
				return new Promise((resolve) => {
					// 为每个分片创建全局分片任务
					queueItem.chunks.forEach((chunk, chunkIndex) => {
						const globalChunkId = this.generateFileId() // 生成全局唯一的chunk ID

						const uploadTask = {
							// 分片基本信息
							id: globalChunkId, // 全局分片ID
							fileId: queueItem.id, // 所属文件ID
							chunkIndex: chunk.index, // 在文件中的分片索引
							fileName: chunk.fileName, // 文件名

							// 分片文件信息
							chunk: {
								...chunk,
								chunkId: globalChunkId // 将全局ID也存入chunk中
							},
							// 文件信息
							file: {
								...queueItem.file,
								fileId: queueItem.id
							},
							// 文件元信息
							fileInfo: {
								id: queueItem.id,
								md5: queueItem.md5,
								chunkSize: queueItem.chunkSize,
								totalChunks: queueItem.totalChunks
							},

							// 上传状态
							status: 'waiting', // waiting, uploading, success, error
							progress: 0,
							retryCount: 0,

							// 上传信息
							startTime: null,
							endTime: null,
							error: null
						}

						// 添加到全局分片队列
						this.uploadZoneQueue.push(uploadTask)

					})

					resolve()
				})
			},

			// 格式化文件大小
			formatFileSize(bytes) {
				if (bytes === 0 || !bytes) return '0 B'
				const k = 1024
				const sizes = ['B', 'KB', 'MB', 'GB']
				const i = Math.floor(Math.log(bytes) / Math.log(k))
				return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
			},

			// 获取文件名
			getFileName(path) {
				if (!path) return '未命名文件'
				if (typeof path !== 'string') return '未命名文件'

				const parts = path.split('/')
				return parts[parts.length - 1] || '未命名文件'
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