<template>
	<view class="search-container">
		<!-- 状态栏占位 -->
		<view class="status-block"></view>
		
		<!-- 顶部搜索栏 -->
		<view class="header-bar">
			<view class="back-btn" @click="goBack">
				<uni-icons type="left" size="26" color="#333"></uni-icons>
			</view>
			
			<view class="search-input-wrapper">
				<uni-icons type="search" size="18" color="#999" class="search-icon"></uni-icons>
				<input 
					class="search-input"
					v-model="searchValue" 
					placeholder="输入搜索内容" 
					confirm-type="search"
					@confirm="keywordSearch"
					@input="keywordComplement"
					focus
				/>
				<uni-icons v-if="searchValue" type="clear" size="18" color="#ccc" @click="clearSearch"></uni-icons>
			</view>
			
			<view class="search-action-text" @click="keywordSearch">
				搜索
			</view>
		</view>

		<!-- 1. 搜索联想结果列表 -->
		<scroll-view scroll-y class="complement-list" v-if="searchValue && searchResult.length > 0">
			<view 
				v-for="(item, index) in searchResult" 
				:key="index" 
				class="complement-item"
				@click="comprehensiveSearch(item.content)"
			>
				<uni-icons type="search" size="16" color="#bbb"></uni-icons>
				<view v-html="item.content" class="result-text"></view>
				<uni-icons type="arrowright" size="14" color="#eee"></uni-icons>
			</view>
		</scroll-view>
		
		<!-- 2. 搜索历史记录区域 -->
		<view class="history-block" v-if="!searchValue">
			<view class="history-header">
				<view class="history-title">搜索历史</view>
				<uni-icons type="trash" size="18" color="#999" @click="clearHistory" v-if="historyList.length > 0"></uni-icons>
			</view>
			
			<view class="history-list" v-if="historyList.length > 0">
				<view 
					class="history-tag" 
					v-for="(item, index) in historyList" 
					:key="index"
					@click="clickHistory(item)"
				>
					{{item}}
				</view>
			</view>
			<view class="no-data" v-else>暂无搜索记录</view>
		</view>
	</view>
</template>

<script>
import { complement } from '../../utils/search/search';

export default {
	data() {
		return {
			searchValue: '',
			searchResult: [],
			historyList: [] // 搜索历史列表
		}
	},
	onShow() {
		// 页面显示时加载历史记录
		this.loadHistory();
	},
	methods: {
		// 加载本地存储的历史
		loadHistory() {
			const list = uni.getStorageSync('search_history');
			if (list) {
				this.historyList = JSON.parse(list);
			}
		},
		// 保存搜索词到本地
		saveHistory(keyword) {
			if (!keyword || keyword.trim() === '') return;
			
			let list = uni.getStorageSync('search_history');
			list = list ? JSON.parse(list) : [];
			
			// 1. 排重：如果已存在，先删掉旧的
			const index = list.indexOf(keyword);
			if (index > -1) {
				list.splice(index, 1);
			}
			
			// 2. 置顶：插入到数组最前面
			list.unshift(keyword);
			
			// 3. 数量限制：只保留最近15条
			if (list.length > 15) {
				list.pop();
			}
			
			this.historyList = list;
			uni.setStorageSync('search_history', JSON.stringify(list));
		},
		// 清空历史记录
		clearHistory() {
			uni.showModal({
				title: '提示',
				content: '确定要清空所有搜索历史吗？',
				success: (res) => {
					if (res.confirm) {
						this.historyList = [];
						uni.removeStorageSync('search_history');
					}
				}
			});
		},
		// 点击历史标签发起搜索
		clickHistory(item) {
			this.searchValue = item;
			this.keywordSearch();
		},
		goBack() {
			uni.navigateBack();
		},
		clearSearch() {
			this.searchValue = '';
			this.searchResult = [];
		},
		keywordComplement(e) {
			const value = e.detail.value;
			this.searchValue = value;
			if (!value) {
				this.searchResult = [];
				return;
			}
			complement({ keyword: value }, {}).then(res => {
				this.searchResult = res;
			});
		},
		// 点击“搜索”按钮或键盘回车
		keywordSearch() {
			const keyword = this.searchValue.trim();
			if (!keyword) return;
			
			// 保存到历史记录
			this.saveHistory(keyword);
			
			uni.navigateTo({
				url: '/pages/resultPage/resultPage?keyword=' + keyword
			});
		},
		// 点击联想词
		comprehensiveSearch(content) {
			const pureText = content.replace(/<[^>]+>/g, "");
			
			// 保存到历史记录
			this.saveHistory(pureText);
			
			uni.navigateTo({
				url: '/pages/resultPage/resultPage?keyword=' + pureText
			});
		}
	}
}
</script>

<style lang="scss" scoped>
.search-container {
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: #fff;

	.status-block {
		width: 100%;
		height: var(--status-bar-height);
	}

	.header-bar {
		display: flex;
		align-items: center;
		padding: 10rpx 20rpx 20rpx 10rpx;
		
		.back-btn {
			padding: 10rpx;
			display: flex;
			align-items: center;
		}

		.search-input-wrapper {
			flex: 1;
			height: 72rpx;
			background-color: #f5f6f8;
			border-radius: 36rpx;
			display: flex;
			align-items: center;
			padding: 0 24rpx;
			margin: 0 20rpx;

			.search-input {
				flex: 1;
				font-size: 28rpx;
				color: #333;
			}
		}

		.search-action-text {
			font-size: 30rpx;
			color: #007aff;
			padding-right: 10rpx;
		}
	}

	.complement-list {
		padding: 0 30rpx;
		.complement-item {
			display: flex;
			align-items: center;
			height: 100rpx;
			border-bottom: 1rpx solid #f8f8f8;
			.result-text {
				flex: 1;
				margin-left: 20rpx;
				font-size: 28rpx;
			}
		}
	}
	
	.history-block {
		padding: 30rpx;
		
		.history-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 30rpx;
			
			.history-title {
				font-size: 28rpx;
				font-weight: bold;
				color: #333;
			}
		}
		
		.history-list {
			display: flex;
			flex-wrap: wrap; // 自动换行
			
			.history-tag {
				background-color: #f5f6f8;
				padding: 12rpx 28rpx;
				border-radius: 30rpx;
				font-size: 24rpx;
				color: #666;
				margin-right: 20rpx;
				margin-bottom: 20rpx;
				
				&:active {
					background-color: #eee;
				}
			}
		}

		.no-data {
			font-size: 24rpx;
			color: #999;
			text-align: center;
			margin-top: 50rpx;
		}
	}
}
</style>
