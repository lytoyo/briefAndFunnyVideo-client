<template>
	<view class="set-container">
		<view class="status-block"></view>
		<view class="back-block">
			<uni-icons size="30" type="left" @click="back()"></uni-icons>
			<my-button type="primary" :round="true"
				style="width: 100rpx;height: 70rpx;float: right;padding-right: 20rpx;" @click="save()">保存</my-button>
		</view>
		<view class="mod-msg">
			<view class="user-avatar-block">
				<image :src="verUserAvatar(userInfo.avatar)" @click="modAvatar()"></image>
			</view>
			<view class="user-other-msg">
				<uni-forms ref="userForm" :modelValue="userInfo" :rules="userInfoRules">
					<uni-forms-item label="昵称" required name="userName">
						<uni-easyinput v-model="userInfo.userName"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item label="性别" required name="sex">
						<uni-data-checkbox v-model="userInfo.sex" :localdata="sexs"></uni-data-checkbox>
					</uni-forms-item>
					<uni-forms-item label="简介">
						<uni-easyinput v-model="userInfo.intro"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item label="省份">
						<uni-data-picker placeholder="请选择省份" :localdata="provinceTree" v-model="userInfo.province">
						</uni-data-picker>
					</uni-forms-item>
				</uni-forms>
			</view>
		</view>
		<button class="mod-psd" @click="modPsd()">
			修改密码
		</button>
		<button class="log-off" @click="logOff()">
			退出登录
		</button>
	</view>
</template>

<script>
	import {
		userAvatar
	} from '../../utils/file/file';
	import {
		logOff
	} from '../../utils/system/system';
	import {
		saveUserInfo,
		userInfo
	} from '../../utils/user';
	import userStore from '@/store/localStore/index.js'
	export default {
		onLoad(opt) {
			const params = {
				userId: Number(opt.userId)
			}
			userInfo(params, {}).then(res => {
				this.userInfo = res

			})
		},
		data() {
			return {
				userInfo: {},
				rawFileName: null,
				sexs: [{
						text: '男',
						value: 1
					},
					{
						text: '女',
						value: 2
					}
				],
				userInfoRules: {
					userName: {
						rules: [{
							require: true,
							errorMessage: '昵称不能为空'
						}]
					},
					sex: {
						rules: [{
							require: true,
							errorMessage: '请选择性别'
						}]
					}
				},
				provinceTree: [{
						"text": "北京",
						"value": "北京"
					},
					{
						"text": "天津",
						"value": "天津"
					},
					{
						"text": "河北",
						"value": "河北"
					},
					{
						"text": "山西",
						"value": "山西"
					},
					{
						"text": "内蒙古",
						"value": "内蒙古"
					},
					{
						"text": "辽宁",
						"value": "辽宁"
					},
					{
						"text": "吉林",
						"value": "吉林"
					},
					{
						"text": "黑龙江",
						"value": "黑龙江"
					},
					{
						"text": "上海",
						"value": "上海"
					},
					{
						"text": "江苏",
						"value": "江苏"
					},
					{
						"text": "浙江",
						"value": "浙江"
					},
					{
						"text": "安徽",
						"value": "安徽"
					},
					{
						"text": "福建",
						"value": "福建"
					},
					{
						"text": "江西",
						"value": "江西"
					},
					{
						"text": "山东",
						"value": "山东"
					},
					{
						"text": "河南",
						"value": "河南"
					},
					{
						"text": "湖北",
						"value": "湖北"
					},
					{
						"text": "湖南",
						"value": "湖南"
					},
					{
						"text": "广东",
						"value": "广东"
					},
					{
						"text": "广西",
						"value": "广西"
					},
					{
						"text": "海南",
						"value": "海南"
					},
					{
						"text": "重庆",
						"value": "重庆"
					},
					{
						"text": "四川",
						"value": "四川"
					},
					{
						"text": "贵州",
						"value": "贵州"
					},
					{
						"text": "云南",
						"value": "云南"
					},
					{
						"text": "西藏",
						"value": "西藏"
					},
					{
						"text": "陕西",
						"value": "陕西"
					},
					{
						"text": "甘肃",
						"value": "甘肃"
					},
					{
						"text": "青海",
						"value": "青海"
					},
					{
						"text": "宁夏",
						"value": "宁夏"
					},
					{
						"text": "新疆",
						"value": "新疆"
					},
					{
						"text": "台湾",
						"value": "台湾"
					},
					{
						"text": "香港",
						"value": "香港"
					},
					{
						"text": "澳门",
						"value": "澳门"
					}
				]
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},

			modAvatar() {
				const that = this
				uni.chooseImage({
					count: 1,
					success(res) {
						userAvatar(res.tempFilePaths[0], {}, {}).then(upRes => {
							that.userInfo.avatar = upRes.avatar
							that.rawFileName = upRes.rawFileName
						})
					}
				})
			},
			verUserAvatar(url) {

				if (!url || typeof url !== 'string') {
					return '/static/unLogin.png'
				}
				return url.split('/').pop() === 'null' ? '/static/unLogin.png' : url
			},
			modPsd() {
				uni.navigateTo({
					url: '/pages/resetPassword/resetPassword'
				})
			},
			save() {
				var data = {
					id: this.userInfo.id,
					userName: this.userInfo.userName,
					sex: this.userInfo.sex,
					intro: this.userInfo.intro,
					province: this.userInfo.province
				}

				if (this.rawFileName !== null) {
					data.avatar = this.rawFileName
				}
				saveUserInfo(data, {}).then(res => {
					userStore.saveUserInfo(res)
					uni.showToast({
						title: '修改成功'
					})
					uni.navigateBack()
				})

			},
			logOff() {

				userStore.clearUserInfo()
				uni.reLaunch({
					url: '/pages/loginAndRegister/loginAndRegister'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.set-container {
		width: 750rpx;
		height: 100vh;

		.status-block {
			height: var(--status-bar-height);
			width: 100%;
		}

		.mod-msg {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;

			.user-avatar-block {
				width: 400rpx;
				height: 400rpx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}

			.user-other-msg {
				padding-top: 50rpx;
			}
		}

		.mod-psd {
			width: 600rpx;
			height: 100rpx;
		}

		.log-off {
			margin-top: 40rpx;
			width: 600rpx;
			height: 100rpx;
		}
	}
</style>