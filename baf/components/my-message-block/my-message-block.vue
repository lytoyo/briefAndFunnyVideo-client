<template>
	<view v-if="message" class="message-container" @click="skipToChat(message.otherId)">
		<view class="message-avatar-block">
			<image :src="message.otherAvatar"></image>
		</view>
		<view class="message-status-block">
			<view class="name-time-block">
				<view class="message-user-name-block">
					<view class="name-block">
						{{message.otherUserName}}
					</view>
					<view class="authority-block">

					</view>
				</view>
				<view class="message-public-block">
					{{formatTimeAgo(message.chatList[message.chatList.length-1].publicTime)}}
				</view>
			</view>
			<view class="content-dot-block">
				<view class="last-message-block">
					{{formatLastMessage(message.chatList[message.chatList.length-1])}}
				</view>
				<view class="message-dot-num-block">
					<uni-badge size="normal" :text="message.unread" type="error"></uni-badge>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import userStore from '@/store/localStore/index.js'
	import http from '../../utils/request'
	import messageStore from '@/store/message/index.js'
	export default {
		props: {
			message: {
				type: Object,
				default: () => ({})
			}
		},
		mounted() {

		},
		data() {
			return {

			}
		},
		methods: {
			formatTimeAgo(timeStr) {
				if (!timeStr) return ''

				const date = new Date(timeStr)
				const now = new Date()
				const diffInSeconds = Math.floor((now - date) / 1000)
				const diffInMinutes = Math.floor(diffInSeconds / 60)
				const diffInHours = Math.floor(diffInMinutes / 60)
				const diffInDays = Math.floor(diffInHours / 24)

				// 一分钟内
				if (diffInSeconds < 60) {
					return `刚刚`
				}

				// 一小时内
				if (diffInMinutes < 60) {
					return `${diffInMinutes}分钟前`
				}

				// 一天内
				if (diffInHours < 24) {
					return `${diffInHours}小时前`
				}

				const currentYear = now.getFullYear()
				const targetYear = date.getFullYear()
				const month = date.getMonth() + 1
				const day = date.getDate()

				// 一年内
				if (currentYear === targetYear) {
					if (month < 10) {
						return `${month}-${day.toString().padStart(2, '0')}`
					} else {
						return `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
					}
					return `${month}-${day}`
				}

				// 一年后
				const year = date.getFullYear()
				return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
			},
			formatLastMessage(message) {
				if(message.type === 'system'){
					return message.data.content
				}
				let name = ''
				let content = ''
				if (userStore.getUserid() === message.fromUserId) {
					name = '我：'
				}
				if (message.data.fileType === null || message.data.fileType === undefined) {
					content = message.data.content
				}
				if (message.data.fileType === 'image') {
					content = '[图片]'
				}
				if (message.data.fileType === 'video') {
					content = '[视频]'
				}
				return name + content
			},
			skipToChat(userId) {
				if (http.getToken() === null ||
					http.getToken() === undefined ||
					userStore.getUserid() === null ||
					userStore.getUserid() === undefined) {
					uni.showModal({
						content: '该操作需要登录，是否前往登录？',
						success(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '/pages/loginAndRegister/loginAndRegister'
								})
							}
						}
					})
					return
				}
				
				if (this.message.unread > 0) {
					
					// 1. 通知 App.vue 减少底部 TabBar 的总未读角标
					uni.$emit('subMessageTabbarBadge', this.message.unread);

					// 2. 调用 Store 方法，清除本地缓存中该会话的未读记录
					if (messageStore.clearUnreadMessage) {
						messageStore.clearUnreadMessage(this.message.p2pId);
					}

					// 3. 乐观更新：直接把当前组件显示的未读数归零，实现秒级 UI 响应
					this.message.unread = 0;
				}
				uni.navigateTo({
					url: '/pages/chat/chat?otherId=' + userId + '&p2pId=' + this.message.p2pId
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.message-container {
		width: 100%;
		height: 150rpx;
		display: flex;

		.message-avatar-block {
			width: 150rpx;
			height: 150rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			image {
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;

			}
		}

		.message-status-block {
			width: 600rpx;
			height: 150rpx;
			display: flex;
			flex-direction: column;
			border-bottom: 1rpx #eee solid;

			.name-time-block {
				width: 100%;
				height: 75rpx;
				display: flex;

				.message-user-name-block {
					width: 60%;
					height: 75rpx;
					font-size: 30rpx;
					color: #464646;
					line-height: 75rpx;

					.name-block {
						max-width: 60%;
						height: 75rpx;
					}
				}

				.message-public-block {
					width: 40%;
					height: 75rpx;
					line-height: 75rpx;
					font-size: 25rpx;
					color: #373737;
					text-align: center;
					display: flex;
					flex-direction: row-reverse;
					padding-right: 20rpx;
				}
			}

			.content-dot-block {
				width: 100%;
				height: 75rpx;
				display: flex;

				.last-message-block {
					width: 70%;
					height: 75rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					font-size: 30rpx;
					color: #909090;
				}

				.message-dot-num-block {
					width: 30%;
					height: 75rpx;
					display: flex;
					flex-direction: row-reverse;
					padding-right: 20rpx;
				}
			}

		}
	}
</style>