<!-- components/file-picker.vue -->
<template>
	<view class="file-picker">
		<!-- 上传选项 -->
		<view class="upload-options">
			<!-- 上传图片按钮 -->
			<view class="option-item" @click="chooseImages">
				<view class="option-icon">
					<image src="/static/add.png" mode="aspectFit" class="option-icon-img" />
				</view>
				<text class="option-label">选择图片</text>
			</view>

			<!-- 上传视频按钮 -->
			<view class="option-item" @click="chooseVideo">
				<view class="option-icon">
					<image src="/static/add.png" mode="aspectFit" class="option-icon-img" />
				</view>
				<text class="option-label">选择视频</text>
			</view>
		</view>

		<!-- 视频展示区域 - 单张展示 -->
		<view v-if="hasVideo" class="video-container">
			<view class="video-item">
				<!-- 视频预览 -->
				<view class="video-preview" >
					<video 
						:src="selectedFiles[0].path"  
						class="video-player"
					/>
					<text class="video-type">视频</text>
					
					<!-- 删除按钮 -->
					<view class="delete-btn video-delete-btn" @click.stop="removeFile(0)">
						<text>×</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 图片展示区域 - 九宫格布局 -->
		<view v-else-if="hasImages" class="image-container">
			<view class="image-list">
				<view v-for="(image, index) in selectedImages" :key="image.path || `image_${index}`" 
					class="image-item" @click="previewImage(index)">
					<!-- 图片预览 -->
					<image :src="image.path" mode="aspectFill" class="image-preview" lazy-load />
					
					<!-- 图片序号 -->
					<view class="image-index">{{ index + 1 }}</view>
					
					<!-- 删除按钮 -->
					<view class="delete-btn" @click.stop="removeFile(index)">
						<text>×</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 空状态提示 -->
		<view v-else class="empty-state">
			<view class="empty-content">
				<image src="/static/add.png" mode="aspectFit" class="empty-icon" />
				<text class="empty-text">暂未选择文件</text>
				<text class="empty-hint">请点击上方按钮选择图片或视频</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: 'FilePicker',
		props: {
			// 图片最大数量限制
			maxImageCount: {
				type: Number,
				default: 9
			},
			// 视频最大数量限制
			maxVideoCount: {
				type: Number,
				default: 1
			},
			
		},

		data() {
			return {
				selectedFiles: [],
				fileType: null 
			}
		},

		computed: {
			// 是否有文件
			hasFiles() {
				return this.selectedFiles.length > 0
			},
			
			// 是否有视频
			hasVideo() {
				return this.selectedFiles.some(file => file.type === 'video')
			},
			
			// 是否有图片
			hasImages() {
				return this.selectedFiles.some(file => file.type === 'image')
			},
			
			// 获取当前视频
			currentVideo() {
				return this.selectedFiles.find(file => file.type === 'video')
			},
			
			// 获取所有图片
			selectedImages() {
				return this.selectedFiles.filter(file => file.type === 'image')
			},
			
			// 当前图片数量
			currentImageCount() {
				return this.selectedImages.length
			},
			
			// 计算文件数量
			fileCounts() {
				return {
					total: this.selectedFiles.length,
					images: this.currentImageCount,
					videos: this.hasVideo ? 1 : 0
				}
			},
			
			// 图片剩余可添加数量
			remainingImageSlots() {
				return this.maxImageCount - this.currentImageCount
			}
		},

		methods: {
			// 选择图片
			chooseImages() {
				// 如果当前是视频，先清空
				if (this.fileType === 'video') {
					this.selectedFiles = []
					this.fileType = null
					this.$emit('change')
				}
				
				// 如果已经达到最大图片数量
				if (this.currentImageCount >= this.maxImageCount) {
					uni.showToast({
						title: `最多只能选择${this.maxImageCount}张图片`,
						icon: 'none',
						duration: 2000
					})
					return
				}
				
				// 计算最多还能选择多少张
				const remaining = this.maxImageCount - this.currentImageCount
				
				uni.chooseImage({
					count: Math.min(remaining, 9), // 计算实际可选择的图片数量
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						this.handleSelectedFiles(res.tempFiles, 'image', res)
						this.fileType = 'image'
					},
					fail: (err) => {
						this.$emit('error', {
							type: 'chooseImage',
							error: err
						})
						uni.showToast({
							title: '选择图片失败',
							icon: 'none'
						})
					}
				})
			},

			// 选择视频
			chooseVideo() {
				// 如果当前是图片，先清空
				if (this.fileType === 'image') {
					this.selectedFiles = []
					this.fileType = null
					this.$emit('change')
				}
				
				// 如果已经有视频
				if (this.hasVideo) {
					uni.showToast({
						title: `最多只能选择${this.maxVideoCount}个视频`,
						icon: 'none',
						duration: 2000
					})
					return
				}
				
				uni.chooseVideo({
					sourceType: ['album', 'camera'],
					maxDuration: 60,
					compressed: true,
					camera: 'back',
					success: (res) => {
						const videoFile = {
							path:res.tempFilePath,
							size:res.size,
							type: 'video',
							height:res.height,
							width:res.width,
							size: res.size,
							duration: res.duration,
							suffix:res.tempFilePath.substring(res.tempFilePath.lastIndexOf("."))
						}
						this.handleSelectedFiles([videoFile], 'video', res)
						this.fileType = 'video'
					},
					fail: (err) => {
						this.$emit('error', {
							type: 'chooseVideo',
							error: err
						})
						uni.showToast({
							title: '取消视频选择',
							icon: 'none'
						})
					}
				})
			},

			// 处理选择的文件
			handleSelectedFiles(files, type, originalRes) {
				
				if (!files || files.length === 0) return
				if(type === 'image'){
					
					// 处理文件对象
					const processedFiles = files.map(file => {
						const processedFile = {
							type: type,
							path:file.path,
							size:file.size,
							suffix:file.path.substring(file.path.lastIndexOf(".")),
						}
						
						return processedFile
					})
					
					// 添加到选中文件列表
					this.selectedFiles.push(...processedFiles)
					// 触发选择事件
					this.$emit('select', {
						files: processedFiles,
						type: type,
						total: this.selectedFiles.length,
						originalRes: originalRes
					})
				}else{
					this.selectedFiles = files
					this.$emit('select',{
						files: files,
						type:type,
						total: this.selectedFiles.length,
						originalRes: originalRes
					})
				}
				
			},
			
			// 预览图片
			previewImage(index) {
				var imageUrls = this.selectedFiles.map(f => f.path)
				uni.previewImage({
					urls: imageUrls,
					current: index,
					indicator: 'number',
					loop: true,
					success: () => {
						const file = this.selectedImages[index]
						this.$emit('preview', {
							type: 'image',
							file: file,
							index: index,
							originalRes: file.originalResponse
						})
					}
				})
			},

			// 删除文件
			removeFile(index) {
				if (index >= 0 && index < this.selectedFiles.length) {
					const removedFile = this.selectedFiles.splice(index, 1)[0]
					
					// 如果删除后没有文件了，重置文件类型
					if (this.selectedFiles.length === 0) {
						this.fileType = null
					}
					
					this.$emit('remove', {
						file: removedFile,
						index: index,
						remaining: this.selectedFiles.length,
						originalRes: removedFile.originalResponse
					})
					
				}
			},

			// 重置组件
			reset() {
				this.selectedFiles = []
				this.fileType = null
			}
		}
	}
</script>

<style scoped>
	.file-picker {
		width: 100%;
		padding: 0;
		box-sizing: border-box;
		background-color: white;
		border-radius: 0;
	}

	/* 上传选项 */
	.upload-options {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 40px;
		margin: 0 auto 20px;
		padding: 20px 0;
		border-bottom: 1px solid #f0f0f0;
		max-width: 300px;
	}

	.option-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0;
		background: none;
		border: none;
		cursor: pointer;
		transition: all 0.3s ease;
		min-width: 100px;
	}

	.option-item:active {
		opacity: 0.7;
		transform: scale(0.95);
	}

	.option-icon {
		width: 60px;
		height: 60px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		border-radius: 50%;
		padding: 15px;
		box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
	}

	.option-icon-img {
		width: 30px;
		height: 30px;
		filter: brightness(0) invert(1);
	}

	.option-label {
		font-size: 16px;
		font-weight: 500;
		color: #333;
		margin-bottom: 4px;
		text-align: center;
	}

	/* 视频展示区域 */
	.video-container {
		padding: 0 20px 20px;
	}

	.video-item {
		background: white;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.video-preview {
		position: relative;
		width: 100%;
		height: 200px;
		background: #000;
		cursor: pointer;
		overflow: hidden;
	}

	.video-player {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.video-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
	}

	.play-icon {
		width: 50px;
		height: 50px;
		filter: brightness(0) invert(1);
		opacity: 0.9;
	}

	.video-duration {
		position: absolute;
		bottom: 10px;
		right: 10px;
		background: rgba(0, 0, 0, 0.7);
		color: white;
		font-size: 12px;
		padding: 4px 8px;
		border-radius: 4px;
		pointer-events: none;
	}

	.video-type {
		position: absolute;
		top: 10px;
		left: 10px;
		background: rgba(0, 0, 0, 0.7);
		color: white;
		font-size: 12px;
		padding: 4px 12px;
		border-radius: 4px;
		pointer-events: none;
	}

	.video-delete-btn {
		top: 10px;
		right: 10px;
		width: 30px;
		height: 30px;
		background: rgba(255, 0, 0, 0.8);
		color: white;
		border-radius: 50%;
		font-size: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
		cursor: pointer;
		transition: all 0.2s;
	}

	.video-delete-btn:active {
		transform: scale(0.9);
		background: rgba(255, 0, 0, 1);
	}

	.video-info {
		padding: 12px 15px;
		border-top: 1px solid #f0f0f0;
	}

	.video-name {
		display: block;
		font-size: 16px;
		font-weight: 500;
		color: #333;
		margin-bottom: 6px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.video-meta {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.video-size,
	.video-duration-text {
		font-size: 12px;
		color: #666;
		padding: 2px 8px;
		background: #f5f5f5;
		border-radius: 4px;
	}

	/* 图片展示区域 */
	.image-container {
		padding: 0 8px 20px;
	}

	.image-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 8px;
	}

	.image-item {
		position: relative;
		background: white;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
		aspect-ratio: 1/1;
		cursor: pointer;
	}

	.image-item:active {
		transform: scale(0.98);
	}

	.image-preview {
		width: 100%;
		height: 100%;
		object-fit: cover;
		background: #f5f5f5;
	}

	.image-index {
		position: absolute;
		top: 8px;
		left: 8px;
		background: rgba(0, 0, 0, 0.6);
		color: white;
		font-size: 12px;
		padding: 2px 6px;
		border-radius: 3px;
		pointer-events: none;
	}

	.delete-btn {
		position: absolute;
		top: 8px;
		right: 8px;
		width: 24px;
		height: 24px;
		background: rgba(219, 219, 219, 0.8);
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		font-weight: bold;
		z-index: 2;
		cursor: pointer;
		transition: all 0.2s;
	}

	.delete-btn:active {
		transform: scale(0.9);
		background: rgba(255, 0, 0, 1);
	}

	/* 空状态 */
	.empty-state {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 200px;
		padding: 40px 20px;
		background: white;
	}

	.empty-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		opacity: 0.6;
	}

	.empty-icon {
		width: 60px;
		height: 60px;
		margin-bottom: 12px;
		opacity: 0.4;
	}

	.empty-text {
		font-size: 16px;
		color: #999;
		margin-bottom: 8px;
		font-weight: 500;
	}

	.empty-hint {
		font-size: 12px;
		color: #ccc;
	}

	/* 操作按钮 */
	.action-buttons {
		display: flex;
		gap: 12px;
		margin: 0 8px 20px;
		padding: 0 0 20px;
		border-top: 1px solid #f0f0f0;
		padding-top: 20px;
	}

	.action-btn {
		flex: 1;
		height: 40px;
		border: none;
		border-radius: 8px;
		font-size: 16px;
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.2s;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.action-btn:active {
		transform: translateY(2px);
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	}

	.clear-btn {
		background: #f0f0f0;
		color: #666;
		border: 1px solid #e0e0e0;
	}

	.confirm-btn {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border: none;
	}

	/* 响应式设计 */
	@media (max-width: 480px) {
		.upload-options {
			gap: 20px;
		}

		.option-icon {
			width: 50px;
			height: 50px;
		}

		.option-label {
			font-size: 14px;
		}
		
		.image-list {
			gap: 6px;
		}
		
		.video-preview {
			height: 180px;
		}
		
		.play-icon {
			width: 40px;
			height: 40px;
		}
	}
</style>