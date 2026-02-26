<template>
	<view class="my-grid-container">
		<view class="user-status" v-if="needUserMsg" @click="skipToUserDetail()">
			<view class="img-block"> 
				<image :src="userAvatar" class="cover-image" mode="aspectFill"/>
			</view>
			<view class="usrn-block">{{userName}}</view>
		</view>
		
		<view class="content-block" v-if="needUserMsg">
			{{content}}
		</view>
		
		<!-- 图片展示区域 -->
		<view class="images-grid" :class="'grid-' + imgList.length">
			<!-- 单张图片 -->
			<view v-if="imgList.length === 1" class="single-image-wrapper" @click.stop="previewImage(0)">
				<view class="image-container" :style="containerStyle">
					<image 
						:src="imgList[0]" 
						class="grid-image"
						:style="imageStyle"
						@load="onImageLoad(0, $event)"
						lazy-load
					></image>
					<!-- 长图标签放在图片容器内 -->
					<view v-if="showTallLabel" class="tall-image-label">长图</view>
				</view>
			</view>
			
			<!-- 两张图片 -->
			<template v-else-if="imgList.length === 2">
				<view 
					v-for="(item, index) in imgList" 
					:key="index" 
					class="double-image-wrapper"
					@click.stop="previewImage(index)"
				>
					<image 
						:src="item" 
						class="grid-image"
						mode="aspectFill"
						@load="onImageLoad(index, $event)"
						lazy-load
					></image>
					<view v-if="imageInfos[index] && imageInfos[index].isTall" class="tall-image-label">长图</view>
				</view>
			</template>
			
			<!-- 三张图片 -->
			<template v-else-if="imgList.length === 3">
				<view 
					v-for="(item, index) in imgList" 
					:key="index" 
					class="three-image-wrapper"
					@click.stop="previewImage(index)"
				>
					<image 
						:src="item" 
						class="grid-image"
						mode="aspectFill"
						@load="onImageLoad(index, $event)"
						lazy-load
					></image>
				</view>
			</template>
			
			<!-- 四张图片 -->
			<template v-else-if="imgList.length === 4">
				<view 
					v-for="(item, index) in imgList" 
					:key="index" 
					class="four-image-wrapper"
					@click.stop="previewImage(index)"
				>
					<image 
						:src="item" 
						class="grid-image"
						mode="aspectFill"
						@load="onImageLoad(index, $event)"
						lazy-load
					></image>
				</view>
			</template>
			
			<!-- 5-9张图片 -->
			<template v-else-if="imgList.length > 4">
				<view 
					v-for="(item, index) in imgList.slice(0, 9)" 
					:key="index" 
					class="multi-image-wrapper"
					@click.stop="previewImage(index)"
				>
					<image 
						:src="item" 
						class="grid-image"
						mode="aspectFill"
						@load="onImageLoad(index, $event)"
						lazy-load
					></image>
					<!-- 超过9张显示更多 -->
					<view v-if="imgList.length > 9 && index === 8" class="more-overlay">
						<text class="more-text">+{{ imgList.length - 9 }}</text>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'my-grid',
		props: {
			url: {
				type: String,
				default: ''
			},
			maxCount: {
				type: Number,
				default: 9
			},
			userAvatar: {
				type: String,
				
			},
			userId:{
				type:Number
			},
			userName: {
				type: String,
				
			},
			content: {
				type: String,
				
			},
			needUserMsg:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {
				imgList: [],
				imageInfos: {},
				windowHeight: 0,
				windowWidth: 0,
				debug: false
			}
		},
		computed: {
			// 获取第一张图片的信息
			imageInfo() {
				return this.imageInfos[0];
			},
			
			// 是否显示长图标签
			showTallLabel() {
				return this.imageInfo && this.imageInfo.isTall;
			},
			
			// 容器样式 - 自适应图片尺寸
			containerStyle() {
				if (!this.imageInfo) {
					return {
						display: 'inline-block',
						position: 'relative',
						maxWidth: '100%'
					};
				}
				
				const imgWidth = this.imageInfo.width;
				const imgHeight = this.imageInfo.height;
				const isTall = this.imageInfo.isTall;
				
				// 计算显示尺寸
				let displayWidth, displayHeight;
				
				// 计算最大限制
				const maxDisplayWidth = this.windowWidth * 0.5; // 最大宽度为屏幕50%
				const maxDisplayHeight = this.windowHeight * 0.5; // 最大高度为屏幕50%
				
				if (isTall) {
					// 长图：固定显示高度，宽度按比例计算
					displayHeight = Math.min(imgHeight, maxDisplayHeight);
					displayWidth = (imgWidth / imgHeight) * displayHeight;
					
					// 确保宽度不超过最大限制
					if (displayWidth > maxDisplayWidth) {
						displayWidth = maxDisplayWidth;
						displayHeight = (imgHeight / imgWidth) * displayWidth;
					}
				} else {
					// 正常图片：等比例缩放
					const widthRatio = maxDisplayWidth / imgWidth;
					const heightRatio = maxDisplayHeight / imgHeight;
					const scaleRatio = Math.min(widthRatio, heightRatio, 1); // 不超过原图大小
					
					displayWidth = imgWidth * scaleRatio;
					displayHeight = imgHeight * scaleRatio;
				}
				
				// 转换为rpx
				const rpxRatio = 750 / this.windowWidth;
				const widthRpx = Math.round(displayWidth * rpxRatio);
				const heightRpx = Math.round(displayHeight * rpxRatio);
				
				return {
					width: widthRpx + 'rpx',
					height: heightRpx + 'rpx',
					display: 'inline-block',
					position: 'relative',
					maxWidth: '100%'
				};
			},
			
			// 图片样式
			imageStyle() {
				return {
					width: '100%',
					height: '100%',
					display: 'block',
					borderRadius: '8rpx'
				};
			}
		},
		watch: {
			url: {
				immediate: true,
				handler(newVal) {
					this.processImageUrls(newVal);
				}
			}
		},
		mounted() {
			this.getWindowSize();
		},
		methods: {
			// 获取窗口尺寸
			getWindowSize() {
				try {
					const systemInfo = uni.getSystemInfoSync();
					this.windowWidth = systemInfo.windowWidth;
					this.windowHeight = systemInfo.windowHeight;
				} catch (e) {
					console.error('获取窗口尺寸失败:', e);
				}
			},
			
			// 处理图片URL
			processImageUrls(urls) {
				if (!urls || typeof urls !== 'string') {
					this.imgList = [];
					return;
				}
				
				let list = urls.split(',')
					.map(url => url.trim())
					.filter(url => url && url !== '');
				
				if (list.length > this.maxCount) {
					list = list.slice(0, this.maxCount);
				}
				
				this.imgList = list;
			},
			
			// 图片加载完成
			onImageLoad(index, e) {
				const detail = e.detail;
				const width = detail.width;
				const height = detail.height;
				
				const aspectRatio = height / width;
				const isTall = aspectRatio > 2;
				
				const imageInfo = {
					width: width,
					height: height,
					aspectRatio: aspectRatio,
					isTall: isTall
				};
				
				this.$set(this.imageInfos, index, imageInfo);
			},
			
			// 预览图片
			previewImage(currentIndex) {
				if (!this.imgList.length) {
					return;
				}
				
				uni.previewImage({
					current: currentIndex,
					urls: this.imgList,
					indicator: 'number',
					loop: false 
				});
			},
			skipToUserDetail(){
				uni.navigateTo({
					url:"/pages/userDetail/userDetail?id=" + this.userId
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.my-grid-container {
	width: 100%;
	background: #fff;
	
	
	.user-status {
		padding: 20rpx 20rpx 0 20rpx;
		display: flex;
		align-items: center;
		
		.img-block {
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
			overflow: hidden;
			background: #f5f5f5;
			
			.cover-image {
				width: 100%;
				height: 100%;
			}
		}
		
		.usrn-block {
			margin-left: 20rpx;
			font-size: 32rpx;
			font-weight: bold;
			color: #333;
			line-height: 80rpx;
		}
	}
	
	.content-block {
		padding: 20rpx;
		font-size: 28rpx;
		color: #333;
		line-height: 1.5;
	}
	
	/* 图片网格容器 */
	.images-grid {
		
		
		/* 通用图片样式 */
		.grid-image {
			background: #f5f5f5;
		}
		
		/* 长图标签 - 在图片容器内部 */
		.tall-image-label {
			position: absolute;
			right: 12rpx;
			bottom: 12rpx;
			background: rgba(0, 0, 0, 0.7);
			color: #fff;
			font-size: 20rpx;
			padding: 4rpx 12rpx;
			border-radius: 20rpx;
			z-index: 2;
		}
		
		/* 单张图片 */
		&.grid-1 {
			.single-image-wrapper {
				.image-container {
					position: relative;
					display: inline-block;
					border-radius: 8rpx;
					overflow: hidden;
					
					.grid-image {
						width: 100%;
						height: 100%;
						display: block;
						border-radius: 8rpx;
					}
				}
			}
		}
		
		/* 两张图片 */
		&.grid-2 {
			display: flex;
			justify-content: space-between;
			
			.double-image-wrapper {
				width: calc(50% - 2rpx);
				position: relative;
				border-radius: 8rpx;
				overflow: hidden;
				
				.grid-image {
					width: 100%;
					height: 300rpx;
					object-fit: cover;
				}
				
				&:first-child {
					margin-right: 2rpx;
				}
				
				&:last-child {
					margin-left: 2rpx;
				}
			}
		}
		
		/* 三张图片 */
		&.grid-3 {
			display: flex;
			justify-content: space-between;
			
			.three-image-wrapper {
				width: calc(33.333% - 2.667rpx);
				position: relative;
				border-radius: 8rpx;
				overflow: hidden;
				
				.grid-image {
					width: 100%;
					height: 300rpx;
					object-fit: cover;
				}
				
				&:first-child {
					margin-right: 2rpx;
				}
				
				&:nth-child(2) {
					margin: 0 2rpx;
				}
				
				&:last-child {
					margin-left: 2rpx;
				}
			}
		}
		
		/* 四张图片 */
		&.grid-4 {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			gap: 10rpx;
			
			.four-image-wrapper {
				position: relative;
				border-radius: 8rpx;
				overflow: hidden;
				
				.grid-image {
					width: 100%;
					height: 300rpx;
					object-fit: cover;
				}
			}
		}
		
		/* 5-9张图片 */
		&.grid-5, &.grid-6, &.grid-7, &.grid-8, &.grid-9 {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 4rpx;
			
			.multi-image-wrapper {
				position: relative;
				border-radius: 8rpx;
				overflow: hidden;
				background: #f5f5f5;
				
				&::before {
					content: '';
					display: block;
					padding-top: 100%;
				}
				
				.grid-image {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
				
				.more-overlay {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: rgba(0, 0, 0, 0.5);
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 8rpx;
					
					.more-text {
						color: #fff;
						font-size: 40rpx;
						font-weight: bold;
					}
				}
			}
		}
	}
	
}
</style>