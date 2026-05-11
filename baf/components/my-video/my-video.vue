<template>
	<view class="video-container">
		<view class="user-status" v-if="needUserMsg" @click="skipToUserDetail">
			<view class="img-block">
				<image :src="userAvatar" class="cover-image" />
			</view>
			<view class="usrn-block">{{userName}}</view>
		</view>
		<view class="content-block" v-if="needUserMsg">
			{{content}}
		</view>
		<video :id="videoId" :src="url" :poster="poster" class="video-block"
			:style="{height:height+'rpx',width:width + 'rpx'}" @play="onPlay"></video>
	</view>

</template>

<script>
	export default {
		props: {
			url: {
				type: String,
				require: true
			},
			poster: {
				type: String,
				require: true
			},
			userAvatar: {
				type: String,

			},
			userName: {
				type: String,

			},
			userId: {
				type: Number
			},
			content: {
				type: String,
				default: ''
			},
			height: {
				type: Number,
				default: 422
			},
			width: {
				type: Number,
				default: 750
			},
			needUserMsg: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				videoId: '',
				videoContext: null
			}
		},
		created() {
			this.videoId = 'vid_' + Math.random().toString(36).substr(2, 9) + '_' + new Date().getTime();
			uni.$off('global-video-play', this.handleOtherVideoPlay);
			uni.$on('global-video-play', this.handleOtherVideoPlay);
		},
		mounted() {
			// 4. 组件挂载后，创建对应的 videoContext 实例
			// 注意：自定义组件内部必须传入第二个参数 this
			this.$nextTick(() => {
				this.videoContext = uni.createVideoContext(this.videoId, this);
			});
		},
		beforeDestroy() {
			// 5. 页面/组件销毁时，移除监听，防止内存泄漏
			uni.$off('global-video-play', this.handleOtherVideoPlay);
			if (this.videoContext) {
				this.videoContext.pause();
			}
		},
		methods: {
			skipToUserDetail() {
				uni.navigateTo({
					url: "/pages/userDetail/userDetail?id=" + this.userId
				})
			},
			onPlay() {
				// 发送全局广播：告诉其他组件，"我（videoId）开始播放了"
				uni.$emit('global-video-play', this.videoId);
			},
			handleOtherVideoPlay(playingVideoId) {
				// 如果正在播放的视频 ID 不是我自己的 ID，且我的上下文已初始化，我就暂停
				if (playingVideoId !== this.videoId) {
					// 重新获取 context 保证在列表刷新后依然有效
					const ctx = uni.createVideoContext(this.videoId, this);
					if (ctx) {
						ctx.pause();
					}
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.video-container {
		width: 100%;
		background-color: white;

		.user-status {
			padding: 20rpx;
			width: 100%;
			display: flex;
			flex-direction: row;

			.img-block {
				height: 100rpx;
				width: 100rpx;
				border-radius: 50%;
				overflow: hidden;

				.cover-image {
					width: 100%;
					height: 100%;
				}
			}

			.usrn-block {
				margin-left: 20rpx;
				height: 100%;
				line-height: 100rpx;
			}
		}

		.content-block {
			padding: 0 20rpx 20rpx 20rpx;
			white-space: normal;
		}

		.video-block {
			width: 100%;

		}
	}
</style>