<template>
	<view class="comment-item-container" @click="touchToChildBlock(comment.id)">
		<!-- 头像区 -->
		<view class="avatar-block" @click.stop="skipToUserDetail(comment.userVo.id)">
			<view class="avatar-border-block">
				<image :src="comment.userVo.avatar"></image>
			</view>
		</view>
		<view class="user-message-block" >
			<view class="userName-isLiked-block">
				<view class="userName-isPoster-time-addr-block">
					<view class="userName-isPoster-block" >
						<view class="userName-block">
							{{comment.userVo.userName}}
						</view>
						<view class="isPoster-block">
							<image src="/static/poster.png" ></image>
						</view>
					</view>
					<view class="time-addr-block">
						<view class="time-block">
							{{formatTimeAgo(comment.publicTime)}}
						</view>
						<view class="addr-block">
							 · {{comment.userVo.province}} 
						</view>
					</view>  
				</view>
				<view class="isLiked-block"> 
					<image v-if="comment.isLiked" src="/static/liked.png" @click.stop="tapLiked()"></image>
					<image v-else src="/static/like.png" @click.stop="tapLiked()"></image>
					<view>{{comment.likedCount}}</view>
				</view>
			</view>
			<view class="content-media-block">
				<view class="content-block">
					{{cutOffContent(comment.comment)}}
					<span @click.stop="openContent" v-show="truncationFlag"
						  style="color: #0055ff;">...展开</span>
				</view> 
				<view class="media-block">
					<my-video v-if="comment.fileType !== null && comment.fileType === 'video'"
						:url="comment.fileName" :poster="comment.cover" :width="500" :height="280" :needUserMsg="false"></my-video>
					<my-grid v-else-if="comment.fileType !== null && comment.fileType === 'image'"
						:url="comment.fileName" :needUserMsg="false"></my-grid> 
				</view>
			</view>
			<view class="childComment-stand-block">  
				<view class="childComment-block" >
					<span v-if="comment.childCommentCount > 0">有{{comment.childCommentCount}}条</span>
					<span>回复</span>
					<span v-if="comment.childCommentCount > 0">></span>
				</view>
			</view> 
		</view>
	</view>
</template>

<script>
	import http from '@/utils/request'
	import {commentLikedHandle} from '@/utils/blog/blog.js'
	export default{
		props:{
			comment:{
				type:Object,
				require:true
			}
		},
		
		data(){
			return{
				truncationFlag:true,
			}
		},
		methods:{
			// 时间格式化方法
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
			tapLiked(){
				if(!http.hadLogin()){
					uni.showToast({
						title:'该操作需要先登录，请先登录',
						icon:'none'
					}),
					uni.navigateTo({
						url:'/pages/loginAndRegister/loginAndRegister'
					})
				}
				let data = {
					objId:this.comment.id,
					type:2,
					status:this.comment.isLiked ? 0 : 1
				}
				commentLikedHandle(data,{}).then(res=>{
					this.comment.isLiked = res.status === 1 ? true : false
					this.comment.likedCount += res.status === 1 ? 1 : -1
				})
			},
			skipToUserDetail(id){
				uni.navigateTo({
					url:"/pages/userDetail/userDetail?id=" + id
				})
			},
			touchToChildBlock(id){
				// 展开用户子评论区
				this.$emit("touchToChildBlock",id);
			},
			cutOffContent(content){
				if(content.length < 70 || !this.truncationFlag){
					this.truncationFlag = false
					return content
				}
				return content.slice(0,70)
			},
			openContent(){
				this.truncationFlag = !this.truncationFlag
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comment-item-container{
		width: 100%;
		padding: 20rpx;
		border: solid 1rpx #eee;
		display: flex;
		flex-direction: row;
		.avatar-block{
			height:100%;
			width: 100rpx;
			
			margin-right: 10rpx;
			.avatar-border-block{
				width: 100%;
				height: 100rpx;
				border-radius: 50%;
				overflow: hidden;
				image{
					width: 100%;
					height: 100rpx;
				}
			}
		}
		.user-message-block{
			width: 570rpx;
			padding: 0 20rpx;
			
			.userName-isLiked-block{
				height: 100rpx;
				width: 100%;
				display: flex;
				flex-direction: row;
				.userName-isPoster-time-addr-block{
					width: 70%;
					height: 100%;
					
					.userName-isPoster-block{
						width: 100%;
						height: 50%;
						
						display: flex;
						flex-direction: row;
						.userName-block{
							max-width: 70%;
							height: 100%;
							line-height: 50rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							font-size: 28rpx;
							color: #7e7e7e;
						}
						.isPoster-block{
							width: 20%;
							height: 100%;
							image{
								width: 50%;
								height: 100%;
								margin-left: 10%;
							}
						}
					}
					.time-addr-block{
						width: 100%;
						height: 50%;
						display: flex;
						flex-direction: row;
						font-size: 22rpx;
						.time-block{
							height: 100%;
							line-height: 50rpx;
							max-width: 50%;
						}
						.addr-block{
							 max-width: 50%;
							 height: 100%;
							 line-height: 50rpx;
						}
					}
				}
				.isLiked-block{
					width: 30%;
					height: 100%;
					display: flex;
					justify-content: center;
					image{
						width: 20%;
						height: 30%;
						margin-top: 20rpx;
					} 
					view{
						margin-top: 15rpx;
						margin-left: 12rpx;
						font-size: 25rpx;
					}
				}
			}
			.content-media-block{
				width: 100%;
				
				.content-block{
					width: 100%;
					padding:20rpx 20rpx 20rpx 0rpx;
					font-size: 30rpx; 
					overflow: hidden;
					text-overflow: ellipsis;
				}
				
			}
			.childComment-stand-block {
				width: 100%;
				height: 70rpx;
				display: flex; 
				align-items: center; 
				
				.childComment-block {
					
					min-width: 100rpx; 
					padding: 0 20rpx; 
					height: 50rpx;
					line-height: 50rpx;
					background-color: #d2d2d2;
					font-size: 25rpx;
					border-radius: 20rpx;
					display: inline-flex; 
					justify-content: center;
					align-items: center;
					
					span {
						display: inline-block;
						white-space: nowrap;
					}
					
					/* 可选：添加hover效果 */
					&:active {
						background-color: #c0c0c0;
					}
				}
			}
		}
	}
</style>