<template>
	<view class="result-page-container">
		<view class="result-page-status-block"></view>
		<view class="back-search-input-block">
			<view class="back-block">
				<uni-icons type="left" size="30"></uni-icons>
			</view>
			<view class="input-block">
				<input :value="searchValue" placeholder="输入搜索内容" @input="keywordComplement"/>
			</view>
			<view class="search-sty" @click="keywordSearch">
				搜索
			</view>
		</view>
		<view class="result-page-content-display-block">
			<view v-for="(item,index) in blogResultList" class="card-block">
				<view class="cover-block">
					<image :src="getCover(item)" mode="aspectFill"></image>
				</view>
				<view v-html="item.content" class="content-block">	
				</view>
				<view class="user-infor-liked-block">
					<view class="user-avatar-block">
						<image :src="item.userAvatar" mode="aspectFill"></image>
					</view>
					<view class="user-name-public-time-block">
						<view class="user-name-block">
							{{item.userName}}
						</view>
						<view class="public-time-block">
							{{formatTimeAgo(item.publishTime)}}
						</view>
					</view>
					<view class="liked-block">
						<view class="icon-block">
							<uni-icons type="heart" size="15"></uni-icons>
						</view>
						<view class="liked-num">
							{{item.likeCount}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { complement, comprehensiveSearch } from '../../utils/search/search'

	export default {
		onLoad(opt) {
			
			var keyword = opt.keyword
			this.searchValue = opt.keyword
			comprehensiveSearch({
				keyword:keyword
			},{}).then(res=>{
				this.blogResultList = res.searchBlogContents
			})
		},
		data() {
			return {
				searchValue:null,
				blogResultList:[]
			}
		},
		methods: {
			keywordComplement(e){
				var value = e.detail.value
				complement({
					keyword: value
				},{}).then(res=>{
					this.searchResult = res
				})
			},
			keywordSearch(){
				if(this.searchValue.trim() !== ''){
					complement({
						keyword: this.searchValue
					},{}).then(res=>{
						this.searchResult = res
					})
				}
			},
			getCover(item){
				if(item.fileType === 'image'){
					return item.fileName.split(',')[0]
				}else if(item.fileType === 'video'){
					return item.cover
				}
				return null;
			},
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
		}
	}
</script>

<style scoped lang="scss">
	.result-page-container{
		width: 750rpx;
		height: 1630rpx;
		.result-page-status-block{
			height: var(--status-bar-height);
			width: 100%;
			
		}
		.back-search-input-block{
			width: 100%;
			height: 120rpx;
			display: flex;
			align-items: center;
			
			
			.back-block{
				width: 80rpx;
				padding-left: 20rpx;
			}
			.input-block{
				width: 570rpx;
				height: 80rpx;
				background-color: #eee;
				input{
					padding: 20rpx;
					font-size: 30rpx;
				}
			}
			.search-sty{
				text-align: center;
				width: 100rpx;
			}
		}
		.result-page-content-display-block{
			width: 100%;
			height: calc(100% - 120rpx - var(--status-bar-height));
			display: flex;
			flex-direction: row;
			
			.card-block{
				padding: 20rpx;
				margin: 20rpx;
				width: max-content;
				
				box-shadow: 10rpx 10rpx 15rpx rgba(0, 0, 0, 0.3);
				box-sizing: border-box;
				display: inline-block;
				height: max-content;
				border-radius: 10rpx;
				.cover-block{
					width: 300rpx;
					height: 250rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
			}
			.content-block{
				width: 260rpx;
				padding: 20rpx;
				font-size: 23rpx;
				color: #878787;
			}
			.user-infor-liked-block{
				display: flex;
				flex-direction: row;
				border-top: 1rpx solid #eee;
				width: 300rpx;
				height: 70rpx;
				padding-top: 10rpx;
				.user-avatar-block{
					width: 70rpx;
					height: 70rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
				.user-name-public-time-block{
					display: flex;
					flex-direction: column;
					width: 150rpx;
					height: 70rpx;
					margin-left: 10rpx;
					.user-name-block{
						font-size: 23rpx;
						color: #717171;
					}
					.public-time-block{
						font-size: 20rpx;
						margin-top: 5rpx;
						color: #878787;
					}
				}
				.liked-block{
					display: flex;
					flex-direction: row;
					padding: 10rpx;
					.liked-num{
						margin-left: 10rpx;
						font-size: 35rpx;
						font-weight: 100;
						color: #717171;
					}
				}
			}
			
		}
	}
</style>