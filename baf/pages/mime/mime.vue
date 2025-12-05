<template>

	<view class="container">
		<global-status-bar />
		<view class="header" v-if="noLogin">
			<view class="head-left">
				<image :src="user.avatar" mode="aspectFit"></image>
			</view>
			<view class="head-right">
				<text class="slogan-one">{{$t('mime.sloganOne')}}</text>
				<text class="slogan-two">{{$t('mime.sloganTwo')}}</text>
				<view>
					<my-button type="primary" :round="true"
						@click="goToLoginAndRegister()">{{$t('mime.unLogin')}}</my-button>
				</view>
			</view>
		</view>
		<view class="header" v-if="!noLogin">
			<view class="head-left">
				<image :src="user.avatar" mode="aspectFit"></image>
			</view>
		</view>
		<!-- <button @click="clear()">清除缓存</button> -->
	</view>
</template>

<script>
	import http from '../../utils/request';
	import userStore from '@/store/localStore/index.js'
	export default {
		data() {
			return {
				noLogin: false,
				user: {
					category: undefined,
					userName: undefined,
					sex: undefined,
					avatar: '/static/unLogin.png',
					intro: undefined,
					province: undefined,
					city: undefined,
					area: undefined,
					address: undefined,
				},
			}
		},
		methods: {
			goToLoginAndRegister() {
				uni.navigateTo({
					url: "/pages/loginAndRegister/loginAndRegister"
				})
			},
			clear(){
				uni.clearStorage()
			}
		},

		mounted() {

		},
		onShow() {

			if (http.hadLogin()) {
				this.user = userStore.getUserInfo()
				this.noLogin = false
			} else {
				this.noLogin = true
				this.user.avatar = '/static/unLogin.png'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {

		.header {
			height: 400rpx;
			margin-top: 20rpx;
			display: flex;
			flex-direction: row;

			.head-left {

				margin-left: 20rpx;
				height: 200rpx;
				width: 200rpx;
				border-radius: 50%;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.head-right {
				height: 200rpx;
				margin-left: 50rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;

				.slogan-one {
					font-size: 50rpx;
					font-weight: bold;

				}

				.slogan-two {
					font-size: 36rpx;
					font-weight: normal;
					color: #404040;
				}
			}
		}
	}
</style>