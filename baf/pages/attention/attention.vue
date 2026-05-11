<template>
	<view class="attention-container">
		<!-- 状态栏占位 -->
		<view class="status-block"></view>

		<!-- 标题栏 -->
		<view class="title-block">关注</view>

		<!-- 内容列表 -->
		<view class="detail-block">
			<view v-for="(item, index) in blogList" :key="item.id || index" class="blog-block">
				<!-- 用户信息 -->
				<view class="user-block" @click="skipToPostDetail(item.id)">
					<view class="user-avatar-block">
						<image :src="item.userAvatar || '/static/default-avatar.png'" class="avatar-image-block"
							mode="aspectFill"></image>
					</view>

					<view class="name-publish-time-block">
						<view class="name-block">
							{{ item.userName || '匿名用户' }}
						</view>
						<view class="public-time-block">
							{{ formatTimeAgo(item.publishTime) }}
						</view>
					</view>
				</view>

				<!-- 帖子内容 -->
				<view class="post-detail-block">
					<view class="post-title-block" @click="skipToPostDetail(item.id)">
						{{ item.content }}
					</view>

					<!-- 图片内容 -->
					<view v-if="item.fileType === 'image' && getImageList(item).length > 0" class="image-block"
						@click="skipToPostDetail(item.id)">
						<!-- 多图轮播 -->
						<swiper v-if="getImageList(item).length > 1" class="image-swiper" :indicator-dots="true"
							:autoplay="false" :circular="true" indicator-color="rgba(255,255,255,0.5)"
							indicator-active-color="#ffffff">
							<swiper-item v-for="(img, imgIndex) in getImageList(item)" :key="imgIndex">
								<image :src="img" class="post-image" mode="aspectFill" lazy-load></image>
							</swiper-item>
						</swiper>

						<!-- 单图 -->
						<image v-else :src="getImageList(item)[0]" class="post-image single" mode="aspectFill"
							lazy-load></image>

						<!-- 图片数量 -->
						<view v-if="getImageList(item).length > 1" class="image-count">
							{{ getImageList(item).length }}张
						</view>
					</view>

					<!-- 视频内容 -->
					<view v-else-if="item.fileType === 'video'" class="video-block" @click="skipToPostDetail(item.id)">
						<view class="video-cover-block">
							<image :src="item.cover" class="video-cover-image" mode="aspectFill"></image>

							<view class="video-play-icon">
								▶
							</view>
						</view>
					</view>
				</view>

				<!-- 点赞、评论、收藏 -->
				<view class="post-status" @click="skipToPostDetail(item.id)">
					<view class="status-item">
						<view class="icon-container">
							<image src="/static/like.png" class="status-icon" mode="aspectFit"></image>
						</view>
						<view class="count-text">
							{{ item.likeCount || 0 }}
						</view>
					</view>

					<view class="status-item">
						<view class="icon-container">
							<image src="/static/message.png" class="status-icon" mode="aspectFit"></image>
						</view>
						<view class="count-text">
							{{ item.commentCount || 0 }}
						</view>
					</view>

					<view class="status-item">
						<view class="icon-container">
							<image src="/static/collect.png" class="status-icon" mode="aspectFit"></image>
						</view>
						<view class="count-text">
							{{ item.collectCount || 0 }}
						</view>
					</view>
				</view>
			</view>

			<!-- 空状态 -->
			<view v-if="!loading && blogList.length === 0" class="empty-block">
				暂无关注内容
			</view>

			<!-- 没有更多 -->
			<view v-if="blogList.length > 0 && !flag" class="no-more-block">
				没有更多了
			</view>
		</view>
	</view>
</template>

<script>
	import {
		attentionList
	} from '../../utils/attention/attention'

	export default {
		data() {
			return {
				current: 1,
				size: 10,
				blogList: [],
				total: 0,
				flag: true,
				loading: false,
				isSkip: false
			}
		},

		onShow() {
			this.initAttentionList()
		},

		onReachBottom() {
			this.loadMoreAttentionList()
		},

		methods: {
			/**
			 * 初始化关注列表
			 */
			initAttentionList() {
				this.current = 1
				this.blogList = []
				this.total = 0
				this.flag = true
				this.loading = true

				const params = {
					current: this.current,
					size: this.size
				}

				uni.showLoading({
					title: '加载中'
				})

				attentionList(params, {})
					.then(res => {
						this.total = res.total || 0
						this.blogList = res.blogVoList || []
						this.current += 1

						if (this.blogList.length >= this.total || this.blogList.length === 0) {
							this.flag = false
						}
					})
					.catch(err => {

						this.blogList = []
						this.total = 0
						this.flag = false
					})
					.finally(() => {
						this.loading = false
						uni.hideLoading()
					})
			},

			/**
			 * 上拉加载更多
			 */
			loadMoreAttentionList() {
				if (!this.flag) return
				if (this.loading) return

				this.loading = true

				const params = {
					current: this.current,
					size: this.size
				}

				uni.showLoading({
					title: '加载中'
				})

				attentionList(params, {})
					.then(res => {
						this.total = res.total || 0

						const list = res.blogVoList || []

						if (list.length > 0) {
							this.blogList.push(...list)
							this.current += 1
						}

						if (
							this.blogList.length >= this.total ||
							list.length === 0
						) {
							this.flag = false
						}
					})
					.catch(err => {
						console.error('加载更多关注列表失败：', err)

						uni.showToast({
							title: '加载失败',
							icon: 'none'
						})
					})
					.finally(() => {
						this.loading = false
						uni.hideLoading()
					})
			},

			/**
			 * 时间格式化
			 */
			formatTimeAgo(timeStr) {
				if (!timeStr) return ''

				const date = new Date(timeStr)
				const now = new Date()

				if (isNaN(date.getTime())) {
					return ''
				}

				const diffInSeconds = Math.floor((now - date) / 1000)
				const diffInMinutes = Math.floor(diffInSeconds / 60)
				const diffInHours = Math.floor(diffInMinutes / 60)

				if (diffInSeconds < 60) {
					return '刚刚'
				}

				if (diffInMinutes < 60) {
					return `${diffInMinutes}分钟前`
				}

				if (diffInHours < 24) {
					return `${diffInHours}小时前`
				}

				const currentYear = now.getFullYear()
				const targetYear = date.getFullYear()
				const month = date.getMonth() + 1
				const day = date.getDate()

				// 同一年内
				if (currentYear === targetYear) {
					return `${month.toString().padStart(2, '0')}-${day
          .toString()
          .padStart(2, '0')}`
				}

				// 跨年
				const year = date.getFullYear()

				return `${year}-${month.toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}`
			},

			/**
			 * 解析图片列表
			 */
			getImageList(item) {
				if (!item) return []

				if (item.fileType === 'image' && item.fileName) {
					return item.fileName
						.split(',')
						.map(url => url.trim())
						.filter(url => url && url.length > 0)
				}

				return []
			},

			/**
			 * 跳转到帖子详情
			 */
			skipToPostDetail(id) {
				if (!id) return
				if (this.isSkip) return

				this.isSkip = true

				uni.navigateTo({
					url: '/pages/postDetails/postDetails?postId=' + id,
					complete: () => {
						setTimeout(() => {
							this.isSkip = false
						}, 800)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.attention-container {
		width: 100%;
		min-height: 100vh;
		background-color: #f5f5f5;
		box-sizing: border-box;
	}

	/* 状态栏 */
	.status-block {
		width: 100%;
		height: var(--status-bar-height);
		background-color: #ffffff;
	}

	/* 标题栏 */
	.title-block {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 36rpx;
		font-weight: 600;
		color: #222222;
		background-color: #ffffff;
		border-bottom: 1rpx solid #eeeeee;
		box-sizing: border-box;
		position: sticky;
		top: var(--status-bar-height);
		z-index: 99;
	}

	/* 列表区域 */
	.detail-block {
		width: 100%;
		box-sizing: border-box;
		padding-bottom: 30rpx;
	}

	/* 单个帖子 */
	.blog-block {
		width: 100%;
		background-color: #ffffff;
		margin-bottom: 20rpx;
		box-sizing: border-box;
	}

	/* 用户信息 */
	.user-block {
		width: 100%;
		height: 128rpx;
		padding: 0 24rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		box-sizing: border-box;
	}

	.user-avatar-block {
		width: 96rpx;
		height: 96rpx;
		flex-shrink: 0;
		margin-right: 20rpx;
	}

	.avatar-image-block {
		width: 96rpx;
		height: 96rpx;
		border-radius: 50%;
		background-color: #eeeeee;
		display: block;
	}

	.name-publish-time-block {
		flex: 1;
		height: 96rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow: hidden;
	}

	.name-block {
		width: 100%;
		font-size: 32rpx;
		font-weight: 500;
		color: #333333;
		line-height: 44rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.public-time-block {
		margin-top: 4rpx;
		font-size: 24rpx;
		color: #999999;
		line-height: 36rpx;
	}

	/* 内容区域 */
	.post-detail-block {
		width: 100%;
		box-sizing: border-box;
	}

	.post-title-block {
		width: 100%;
		padding: 0 24rpx 20rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		color: #333333;
		line-height: 46rpx;
		word-break: break-all;
	}

	/* 图片区域 */
	.image-block {
		position: relative;
		width: calc(100% - 48rpx);
		height: 420rpx;
		margin: 0 24rpx 20rpx;
		border-radius: 16rpx;
		overflow: hidden;
		background-color: #eeeeee;
		box-sizing: border-box;
	}

	.image-swiper {
		width: 100%;
		height: 100%;
	}

	.post-image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.post-image.single {
		width: 100%;
		height: 100%;
	}

	.image-count {
		position: absolute;
		right: 20rpx;
		top: 20rpx;
		padding: 6rpx 16rpx;
		font-size: 24rpx;
		color: #ffffff;
		background-color: rgba(0, 0, 0, 0.55);
		border-radius: 999rpx;
		z-index: 2;
	}

	/* 视频区域 */
	.video-block {
		width: calc(100% - 48rpx);
		height: 420rpx;
		margin: 0 24rpx 20rpx;
		box-sizing: border-box;
	}

	.video-cover-block {
		position: relative;
		width: 100%;
		height: 100%;
		border-radius: 16rpx;
		overflow: hidden;
		background-color: #eeeeee;
	}

	.video-cover-image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.video-play-icon {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 96rpx;
		height: 96rpx;
		line-height: 96rpx;
		text-align: center;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		background-color: rgba(0, 0, 0, 0.55);
		color: #ffffff;
		font-size: 42rpx;
		box-sizing: border-box;
	}

	/* 底部点赞评论收藏 */
	.post-status {
		width: 100%;
		height: 92rpx;
		padding: 0 60rpx;
		border-top: 1rpx solid #f2f2f2;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}

	.status-item {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.icon-container {
		width: 42rpx;
		height: 42rpx;
		margin-right: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.status-icon {
		width: 42rpx;
		height: 42rpx;
		display: block;
	}

	.count-text {
		font-size: 26rpx;
		color: #666666;
		line-height: 42rpx;
	}

	/* 空数据 */
	.empty-block {
		width: 100%;
		padding-top: 220rpx;
		text-align: center;
		font-size: 28rpx;
		color: #999999;
		box-sizing: border-box;
	}

	/* 没有更多 */
	.no-more-block {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 24rpx;
		color: #999999;
	}
</style>