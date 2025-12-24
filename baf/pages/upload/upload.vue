<!-- components/simple-uploader.vue -->
<template>
	
	<view class="simple-uploader">
		<global-status-bar></global-status-bar>
		<uni-easyinput :value="content" :trim="true" type="textarea" :inputBorder="false" 
		style="width:100%; white-space:normal;margin: auto;"
		:clearable="false"  :placeholder="$t('upload.sayAny')" />
		<chunk-uploader ref="chunkUploader" :upload-url="uploadUrl" :content="content"/>
	</view>
</template>

<script>
	import FilePicker from '@/components/file-picker/index.vue'
	import ChunkUploader from '@/components/chunk-uploader/index.vue'
	import GlobalStatusBar from '../../components/global-status-bar/global-status-bar.vue'
	export default {
		name: 'SimpleUploader',
		components: {
			FilePicker,
			ChunkUploader,
			GlobalStatusBar
		},
		
		data() {
			return {
				content:undefined,
				uploadFiles: [],
				isUploading: false,
				fileCounter: 0,
				uploadUrl:''
			}
		},

		computed: {
			successCount() {
				return this.uploadFiles.filter(item => item.status === 'success').length
			},

			errorCount() {
				return this.uploadFiles.filter(item => item.status === 'error').length
			},

			totalProgress() {
				if (this.uploadFiles.length === 0) return 0
				const total = this.uploadFiles.reduce((sum, item) => {
					return sum + (item.progress || 0)
				}, 0)
				return Math.round(total / this.uploadFiles.length)
			}
		},

		created() {
			
		},

		methods: {

		}	
	}
</script>

<style scoped>
	.simple-uploader {
		width: 95%;
		height: 100vh;
		background: white;
		border-radius: 12px;
		margin-left: 20rpx;
		/* overflow-y: hidden; */
		
	}

	/* 上传面板 */
	.upload-panel {
		border-top: 1px solid #eee;
		padding: 20px;
		background: #fafafa;
	}

	.panel-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
		padding-bottom: 10px;
		border-bottom: 1px solid #e8e8e8;
	}

	.panel-title {
		font-size: 16px;
		font-weight: 600;
		color: #333;
	}

	.panel-actions {
		display: flex;
		gap: 8px;
	}

	.panel-btn {
		font-size: 12px;
		padding: 4px 12px;
		border: none;
		border-radius: 6px;
		font-weight: 500;
	}

	.start-btn {
		background-color: #4caf50;
		color: white;
	}

	.pause-btn {
		background-color: #ff9800;
		color: white;
	}

	.clear-btn {
		background-color: #f44336;
		color: white;
	}

	/* 上传列表 */
	.upload-list {
		max-height: 300px;
		margin-bottom: 15px;
		padding-right: 5px;
	}

	.upload-item {
		background: white;
		border-radius: 8px;
		padding: 12px;
		margin-bottom: 10px;
		border: 1px solid #e8e8e8;
	}

	.upload-info {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.file-icon {
		width: 40px;
		height: 40px;
		border-radius: 6px;
		background: #f5f5f5;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 12px;
		flex-shrink: 0;
	}

	.file-icon-img {
		width: 24px;
		height: 24px;
		opacity: 0.6;
	}

	.file-details {
		flex: 1;
		min-width: 0;
	}

	.file-name {
		display: block;
		font-size: 14px;
		font-weight: 500;
		color: #333;
		margin-bottom: 4px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.file-meta {
		display: flex;
		gap: 8px;
	}

	.file-size,
	.file-type {
		font-size: 11px;
		color: #666;
		padding: 2px 6px;
		background: #f0f0f0;
		border-radius: 4px;
	}

	.upload-controls {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 8px;
	}

	.upload-status {
		flex: 1;
	}

	.status {
		font-size: 12px;
		padding: 4px 8px;
		border-radius: 4px;
		display: inline-block;
	}

	.status.waiting {
		background: #f0f0f0;
		color: #666;
	}

	.status.uploading {
		background: #e8f5e9;
		color: #4caf50;
	}

	.status.success {
		background: #e8f5e9;
		color: #4caf50;
	}

	.status.error {
		background: #ffebee;
		color: #f44336;
	}

	.action-buttons {
		display: flex;
		gap: 6px;
	}

	.action-btn {
		font-size: 11px;
		padding: 2px 8px;
		border: none;
		border-radius: 4px;
		min-width: 50px;
	}

	.retry-btn {
		background: #ff9800;
		color: white;
	}

	.remove-btn {
		background: #f44336;
		color: white;
	}

	.upload-progress {
		width: 100%;
	}

	.progress-bar {
		width: 100%;
		height: 4px;
		background: #f0f0f0;
		border-radius: 2px;
		overflow: hidden;
	}

	.progress-fill {
		height: 100%;
		background: #4caf50;
		border-radius: 2px;
		transition: width 0.3s ease;
	}

	/* 统计面板 */
	.stats-panel {
		display: flex;
		justify-content: space-around;
		padding: 12px;
		background: white;
		border-radius: 8px;
		border: 1px solid #e8e8e8;
		margin-top: 15px;
	}

	.stats-item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.stats-label {
		font-size: 11px;
		color: #666;
		margin-bottom: 4px;
	}

	.stats-value {
		font-size: 16px;
		font-weight: 600;
		color: #333;
	}

	.stats-value.success {
		color: #4caf50;
	}

	.stats-value.error {
		color: #f44336;
	}

	/* 调试信息 */
	.debug-info {
		margin-top: 20px;
		border-top: 1px solid #eee;
		padding-top: 15px;
	}

	.debug-header {
		padding: 10px 0;
		font-size: 13px;
		font-weight: 500;
		color: #666;
		cursor: pointer;
		user-select: none;
	}

	.debug-content {
		padding: 10px;
		background: #f9f9f9;
		border-radius: 6px;
		font-family: monospace;
	}

	.debug-item {
		padding: 4px 0;
		font-size: 12px;
		color: #666;
		border-bottom: 1px solid #eee;
	}

	.debug-item:last-child {
		border-bottom: none;
	}
</style>