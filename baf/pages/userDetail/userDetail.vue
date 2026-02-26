<template>
	<view class="container">
		<global-status-bar />
		<view class="header">
			<view class="set-content" @click="goToSettings">
				<image class="set-icon" src="/static/set.png"></image>
			</view>
			<uni-row class="head-profile">
				<view class="image-content">
					<image :src="user.avatar"></image>
				</view>
			</uni-row>
			<uni-row class="head-userName">
				<view class="userName-content">@{{user.userName}}</view>
			</uni-row>
			<uni-row :gutter="8" class="head-status">
				<uni-col :span="8" class="status-content">
					<view>{{status.likedCount}}</view>
					<view class="content-sty">获赞</view>
				</uni-col>
				<uni-col :span="8" class="status-content">
					<view>{{status.attentionCount}}</view>
					<view class="content-sty">关注</view>
				</uni-col>
				<uni-col :span="8" class="status-content">
					<view>{{status.fansCount}}</view>
					<view class="content-sty">粉丝</view>
				</uni-col>
			</uni-row>
			<uni-row class="head-follow" v-if="!isSelf">
				<uni-fav class="fav-sty" :checked="checked" :star="false" bg-color="#eeeeee" bgColorChecked="#ee1a5d"
					fg-color="#000000" fgColorChecked="#f6f6f6" :content-text="contentText"
					@click="attentionClick(event)" />
			</uni-row>
			<uni-row class="head-intro">
				{{introIsEmpty(user.intro)}}
			</uni-row>
		</view>
		<hr style="border: 0; border-top: 1rpx solid #eee;" />
		<view>
			<uni-segmented-control :current="current" :values="items" styleType="text" active-color="#007aff"
				in-active-color="#000" @clickItem="onClickItem" />
		</view>
		<view class="bottom">
			<uni-grid v-if="current === 0 && postList.length > 0" :column="3" :highlight="true" @change="skipDetail">
				<uni-grid-item v-for="(item, index) in postList" :index="index" :key="index">
					<view class="grid-item-box">
						<!-- 图片容器，使用相对定位 -->
						<view class="image-container">
							<image :src="item.cover" mode="aspectFill" class="post-image" />
							<!-- 获赞数量标签，使用绝对定位在图片上方 -->
							<view class="like-count">
								<text>{{item.likeCount}}</text>
								<text class="like-icon">❤</text>
							</view>
						</view>
					</view>
				</uni-grid-item> 
			</uni-grid>
			<uni-load-more v-if="current === 0 && postList.length > 0" :status="postStatus" iconType="circle"
				color="#e7e7e7" :content-text="postContentText" @clickLoadMore='clickLoadMore' />
			<view class="no-content" v-if="current === 0 && postList.length === 0">
				<view>{{$t('mime.noPostContent')}}</view>
				<view>{{$t('mime.postDisplay')}}</view>
			</view>
			<uni-grid v-if="current === 1 && likedList.length > 0" :column="3" :highlight="true" @change="skipDetail">
				<uni-grid-item v-for="(item, index) in likedList" :index="index" :key="index">
					<view class="grid-item-box">
						<!-- 图片容器，使用相对定位 -->
						<view class="image-container">
							<image :src="item.cover" mode="aspectFill" class="post-image" />
							<!-- 获赞数量标签，使用绝对定位在图片上方 -->
							<view class="like-count">
								<text>{{item.likeCount}}</text>
								<text class="like-icon">❤</text>
							</view>
						</view>
					</view>
				</uni-grid-item>
			</uni-grid>
			<view class="no-content" v-if="current === 1 && likedList.length === 0">
				<view>{{$t('mime.noLikedContent')}}</view>
				<view>{{$t('mime.likedDisplay')}}</view>
			</view>
			<uni-grid v-if="current === 2 && collectList.length > 0" :column="3" :highlight="true" @change="skipDetail">
				<uni-grid-item v-for="(item, index) in collectList" :index="index" :key="index">
					<view class="grid-item-box">
						<!-- 图片容器，使用相对定位 -->
						<view class="image-container">
							<image :src="item.cover" mode="aspectFill" class="post-image" />
							<!-- 获赞数量标签，使用绝对定位在图片上方 -->
							<view class="like-count">
								<text>{{item.likeCount}}</text>
								<text class="like-icon">❤</text>
							</view>
						</view>
					</view>
				</uni-grid-item>
			</uni-grid>
			<view class="no-content" v-if="current === 2 && collectList.length === 0">
				<view>{{$t('mime.noCollectContent')}}</view>
				<view>{{$t('mime.collectDisplay')}}</view>
			</view>
		</view>

	</view>
</template>

<script>
	import http from '@/utils/request.js';
	import userStore from '@/store/localStore/index.js'
	import {
		otherUserDetail,
		userStatus,
		askPost,
		selfPostList,
		likedPostList,
		collectPostList
	} from '@/utils/user/index.js';
	import user from '../../store/modules/user';
	export default {
		onLoad(e) {
			const userId = Number(e.id)
			this.init(userId)
		},
		data() {
			return {
				user: {
					id:undefined,
					category: undefined,
					userName: undefined,
					sex: undefined,
					avatar: '/static/unLogin.png',
					intro: undefined,
					province: undefined,
					city: undefined
				},
				status: {},
				contentText: {
					contentDefault: '关注',
					contentFav: '已关注'
				},
				checked: false,
				items: ['作品', '喜欢', '收藏'],
				current: 0,
				postCurrent: 1,
				likedCurrent: 1,
				collectCurrent: 1,
				size: 9,
				postList: [],
				likedList: [],
				collectList: [],
				postTotal: 0,
				likedTotal: 0,
				collectTotal: 0,
				postPages: 0,
				likedPages: 0,
				collectPages: 0,
				postStatus: 'more',
				likedStatus: 'more',
				collectStatus: 'more',
				postContentText: {
					contentdown: this.$t('mime.contentdown'),
					contentrefresh: this.$t('mime.contentrefresh'),
					contentnomore: this.$t('mime.contentnomore'),
				},
				likedContentText: {
					contentdown: this.$t('mime.contentdown'),
					contentrefresh: this.$t('mime.contentrefresh'),
					contentnomore: this.$t('mime.contentnomore'),
				},
				collectContentText: {
					contentdown: this.$t('mime.contentdown'),
					contentrefresh: this.$t('mime.contentrefresh'),
					contentnomore: this.$t('mime.contentnomore'),
				}
			}
		},
		onReachBottom() {
			this.clickLoadMore()
		},
		methods: {
			init(userId){
				
				this.postCurrent = 1;
				this.likedCurrent = 1;
				this.collectCurrent = 1;
				var params = {
					userId:userId
				}
				otherUserDetail(params,{}).then(res=>{
					Object.assign(this.user,res)
				})
				userStatus(params, {}).then(res => {
					this.status = {
						...res
					}
				})
				
				params = {
					userId:userId,
					current: this.postCurrent,
					size: this.size
				}
				askPost(params, {}).then(res => {
					this.postList = res.blogList
					this.postCurrent = res.blogCurrent + 1
					this.postPages = res.blogPages
					this.postTotal = res.blogTotal
				
					this.likedList = res.likedList
					this.likedPages = res.likedPages
					this.likedTotal = res.likedTotal
					this.likedCurrent = res.likedCurrent + 1
				
					this.collectList = res.collectList
					this.collectCurrent = res.collectCurrent + 1
					this.collectPages = res.collectPages
					this.collectTotal = res.collectTotal
					
					
				})
				
			},
			introIsEmpty(intro) {
				return intro === null ? '这个人很懒，什么都没介绍' : intro
			},
			goToLoginAndRegister() {
				uni.navigateTo({
					url: "/pages/loginAndRegister/loginAndRegister"
				})
			},
			clearMemory() {
				userStore.clearUserInfo()
			},
			attentionClick() {
				this.checked = !this.checked
			},
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}

			},
			skipDetail(e) {
				let {
					index
				} = e.detail
				//点击贴子跳转到贴子详情
				if (this.current === 0) {
					
				} else if (this.current === 1) {

				} else {

				}

			},
			clickLoadMore(e) {
				switch (this.current) {
					case 0:
						if (this.postCurrent <= this.postPages) {
							//加载更多贴子
							let params = {
								userId: this.user.id,
								current: this.postCurrent,
								size: this.size
							}
							selfPostList(params, {}).then(res => {
								this.postList.push(...res.blogList)
								this.postCurrent = res.blogCurrent + 1
								this.postPages = res.blogPages
								this.postTotal = res.blogTotal
								this.postStatus = this.postCurrent > this.postPages ? 'no-more' : 'more'
							})
						} else {
							this.postStatus = 'no-more'
						}

						break;
					case 1:
						if (this.likedCurrent <= this.likedPages) {
							let params = {
								userId: this.user.id,
								current: this.likedCurrent,
								size: this.size,
							}
							likedPostList(params, {}).then(res => {
								this.likedList.push(...res.likedList)
								this.likedCurrent = res.likedCurrent + 1
								this.likedPages = res.likedPages
								this.likedTotal = res.likedTotal
								this.likedStatus = this.likedCurrent > this.likedPages ? 'no-more' : 'more'
							})
						} else {
							this.likedStatus = 'no-more'
						}
						break;
					case 2:
						if (this.collectCurrent <= this.collectPages) {
							let params = {
								userId: this.user.id,
								current: this.collectCurrent,
								size: this.size,
							}
							collectPostList(params, {}).then(res => {
								this.collectList.push(...res.collectList)
								this.collectCurrent = res.collectCurrent + 1
								this.collectPages = res.collectPages
								this.collectTotal = res.collectTotal
								this.collectStatus = this.collectCurrent > this.collectPages ? 'no-more' : 'more'
							})
						} else {
							this.collectStatus = 'no-more'  
						}
						break;
				}
			},
			isSelf(){
				var flag = true
				if (http.hadLogin()) {
					flag = this.userId === userStore.getUserInfo().id ? true : false
				}
				return flag
			},
			goToSettings(){
				//点击进入设置界面
			}
		},

		
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 93vh;

		.header {
			height: 50%;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			background-color: #fefefe;
			position: relative;

			.set-content {
				position: absolute;
				top: 20rpx;
				right: 20rpx;
				width: 60rpx;
				height: 60rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				z-index: 100;
				background-color: rgba(255, 255, 255, 0.8);
				border-radius: 50%;
				box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
				&:active {
					transform: scale(0.95);
					transition: transform 0.1s; 
				}

				.set-icon {
					width: 60rpx;
					height: 60rpx;
					display: block;
				}
			}

			.head-profile {
				height: 35%;
				width: 100%;

				.image-content {
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
					height: 100%;
					width: 32%;
					border-radius: 50%;
					overflow: hidden;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			.head-userName {
				height: 10%;
				width: 100%;
				text-align: center;
			}

			.head-status {
				height: 20%;
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-around;

				.status-content {
					width: 20%;
					height: 100%;
					text-align: center;

					.content-sty {
						color: #cecece;
					}
				}
			}

			.head-follow {
				width: 100%;
				height: 10%;

				.fav-sty {
					width: 40%;
					height: 100%;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
					font-size: 20rpx;
					font-weight: 700;
				}
			}

			.head-intro {
				width: 100%;
				height: 10%;
				text-align: center;
				color: #cecece;
			}
		}

		.bottom {
			width: 100%;

			.uni-grid {
				width: 100%;
				padding: 10rpx;
				box-sizing: border-box;
			}

			/* 每个宫格项样式 */
			.uni-grid-item {
				padding: 10rpx;

				box-sizing: border-box;
			}

			.grid-item-box {
				width: 100%;
				height: 100%;
				border-radius: 12rpx;
				overflow: hidden;
				position: relative;
				box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
				background-color: #f8f8f8;

				.image-container {
					position: relative;
					width: 100%;
					padding-top: 100%;
					/* 1:1 正方形比例 */
					overflow: hidden;

					.post-image {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						object-fit: cover;
					}

					.like-count {
						position: absolute;
						bottom: 10rpx;
						right: 10rpx;
						background-color: rgba(0, 0, 0, 0.5);
						color: white;
						padding: 4rpx 12rpx;
						border-radius: 20rpx;
						font-size: 24rpx;
						display: flex;
						align-items: center;
						z-index: 10;

						.like-icon {
							margin-right: 6rpx;
							color: #f0f0f0;
							font-size: 26rpx;
						}
					}
				}
			}

			.no-content {
				width: 100%;
				height: 400rpx;
				display: flex;
				flex-direction: column;
				text-align: center;
				justify-content: center;
				color: #cecece;

				.view {
					height: 200rpx;
					width: 100%;
				}
			}
		}
	}
</style>