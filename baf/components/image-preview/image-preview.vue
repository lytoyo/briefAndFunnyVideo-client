<template>
	<view class="image-preview-container">
		<!-- 顶部导航栏 -->
		<view class="preview-header" :style="{ paddingTop: statusBarHeight + 'px' }">
			<view class="header-left" @click="goBack">
				<text class="iconfont icon-back"></text>
			</view>
			<view class="header-title">
				{{ currentIndex + 1 }}/{{ imageList.length }}
			</view>
			<view class="header-right"></view>
		</view>
		
		<!-- 长图预览区域 -->
		<scroll-view 
			v-if="isTallImage"
			class="tall-image-scroll"
			scroll-y
			:scroll-top="scrollTop"
			:style="{ height: windowHeight - statusBarHeight - 44 + 'px' }"
		>
			<image 
				:src="currentImage" 
				mode="widthFix" 
				class="tall-image-content"
				@load="onImageLoaded"
			></image>
		</scroll-view>
		
		<!-- 多图预览区域 -->
		<swiper 
			v-else
			class="multi-image-swiper"
			:current="currentIndex"
			:duration="300"
			@change="onSwiperChange"
			:style="{ height: windowHeight - statusBarHeight - 44 + 'px' }"
		>
			<swiper-item v-for="(item, index) in imageList" :key="index">
				<scroll-view scroll-y class="swiper-item-scroll">
					<image 
						:src="item" 
						mode="widthFix" 
						class="swiper-image"
						@load="onImageLoaded"
					></image>
				</scroll-view>
			</swiper-item>
		</swiper>
		
		<!-- 底部指示器 -->
		<view v-if="!isTallImage" class="preview-indicator">
			<view 
				v-for="(item, index) in imageList" 
				:key="index"
				:class="['indicator-dot', { active: currentIndex === index }]"
			></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageList: [],
				currentIndex: 0,
				currentImage: '',
				isTallImage: false,
				windowHeight: 0,
				statusBarHeight: 0,
				scrollTop: 0,
				imageHeight: 0
			}
		},
		onLoad(options) {
			const { url, current = 0, type } = options;
			
			if (url) {
				// 分割URL
				this.imageList = url.split(',').map(item => item.trim());
				this.currentIndex = parseInt(current) || 0;
				this.currentImage = this.imageList[this.currentIndex];
				this.isTallImage = type === 'tall';
			}
			
			this.initSystemInfo();
		},
		onReady() {
			// 隐藏原生导航栏
			uni.hideHomeButton();
		},
		methods: {
			// 初始化系统信息
			initSystemInfo() {
				const systemInfo = uni.getSystemInfoSync();
				this.windowHeight = systemInfo.windowHeight;
				this.statusBarHeight = systemInfo.statusBarHeight;
			},
			
			// 返回上一页
			goBack() {
				uni.navigateBack({
					delta: 1
				});
			},
			
			// 图片加载完成
			onImageLoaded(e) {
				// 可以在这里获取图片实际尺寸
				const { width, height } = e.detail;
				this.imageHeight = height;
			},
			
			// Swiper切换
			onSwiperChange(e) {
				const { current } = e.detail;
				this.currentIndex = current;
				this.currentImage = this.imageList[current];
			},
			
			// 长图滚动
			scrollToTop() {
				this.scrollTop = 0;
				this.$nextTick(() => {
					this.scrollTop = 0;
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
.image-preview-container {
	width: 100vw;
	height: 100vh;
	background: #000;
	
	/* 顶部导航栏 */
	.preview-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 44px;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(10px);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20rpx;
		z-index: 1000;
		
		.header-left {
			width: 80rpx;
			
			.icon-back {
				color: #fff;
				font-size: 40rpx;
			}
		}
		
		.header-title {
			color: #fff;
			font-size: 32rpx;
		}
		
		.header-right {
			width: 80rpx;
		}
	}
	
	/* 长图预览 */
	.tall-image-scroll {
		width: 100%;
		background: #000;
		
		.tall-image-content {
			width: 100%;
		}
	}
	
	/* 多图预览 */
	.multi-image-swiper {
		width: 100%;
		
		.swiper-item-scroll {
			width: 100%;
			height: 100%;
			
			.swiper-image {
				width: 100%;
			}
		}
	}
	
	/* 指示器 */
	.preview-indicator {
		position: fixed;
		bottom: 40rpx;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		gap: 12rpx;
		z-index: 1000;
		
		.indicator-dot {
			width: 12rpx;
			height: 12rpx;
			border-radius: 50%;
			background: rgba(255, 255, 255, 0.4);
			transition: all 0.3s ease;
			
			&.active {
				background: #fff;
				transform: scale(1.2);
			}
		}
	}
}
</style>