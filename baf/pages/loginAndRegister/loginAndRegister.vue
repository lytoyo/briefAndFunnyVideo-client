<template>
	<view class="container">
		<global-status-bar />
		<view class="back-btn" @click="rollback()">
			<image class="back-icon" src="/static/rollback.png" mode="aspectFit"></image>
		</view>

		<!-- 页面内容 -->
		<view class="page-content">
			<view v-if="isLogin">
				<view class="form-padding">
					<uni-forms :modelValue="formData" :rules="rules" ref="loginForm">
						<uni-forms-item :label="$t('mime.email')" name="email" :required="true">
							<uni-easyinput type="text" v-model="formData.email" :placeholder="$t('mime.inputEmail')" />
						</uni-forms-item>
						<uni-forms-item :label="$t('mime.password')" name="password" :required="true">
							<uni-easyinput type="password" v-model="formData.password" :placeholder="$t('mime.inputPassword')" />
						</uni-forms-item>
					</uni-forms>
					<view class="submit-block">
						<my-button class="login-register-button" type="primary" @click="toLogin()">{{$t('mime.login')}}</my-button>
						<view class="noPassword">{{$t('mime.noAccount')}}<text class="registerButton" @click="clickTo()">{{$t('mime.clickToRegister')}}</text></view>
					</view>
				</view>
			</view>
			
			<view v-if="!isLogin">
				<view class="form-padding">
					<uni-forms :modelValue="formData" :rules="rules" ref="registerForm">
						<uni-forms-item :label="$t('mime.email')" name="email" :required="true">
							<uni-easyinput type="text" v-model="formData.email" :placeholder="$t('mime.inputEmail')" />
						</uni-forms-item>
						<uni-forms-item :label="$t('mime.password')" name="password" :required="true">
							<uni-easyinput type="password" v-model="formData.password" :placeholder="$t('mime.inputPassword')" />
						</uni-forms-item>
						<uni-forms-item :label="$t('mime.again')" name="again" :required="true">
							<uni-easyinput type="password" v-model="formData.again" :placeholder="$t('mime.againNotEmpty')" />
						</uni-forms-item>
						<view class="code-block">
							<my-button is-captcha :disabled="!canGetCode" @click="handleGetCode()" style="width: 130rpx;"
								@countdown-start="onCountdownStart()">{{$t('mime.code')}}</my-button>
							<uni-easyinput type="text" v-model="formData.code" :placeholder="$t('mime.inputCode')" />
						</view>
					</uni-forms>
					<view class="submit-block">
						<my-button class="login-register-button"  type="primary" @click="toRegister()">{{$t('mime.register')}}</my-button>
						<view class="noPassword">{{$t('mime.hadAccount')}}<text class="registerButton" @click="clickTo()">{{$t('mime.toLogin')}}</text></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import http from '../../utils/request';
	import userStore from '@/store/localStore/index.js'
	import {requestCode,register,login} from '@/utils/system/system.js'
	export default {
		data() {
			return {
				isLogin: true,
				formData: {
					email: '',
					password: '',
					again: '',
					code: '',
				}
			}
		},
		computed: {
			// 表单验证规则
			rules() {
				const self = this; // 保存 this 引用
				return {
					email: {
						rules: [{
								required: true, 
								errorMessage: this.$t('mime.emailNotEmpty')
							},
							{
								format: 'email',
								errorMessage: this.$t('mime.emailFormatError')
							}
						]
					},
					password: {
						rules: [{
								required: true,
								errorMessage: this.$t('mime.passwordNotEmpty')
							},
							{
								minLength: 6,
								maxLength: 20,
								errorMessage: this.$t('mime.passwordLengthError')
							}
						]
					},
					again: {
						rules: [{
								required: true,
								errorMessage: this.$t('mime.againNotEmpty')
							},
							{
								validateFunction: function(rule, value, data, callback) {
									// 使用保存的 self 引用
									if (value !== self.formData.password) {
										callback(self.$t('mime.passwordInconformity'))
									}
									return true
								}
							}
						]
					},
					code: {
						rules: [{
								required: true,
								errorMessage: this.$t('mime.codeNotEmpty')
							},
							{
								length: 6,
								errorMessage: this.$t('mime.codeLengthError')
							}
						]
					}
				}
			},
			// 是否可以获取验证码
			canGetCode() {
				const email = this.formData.email || '';
				return email.trim() !== '' &&
					this.validateEmail(email);
			},
		},
		mounted() {
			this.isLogin = true;
		},
		methods: {
			toLogin(){
				this.$refs["loginForm"].validate().then(res => {
				        if (res) {
				            var data = {
				                email: this.formData.email,
				                password: this.formData.password
				            }
				            login(data, {}).then(data => {
				                uni.showToast({
				                    title: this.$t('mime.welcome'),
				                    icon: 'none'
				                });
				                // 存入token
				                http.setToken(data.token);
								//存储用户可视数据
								userStore.saveUserInfo(data.user)
				                uni.switchTab({
				                    url: '/pages/index/index',
				                });
				            }).catch(error => {
				                uni.showToast({
				                    title: error.message || this.$t('mime.system404'),
				                    icon: 'error'
				                });
				            });
				        }
				    });
			},
			toRegister(){
				this.$refs["registerForm"].validate().then(res=>{
					if(res){
						var data = {
							email: this.formData.email,
							password: this.formData.password,
							params:{
								again: this.formData.again,
								code: this.formData.code
							}
							
						}
						register(data,{}).then(res=>{
							if(res.code === 200){
								uni.showToast({
									title:$t("mime.registerSuccess"),
									icon:'none'
								})
								this.isLogin = !this.isLogin
							}else{
								uni.showToast({
									title:res.msg,
									icon:'error'
								})
							}
						}).catch(error=>{
							uni.showToast({
								title:$t('mime.system404')
							})
						})
					}
				})
			},
			// 邮箱格式验证
			validateEmail(email) {
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				return emailRegex.test(email);
			},
			
			// 获取验证码（带表单验证）
			async handleGetCode() {
				if (!this.canGetCode) {
					uni.showToast({
						title: $t('mime.inputRightEmail'),
						icon: 'none'
					});
					return;
				}
				
				try {
					// 验证邮箱字段
					var flag = await this.$refs.registerForm.validateField('email');
					if(flag){
						// 验证通过，发送验证码
						await this.getCode();
					}
					
				} catch (error) {
					console.log('验证失败:', error);
				}
			},
			
			// 原有的业务方法
			getCode() {
				var params = {
					email:this.formData.email,
				}
				requestCode(params,{});
			},
			
			onCountdownStart() {
				uni.showToast({
					title: this.$t('mime.hadSendCode'),
					icon:'none',
					mask:true,
					
				});
			},
			
			clickTo() {
				this.isLogin = !this.isLogin;
				// 切换时清空表单
				this.formData = {
					email: '',
					password: '',
					again: '',
					code: '',
				};
			},
			
			rollback() {
				uni.switchTab({
					url:'/pages/mime/mime'
				});
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	/* 样式保持不变 */
	.container {
		min-height: 100vh;
		background-color: #ffffff;
	}

	.back-btn {
		position: fixed;
		top: 120rpx;
		left: 30rpx;
		width: 100rpx;
		height: 100rpx;
		background: #d9d9d9;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
		z-index: 999;
	}

	.back-btn:active {
		background: #f0f0f0;
	}

	.back-icon {
		width: 40rpx;
		height: 40rpx;
	}

	.page-content {
		padding-left: 20rpx;
		width: 95%;
		padding-top: 200rpx;
		margin-top: 200rpx;
		white-space: nowrap;
		.form-padding {
			border: 1rpx solid #d9d4d5;
			padding: 20rpx;

			.login-register-button {
				justify-content: center;
				width: 200rpx;
				height: 50rpx;
				margin: 0 auto;
			}

			.noPassword {
				color: #d9d9d9;
			}

			.registerButton {
				color: #4097d9;
				border-bottom: 1rpx solid #4097d9;
			}

			.code-block {
				display: flex;
				align-items: center;
				gap: 30rpx;
				margin: 20rpx 0;

				my-button {
					width: 200rpx;
					height: 80rpx;
					flex-shrink: 0;
					display: flex;
					align-items: center;
					justify-content: center;

					::v-deep button {
						width: 100% !important;
						height: 100% !important;
						display: flex !important;
						align-items: center !important;
						justify-content: center !important;
					}
				}

				uni-easyinput {
					flex: 1;
					height: 80rpx;
				}
			}
		}

		.submit-block {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
</style>