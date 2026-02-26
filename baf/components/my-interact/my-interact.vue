<template>
	<view class="interact-container">
		<!-- 点赞按钮 -->
		<view class="item-block" :class="{ 'active': isLiked }" @click="handleLike">
			<view class="icon-block">
				<image :src="isLiked ? '/static/liked.png' : '/static/like.png'"
					:class="['interact-icon', { 'liked-animation': likeAnimate }]" @animationend="likeAnimate = false">
				</image>
			</view>
			<view class="num-block" :class="{ 'active-text': isLiked }">{{likeCount}}</view>
		</view> 

		<!-- 评论按钮 -->
		<view class="item-block" @click="handleComment" :class="{ 'tap-animation': commentAnimate }"
			@animationend="commentAnimate = false">
			<view class="icon-block">
				<image src="/static/message.png" class="interact-icon"></image>
			</view>
			<view class="num-block">{{commentCount}}</view>
		</view>

		<!-- 收藏按钮 -->
		<view class="item-block" :class="{ 'active': isCollect }" @click="handleCollect">
			<view class="icon-block">
				<image :src="isCollect ? '/static/collected.png' : '/static/collect.png'"
					:class="['interact-icon', { 'collect-animation': collectAnimate }]"
					@animationend="collectAnimate = false"></image>
			</view>
			<view class="num-block" :class="{ 'active-text': isCollect }">{{collectCount}}</view>
		</view>
	</view>
</template>

<script>
	import http from '@/utils/request.js'
	export default {
		props: {
			likeCount: {
				type: Number,
				default: 0
			},
			commentCount: {
				type: Number,
				default: 0
			},
			collectCount: {
				type: Number,
				default: 0
			},
			isLiked: {
				type: Boolean,
				default: false
			},
			isCollect: {
				type: Boolean,
				default: false
			},
			id:{
				type:Number,
				require:true
			},
			postIndex:{
				type:Number,
				require:true
			},
			current:{
				type:Number,
				require:true
			}
		},
		data() {
			return {
				likeAnimate: false,
				collectAnimate: false,
				commentAnimate: false
			}
		},
		methods: {
			handleLike() {
				if(!http.hadLogin()){
					uni.showToast({
						title:'该操作需要先登录，请先登录',
						icon:'none'
					}),
					uni.navigateTo({
						url:'/pages/loginAndRegister/loginAndRegister'
					})
				}
				if (!this.likeAnimate) {
					this.likeAnimate = true;
					var params = {
						id:this.id,
						isLiked : !this.isLiked,
					}
					this.$emit('like-click', params,this.current,this.postIndex);
				} 
			},
			handleCollect() {
				if(!http.hadLogin()){
					uni.showToast({
						title:'该操作需要先登录，请先登录',
						icon:'none'
					}),
					uni.navigateTo({
						url:'/pages/loginAndRegister/loginAndRegister'
					})
				}
				if (!this.collectAnimate) {
					this.collectAnimate = true;
					var blog = {
						id:this.id,
						isCollect: !this.isCollect
					}
					this.$emit('collect-click', blog,this.current,this.postIndex);
				}
			},
			handleComment() {
				this.commentAnimate = true; 
				//跳转用户详情页面
				uni.navigateTo({
					url:`/pages/postDetails/postDetails?postId=${this.id}`
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.interact-container {
		width: 100%;
		height: 120rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		background: #f8f9fa;
		border-radius: 20rpx;
		padding: 0 20rpx;
		box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);

		.item-block {
			flex: 1;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			height: 80rpx;
			border-radius: 16rpx;
			margin: 0 10rpx;
			padding: 0 20rpx;
			transition: all 0.2s ease;
			position: relative;

			&:active {
				background: rgba(0, 0, 0, 0.05);
				transform: scale(0.96);
			}

			&.active {
				background: rgba(255, 68, 68, 0.08);

				.num-block {
					color: #ff4444;
					font-weight: 600;
				}
			}

			&.tap-animation {
				animation: tapScale 0.3s ease;
			}

			.icon-block {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 60rpx;
				height: 60rpx;

				.interact-icon {
					width: 44rpx;
					height: 44rpx;
					transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

					&.liked-animation {
						animation: likeBeat 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
					}

					&.collect-animation {
						animation: collectSpin 0.6s ease;
					}
				}
			}

			.num-block {
				font-size: 28rpx;
				color: #666;
				margin-left: 12rpx;
				font-weight: 500;
				transition: all 0.2s ease;
				min-width: 40rpx;
				text-align: center;

				&.active-text {
					color: #ff4444;
				}
			}
		}
	}

	/* 点赞动画 */
	@keyframes likeBeat {
		0% {
			transform: scale(1);
		}

		15% {
			transform: scale(1.4) rotate(-8deg);
		}

		30% {
			transform: scale(1.2) rotate(8deg);
		}

		45% {
			transform: scale(1.4) rotate(-8deg);
		}

		60% {
			transform: scale(1.2) rotate(8deg);
		}

		75% {
			transform: scale(1.3) rotate(-4deg);
		}

		100% {
			transform: scale(1) rotate(0);
		}
	}

	/* 收藏动画 */
	@keyframes collectSpin {
		0% {
			transform: scale(1) rotate(0);
		}

		20% {
			transform: scale(1.3) rotate(180deg);
		}

		40% {
			transform: scale(1.1) rotate(360deg);
		}

		60% {
			transform: scale(1.2) rotate(540deg);
		}

		80% {
			transform: scale(1.05) rotate(720deg);
		}

		100% {
			transform: scale(1) rotate(720deg);
		}
	}

	/* 点击缩放动画 */
	@keyframes tapScale {
		0% {
			transform: scale(1);
		}

		50% {
			transform: scale(0.92);
		}

		100% {
			transform: scale(1);
		}
	}

	/* 悬停效果（H5端） */
	@media (hover: hover) and (pointer: fine) {
		.item-block:hover {
			background: rgba(0, 0, 0, 0.03);
			transform: translateY(-2rpx);
			box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);

			.interact-icon {
				transform: scale(1.1);
			}
		}

		.item-block.active:hover {
			background: rgba(255, 68, 68, 0.12);
		}
	}

	/* 响应式调整 */
	@media (max-width: 750rpx) {
		.interact-container {
			height: 100rpx;
			padding: 0 16rpx;
		}

		.item-block {
			padding: 0 16rpx;

			.icon-block {
				width: 52rpx;
				height: 52rpx;

				.interact-icon {
					width: 40rpx;
					height: 40rpx;
				}
			}

			.num-block {
				font-size: 24rpx;
				margin-left: 8rpx;
				min-width: 36rpx;
			}
		}
	}
</style>