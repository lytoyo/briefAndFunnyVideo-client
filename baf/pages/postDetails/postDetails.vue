<template>
	<view class="comment-container">
		<!-- 顶部状态栏 -->
		<cover-view class="status-bar" />
		<!-- 导航栏 -->
		<cover-view class="naviga-bar">
			<cover-view class="return-button" @click="returnBack()">
				<cover-image src="/static/return.png"></cover-image>
			</cover-view>
			<cover-view class="post-detail-block">帖子详情</cover-view>
			<cover-view class="set-button">
				<cover-image src="/static/postSet.png"></cover-image>
			</cover-view>
		</cover-view> 	
		<view v-if="loading" class="loading-container">
			<text>加载中</text>
		</view>
		<!-- 图片视频栏 -->
		<view v-else-if="!loading">
			<my-video class="media-block" v-if=" postDetail.fileType === 'video'" :url="postDetail.url" :poster="postDetail.cover"
				:userAvatar="postDetail.userAvatar" :userName="postDetail.userName" :content="postDetail.content" :height="400" />
			<my-grid class="media-block" v-if="postDetail.fileType === 'image'" :url="postDetail.url" :userAvatar="postDetail.userAvatar" 
				:userName="postDetail.userName" :content="postDetail.content"/> 
			<!-- 评论排序 -->
			<view style="width: 100%;height: 100rpx;background-color: white;">
				<uni-data-select style="width: 200rpx;height: 100rpx;font-weight: bold;" mode="none" align="left" :value="value"
				 :localdata="range" :clear="false" @change="changeSort" /></uni-data-select>
			</view>
			
			<!-- 评论显示栏 -->
			<my-comment v-for="(item,index) in commentList" :key="item.id" 
						:comment="item" @touchToChildBlock="openChildBlock(item)" />
			<view v-if="!commentFlag && commentList.length > 0" class="noMoreComment">没有更多评论了</view>
		</view>
		
		<!-- 评论栏 --> 
		<cover-view :class="mediaFlag === 0 ? 'input-block' : 'input-display-block'"  >
			<cover-view v-if="mediaFlag !== 0" class="display-block">
				<!-- 文件显示待完成 -->
				<cover-view v-if="mediaFlag === 1" class="display-img-block">
					<cover-view v-for="(file,index) in displayedImages" :key="file.id" class="img-css":style="getImageStyle(index)">
					    <cover-image :src="file.fileUrl" @click="previewImage(index)" mode="aspectFill" class="preview-img"	></cover-image>
						<!-- 在第三张图片上显示 +n 提示 -->
						<cover-view v-if="index === 2 && fileList.length > 3" class="more-tips">
							<cover-view class="more-text">+{{fileList.length - 3}}</cover-view>
						</cover-view>
					</cover-view>
				</cover-view>
				<cover-view v-else-if="mediaFlag === 2" class="display-video-block">
					<video :src="fileList[0].fileUrl" :poster="fileList[0].coverUrl" class="video-element" />
				</cover-view>
			</cover-view>
			
			<cover-view style="display: flex; flex-direction: row;width: 100%;">
				<cover-view class="input-content-block" @click="openInput">{{remark.length > 0 ? remark : placeholder}}</cover-view>
				<cover-view class="status-block">
					<cover-view class="send-img-block">
						<cover-image v-if="remark.trim().length === 0 && fileList.length === 0" src="/static/send.png"></cover-image>
						<cover-image v-else src="/static/sendable.png" @click="postComment"></cover-image>
					</cover-view>
					<cover-view class="status-img-block">
						<cover-image v-if="postDetail !== null && postDetail.isLiked" src="/static/liked.png"></cover-image>
						<cover-image v-else src="/static/like.png"></cover-image>
						<cover-view v-if="postDetail !== null && postDetail.isLiked" style="margin-left: 10rpx">{{postDetail.likeCount}}</cover-view>
					</cover-view>
					<cover-view class="status-img-block"> 
						<cover-image v-if="postDetail !== null && postDetail.isCollect" src="/static/collected.png"></cover-image>
						<cover-image v-else src="/static/collect.png"></cover-image>
						<cover-view v-if="postDetail !== null && postDetail.isCollect" style="margin-left: 10rpx;">{{postDetail.collectCount}}</cover-view>
					</cover-view>
				</cover-view>
			</cover-view>
		</cover-view> 
	</view>
</template>

<script>		
	import { gainPostDetail,gainPostComment,comment } from '@/utils/blog/blog.js'
	export default {
		onLoad(option) {
			this.initPage(option.postId)
		},
		destroyed() {
			
			uni.$off('comment')
			uni.$off('openInput')
			uni.$off('resetChildComment')
			uni.$off('openChildComment')
			uni.$off('changeInputVal')
			this.removePopupListeners()
		},
		
		onReady() {
			// 页面准备好后再获取
			setTimeout(() => {
				this.commentPopup = uni.getSubNVueById('comment_popup')
				this.inputPopup = uni.getSubNVueById('input_popup')
				this.commentPopup.setStyle({
					"position": "absolute",
					"height":"95%",
				})
				this.inputPopup.setStyle({
					"height":"60%",
					
				})
				this.commentPopup.addEventListener('hide', () => {
					this.hideCommentPopup = true
					uni.$emit('resetChildComment')
					
				})
				this.inputPopup.addEventListener('hide',()=>{
					this.hideInputPopup = true
				})
			}, 300)
		}, 
		computed: {
		        // 计算只显示前3张图片
		        displayedImages() {
		            return this.fileList.slice(0, 3);
		        }
		    },
		watch:{
			value(newValue,oldValue){
				if(newValue !== oldValue){
					this.commentCurrent = 1;
					params = {
						current:this.commentCurrent,
						size:this.size,
						type:newValue,
						postId:this.postDetail.id,
						parentId:0
					};
					const commentRes = gainPostComment(params,{})
					this.commentList = commentRes.commentList
					this.commentCurrent = commentRes.current + 1;	
					this.commentTotal = commentRes.total
					this.commentPages = commentRes.pages
					if(this.commentCurrent > this.commentPages){
						this.commentFlag = false;
					}
				}
			}
		},
		onBackPress(event) {
			//子评论区和输入框都关闭才可以退出详情页
			if(this.hideCommentPopup && this.hideInputPopup){
				return false
			}
			return true
		},
		data() { 
			return {
				commentPopup:null,
				inputPopup:null,
				hideInputPopup:true,
				hideCommentPopup:true,
				postDetail:null,
				commentList : [],
				commentCurrent : 1,
				commentPages : 0,
				commentTotal : 0,
				commentFlag :true,
				size: 5,
				type: 2,
				value:1,
				range:[
					{value:1,text:"全部评论"},
					{value:2,text:"只看楼主"},
					{value:3,text:"视频评论"}
				],
				loading:true,
				remark:"",
				fileList:[],
				newCommentIdList:[],
				mediaFlag:0, //0-纯文字 1-图文 2-视频
				placeholder:"说说什么吧"
			}
		},
		onReachBottom() {
			if(this.commentFlag === false) return
			let params = {
				current:this.commentCurrent,
				size:this.size,
				type:this.type,
				postId:this.postDetail.id,
				parentId:0
			}
			gainPostComment(params,{}).then(res=>{
				const filterdRes = res.commentList.filter(comment=> !this.newCommentIdList.includes(comment.id))
				this.commentList.push(...filterdRes)
				this.commentCurrent = res.current + 1
				this.commentTotal = res.total
				this.commentPages = res.pages
				if(this.commentCurrent > this.commentPages){
					this.commentFlag = false
				}
			})
		},
		methods: {
			async initPage(id){
				this.loading = true
				try{
					const detailRes = await gainPostDetail({id}, {})
					let params = {
						current:this.commentCurrent,
						size:this.size,
						type:this.type,
						postId:id,
						parentId:0
					}
					const commentRes = await gainPostComment(params,{})
					this.postDetail = detailRes
					this.commentList.push(...commentRes.commentList)
					this.commentCurrent = commentRes.current + 1;
					this.commentTotal = commentRes.total
					this.commentPages = commentRes.pages
					if(this.commentCurrent > this.commentPages){
						this.commentFlag = false;
					}
					this.loading = false
				}catch(e){
					
				}
				
			}, 
			removePopupListeners() {
			    if (this.commentPopup){
					this.commentPopup.removeEventListener('hide')
				}
				if(this.inputPopup){
					this.inputPopup.removeEventListener('hide')
				}
		    },
			changeSort(e){
				this.value = e
			},
			returnBack(){
				uni.navigateBack()
			},
			openChildBlock(item){
				
				uni.$emit('openChildComment',{
					postDetail:this.postDetail,
					comment:item
				})
				this.commentPopup.show('slide-in-bottom',600,()=>{
					this.hideCommentPopup = false
					uni.$on('closeChildCommentBlock',()=>{
						this.commentPopup.hide()
						uni.$emit('resetChildComment')
						this.hideCommentPopup = true
						uni.$off('closeChildCommentBlock')
					})
				}) 
			},
			postComment(){
				let data = {
					postId:this.postDetail.id,
					parentId:0,
					comment:this.remark,
					fileType:this.mediaFlag === 0 ? null : this.mediaFlag === 1 ? 'image' : 'video',
					fileName:this.mediaFlag === 0 ? null : this.mediaFlag === 1 ? this.mergeStr() : this.fileList[0].fileName,
					cover:this.mediaFlag === 2 ? this.fileList[0].cover : null
				}
				comment(data,{}).then(res=>{
					this.commentList.unshift(res)
					this.newCommentIdList.push(res.id)
					this.remark = ''
					this.fileList = []
					this.mediaFlag = 0
					this.$forceUpdate()
					
					this.$nextTick(() => {
					    this.$forceUpdate()
					    // 滚动到最新评论位置
					    uni.pageScrollTo({
					        scrollTop: 0,
					        duration: 300
					    })
					})
				})
			},
			mergeStr(){
				const str = this.fileList.map(item => item.fileName).join(",")
				return str
			},
			openInput(){
				uni.$emit('openInput',{
					postId:this.postDetail.id,
					parentId:0,
					fileList:this.fileList,
					mediaFlag:this.mediaFlag,
					remark:this.remark
				})
				this.inputPopup.show('slide-in-bottom',600,()=>{
					this.hideInputPopup = false
					uni.$on('changeInputVal',(data)=>{
						this.fileList = [...data.fileList]
						this.remark = data.remark
						this.mediaFlag = data.mediaFlag
						// 强制更新视图
						this.$forceUpdate()
						
					})
					
					uni.$on('comment',(data)=>{
						this.commentList.unshift(data)
						this.newCommentIdList.push(data.id)
						this.inputPopup.hide()
						this.hideInputPopup = true
						this.$forceUpdate()
						
						this.$nextTick(() => {
						    this.$forceUpdate()
						    // 滚动到最新评论位置
						    uni.pageScrollTo({
						        scrollTop: 0,
						        duration: 300
						    })
						})
					})
				})
			},
			previewImage(currentIndex) {
				const urls = this.fileList.map(file => file.fileUrl)
				uni.previewImage({
					current: currentIndex,
					urls: urls,
					indicator: 'number',
					loop: false,
					complete: () => {
					    // 使用箭头函数，继承外层 this
					    if (this.$refs.remarkInput) {
					        this.$refs.remarkInput.focus();
					    }
					}
				});
			},
			delImg(index){
				 // 使用 $set 确保响应式更新
				this.$delete(this.fileList, index)
				// 如果数组为空，重置 mediaFlag
				if(this.fileList.length === 0){
					this.mediaFlag = 0
				}
				
				// 强制更新视图
				this.$forceUpdate()
			},
			getImageStyle(index) {
			    const baseStyle = {};
			    
			    // 如果有超过3张图片，最后一张需要特殊处理
			    if (index === 2 && this.fileList.length > 3) {
			        return {
			            ...baseStyle,
			            position: 'relative'
			        };
			    }
			    
			    return baseStyle;
			},
		}
	}
</script>
	
<style scoped lang="scss">
	.comment-container{
		width: 100%;
		height: 100vh;
		.loading-container{
			
		}
		.status-bar {
			position: fixed;
			height: var(--status-bar-height);
			width: 100%;
			background-color: white;
			
		}
		
		.naviga-bar{
			position: fixed;
			top: var(--status-bar-height);
			width: 100%;
			height: 100rpx;
			display: flex;
			flex-direction: row;
			border-bottom: solid 1rpx #dfdfdf;
			background-color: white;
			
			
			.return-button{
				
				width: 125rpx;
				height:100%; 
				display: flex;
				text-align: center;
				align-items: center;
				justify-content: center;
				line-height: 100rpx;
				cover-image{
					height: 50%;
					width: 50rpx;
				}
			}
			
			.post-detail-block{
				width: 500rpx;
				height: 100%;
				text-align: center;
				line-height: 90rpx;
				font-size: 40rpx;
			}
			
			.set-button{
				width: 125rpx;
				height:100%;
				display: flex;
				text-align: center;
				align-items: center;
				justify-content: center;
				line-height: 100rpx;
				cover-image{
					height: 30%;
					width: 45rpx;
				}
			}
		}
		.media-block{
			padding-top: calc(var(--status-bar-height) + 100rpx);
			margin-bottom: 20rpx;
		}
		.noMoreComment{
			width: 100%;
			text-align: center;
			font-size: 25rpx;
			color: #dfdfdf;
			height:160rpx;
		}
		.child-block{
			height: 100vh;
			width: 100%;
			background-color: white;
		}
		.input-display-block{
			width: 100%;
			height: 375rpx;
			position: fixed;
			bottom: 0;
			background-color: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			.display-block{
				width: 100%;
				height: 250rpx;
				.display-img-block{
					width: 100%;
					height: 250rpx;
					display: flex;
					.img-css{
						height: 250rpx;
						width: 250rpx;
						padding-left: 20rpx;
						position: relative;
						background-color: aqua;
						.preview-img{
							height: 100%;
							width: 100%;
							position: absolute;	
						}
						.more-tips{
							position: absolute;
							bottom: 10rpx;
							right: 10rpx;
							width: 50rpx;
							height: 50rpx;
							opacity: 0.1;
							background-color: #adadad;
							.more-text{
								font-size: 36rpx;
								font-weight: bold;
								color: white;
								text-shadow: 1rpx 1rpx 2rpx rgba(0, 0, 0, 0.5);
							}
						}
						
					}
				}
				.display-video-block{
					width: 100%;
					height: 250rpx;
					padding-left: 20rpx;
					padding-top: 20rpx;
					.video-element{
						width: 375rpx;
						height: 200rpx;
					}
				}
			}
			.input-content-block{
				width: 50%;
				line-height: 85rpx;
				height: 85rpx;
				margin-left: 20rpx;
				background-color: #f4f4f4;
				padding:0 20rpx;
				text-overflow: ellipsis;
				overflow: hidden;
				font-size: 25rpx;
				color: #a5a5a5;
				border-radius: 5%;
			}
			.status-block{
				width: 40%;
				height: 85rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				
				.send-img-block{
					width: 30%;
					height: 60rpx;
					display: flex;
					flex-direction: row;
					
					cover-image{
						width: 60rpx;
						height: 60rpx;
					}
				}
				.status-img-block{
					width: 30%;
					height: 60rpx;
					display: flex;
					flex-direction: row;
					line-height: 60rpx;
					cover-image{
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
		}
		.input-block{
			width: 100%;
			height: 125rpx;
			position: fixed;
			bottom: 0;
			background-color: white;
			display: flex;
			flex-direction: row;
			align-items: center;
			.input-content-block{
				width: 50%;
				line-height: 85rpx;
				height: 85rpx;
				margin-left: 20rpx;
				background-color: #f4f4f4;
				padding:0 20rpx;
				text-overflow: ellipsis;
				overflow: hidden;
				font-size: 25rpx;
				color: #a5a5a5;
				border-radius: 5%;
			}
			.status-block{
				width: 40%;
				height: 85rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				
				.send-img-block{
					width: 30%;
					height: 60rpx;
					display: flex;
					flex-direction: row;
					
					cover-image{
						width: 60rpx;
						height: 60rpx;
					}
				}
				.status-img-block{
					width: 30%;
					height: 60rpx;
					display: flex;
					flex-direction: row;
					line-height: 60rpx;
					cover-image{
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
		}
	}
</style>
