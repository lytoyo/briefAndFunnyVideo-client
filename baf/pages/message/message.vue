<template>
	<view class="container">
		<view class="status-bar" />
		<view class="message-block">
			<uni-segmented-control :current="current" :values="messageType" @clickItem="onClickItem" styleType="text"
				active-color="#73c7ff" class="segmented-control-block" />
			<view v-if="hasNoLogin()" class="no-login">
				<text>暂未登录</text>
				<text>请前往<span @click="skipToLogin()">登录</span>后再使用该功能吧</text>
			</view>
			<view v-show="current === 0 && !hasNoLogin()" class="message-list-block">
				<scroll-view class="scroll-block" :scroll-y="true" :show-scrollbar="false" lower-threshold="100"
					@scrolltolower="loadMoreChatBlock">
					<my-message-block v-for="(message,index) in chatMessageList" :key="message.p2pId" :message="message"></my-message-block>
				</scroll-view>
			</view>
			<view v-show="current === 1 && !hasNoLogin()" class="message-list-block">
				<scroll-view class="scroll-block" :scroll-y="true" :show-scrollbar="false" lower-threshold="100"
					@scrolltolower="loadMoreChatBlock">
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import { comment } from '../../utils/blog/blog'
import http from '../../utils/request'
	import userStore from '@/store/localStore/index.js'
	import messageStore from '@/store/message/index.js'
	export default {
		onLoad(opt) {
			uni.$on("chatMessage", (message) => {
				this.refreshList();
			})
		},
		destroyed() {
			uni.$off('chatMessage')
		},
		data() {
			return {
				current: 0,
				messageType: ['私信', '系统'],
				chatMessageList: [],
				systemMessageList: [],
				isClickItem:false,
				isSkipToLogin:false
			}
		},

		onShow() {
			this.refreshList();
		},
		methods: {
			 refreshList() {
			            this.chatMessageList = messageStore.gainMessageList('private');
			            if (this.current === 1) {
			                this.systemMessageList = messageStore.gainMessageList('system');
			            }
			        },
			hasNoLogin() {
				if (userStore.getUserid() === undefined || userStore.getUserid() === null) {
					return true
				}
				return false
			},
			skipToLogin() {
				if(this.isSkipToLogin) return
				this.isSkipToLogin = true
				uni.navigateTo({
					url: '/pages/loginAndRegister/loginAndRegister',
					complete:()=> {
						setTimeout(()=>{
							this.isSkipToLogin = false
						},800)
					}
				})
			},
			loadMoreChatBlock() {
				console.log("加载更多聊天内容")
			},
			onClickItem(e) {
				if(this.isClickItem) return
				this.isClickItem = true
				if (this.current != e.currentIndex) {
					this.current = e.currentIndex;
				}
				if (this.current === 1) {
					this.systemMessageList = messageStore.gainMessageList('system')
				}
				setTimeout(()=>{
					this.isClickItem = false
				},800)
			},
			
		}
	}
</script>

<style scoped lang="scss">
	.container {
		width: 100%;
		height: 100vh;

		.status-bar {
			width: 100%;
			height: var(--status-bar-height);
		}

		.message-block {
			width: 100%;
			height: calc(100vh - var(--status-bar-height));

			.segmented-control-block {
				width: 100%;
				height: 100rpx;

			}

			.no-login {
				width: 100%;
				height: calc(100% - 100rpx);
				text-align: center;
				display: flex;
				flex-direction: column;
				justify-content: center;

				text {
					display: block;
					font-size: 40rpx;
				}

				span {
					color: #47bcee;
					border-bottom: 3rpx #47bcee solid;
				}
			}

			.message-list-block {
				width: 100%;
				height: calc(100% - 100rpx);

				.scroll-block {
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
				}
			}
		}
	}
</style>