<template>
	<view class="container">
		<cover-view class="status-bar"></cover-view>

		<!-- 选项卡 -->
		<cover-view class="tabs">
			<cover-view v-for="(item, index) in items" :key="index" :class="['tab-item', {active: current === index}]"
				@tap="onTabChange(index)">
				<cover-view v-if="index !== 3">{{item}}</cover-view> 
				<cover-image v-else src="/static/search.png" class="tab-icon"></cover-image>
			</cover-view> 
		</cover-view>

		<!-- 内容区域 -->
		<view class="content">
			<!-- 推荐页 -->
			<view v-show="current === 0" class="scroll-container">
				<view v-for="(post, index) in recommendPostList" :key="post.id" class="post-item">
					<my-video v-if="post.fileType === 'video'" :url="post.url" :poster="post.cover" :userId="post.userId"
							  :userAvatar="post.userAvatar" :userName="post.userName" :content="post.content"/>
					<my-grid v-else :url="post.url" :userAvatar="post.userAvatar" :userName="post.userName"
					 :userId="post.userId" :content="post.content" />
					<my-interact :likeCount="post.likeCount" :commentCount="post.commentCount" :postIndex="index"
						:collectCount="post.collectCount" :isLiked="post.isLiked" :isCollect="post.isCollect"
						:id="post.id" :current="current" @like-click="onClickLike" @collect-click="onClickCollect" />
				</view>
			</view> 

			<!-- 其他页面 -->
			<view v-show="current === 1" class="scroll-container"> 
				<view v-for="(post, index) in videoPostList" :key="post.id" class="post-item">
					<my-video v-if="post.fileType === 'video'" :url="post.url" :poster="post.cover" :userId="post.userId"
							  :userAvatar="post.userAvatar" :userName="post.userName" :content="post.content"/>
					<my-grid v-else :url="post.url" :userAvatar="post.userAvatar" :userName="post.userName"
					 :userId="post.userId" :content="post.content" />
					<my-interact :likeCount="post.likeCount" :commentCount="post.commentCount" :postIndex="index"
						:collectCount="post.collectCount" :isLiked="post.isLiked" :isCollect="post.isCollect"
						:id="post.id" :current="current" @like-click="onClickLike" @collect-click="onClickCollect" />
				</view>
			</view>

			<view v-show="current === 2" class="scroll-container">
				<view v-for="(post, index) in imaTextPostList" :key="post.id" class="post-item">
					<my-video v-if="post.fileType === 'video'" :url="post.url" :poster="post.cover" :userId="post.userId"
							  :userAvatar="post.userAvatar" :userName="post.userName" :content="post.content"/>
					<my-grid v-else :url="post.url" :userAvatar="post.userAvatar" :userName="post.userName"
					 :userId="post.userId" :content="post.content" />
					<my-interact :likeCount="post.likeCount" :commentCount="post.commentCount" :postIndex="index"
						:collectCount="post.collectCount" :isLiked="post.isLiked" :isCollect="post.isCollect"
						:id="post.id" :current="current" @like-click="onClickLike" @collect-click="onClickCollect" />
				</view> 
			</view>
		</view>
	</view>
</template> 

<script>
	import MyInteract from '@/components/my-interact/index.js'
	import {
		askPostList,
		likedHandle,
		collectHandle
	} from '@/utils/blog/blog.js';

	export default {
		data() {
			return {
				current: 0,
				items: ['推荐', '视频', '图文'],
				size: 5,
				recommendPostList: [],
				recommendCurrent: 1,
				recommendPages: 0,
				recommendFlag:true,
				
				videoPostList:[],
				videoCurrent:1,
				videoPages:0,
				videoFlag:true,
				
				imaTextPostList:[],
				imaTextCurrent:1,
				imaTextPages:0,
				imaTextFlag:true
			}
		},
		mounted() {
			this.getPost(null,this.recommendCurrent);
		},
		methods: {
			getPost(type,current) {
				
				const params = {     
					current: current,
					size: this.size,
					type:type
				};
				if((type === null && !this.recommendFlag) || (type === 'video' && !this.videoFlag)
				|| (type === 'image' && !this.imaTextFlag) ){
					uni.showToast({
						title:'暂时无更多数据',
						icon:'none'
					})
					return;
				} 
				askPostList(params, {}).then(res => {
					if(type === null){
						this.recommendCurrent = res.postCurrent + 1;
						this.recommendPages = res.postPages;
						this.recommendPostList.push(...res.postList);
						if(this.recommendCurrent > this.recommendPages){
							this.recommendFlag = false
						} 
					}
					else if(type === 'video'){
						
						this.videoCurrent = res.postCurrent + 1;
						this.videoPages = res.postPages;
						this.videoPostList.push(...res.postList);
						if(this.videoCurrent > this.videoPages){
							this.videoFlag = false
						} 
					}else if(type === 'image'){
						
						//这里获取资源接口有错误
						this.imaTextCurrent = res.postCurrent + 1;
						this.imaTextPages = res.postPages;
						this.imaTextPostList.push(...res.postList);
						if(this.imaTextCurrent > this.imaTextPages){
							this.imaTextFlag = false
						}
					} 
					
				});
			},
			
			onTabChange(index) {
				this.current = index;
				if(this.current === 1 && this.videoPostList.length === 0){
					this.getPost('video',this.videoCurrent)
				}else if(this.current === 2 && this.imaTextPostList.length === 0){
					this.getPost('image',this.imaTextCurrent)
				}
			},
			 
			onClickLike(blogVo,current,postIndex){
				likedHandle(blogVo,{}).then(res=>{
					
					var num = res.status === 1 ? 1 : -1;
					var flag = res.status === 1 ? true : false;
					if(current === 0){
						this.recommendPostList[postIndex].likeCount += num
						this.recommendPostList[postIndex].isLiked = flag
					}else if(current === 1){
						//这里需要补充
					}
				})
			},
			
			onClickCollect(blogVo,current,postIndex){
				collectHandle(blogVo,{}).then(res=>{
					var num = res.status === 1 ? 1 : -1;
					var flag = res.status === 1 ? true : false;
					if(current === 0){
						this.recommendPostList[postIndex].collectCount += num
						this.recommendPostList[postIndex].isCollect = flag
					}else if(current === 1){
						//这里需要补充
					}
				})
			}
		},
		onReachBottom() {  
			var type = null;
			var current = null;
			if(this.current === 0 ){
				current = this.recommendCurrent
			}else if(this.current === 1){
				type = 'video'
				current = this.videoCurrent
			}else if(this.current === 2){
				type = 'image'
				current = this.imaTextCurrent
			}
			this.getPost(type,current)
		}
	}
</script>

<style scoped lang="scss">
	.container {
		width: 100%;
		height: 100vh;
		background-color: #f5f5f5;

		.status-bar {
			position: fixed;
			height: var(--status-bar-height);
			width: 100%;
			background-color: white;
		}

		.tabs {
			position: fixed;
			top: var(--status-bar-height);
			// left: 0;
			height: 130rpx;
			width: 100%;
			background: white;
			display: flex;
			border-bottom: 1px solid #eee;

			.tab-item {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 36rpx;
				color: #666;
				position: relative;

				&.active {
					color: #007AFF;
					font-weight: bold;
				}

				.tab-icon {
					width: 40rpx;
					height: 40rpx;
				}
			}
		}

		.content {
			
			padding-top: calc(var(--status-bar-height) + 130rpx);
			
			.scroll-container {
				width: 100%;
				height: 100%;
				overflow-y: auto;
				display: block;
				
				
				.post-item {
					width: 100%;
					margin-bottom: 20rpx;
					background: white;
				}
			}

			.page-content {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 40rpx;
				color: #999;
			}
		}
	}
</style>