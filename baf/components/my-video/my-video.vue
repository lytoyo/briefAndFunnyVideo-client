<template>
	<view class="video-container">
		<view class="user-status" v-if="needUserMsg" @click="skipToUserDetail">
			<view class="img-block"> 
				<image :src="userAvatar" class="cover-image"/>
			</view>
			<view class="usrn-block">{{userName}}</view>
		</view>
		<view class="content-block" v-if="needUserMsg">
			{{content}}
		</view>
		<video :src="url" :poster="poster" class="video-block" :style="{height:height+'rpx',width:width + 'rpx'}"></video>
	</view>
	
</template>

<script>
	export default{
		props:{
			url:{
				type:String,
				require:true
			},
			poster:{
				type:String,
				require:true
			},
			userAvatar:{
				type:String,
				
			},
			userName:{
				type:String,
				
			},
			userId:{
				type:Number
			},
			content:{
				type:String,
				default:''
			},
			height:{
				type:Number,
				default:422
			},
			width:{
				type:Number,
				default:750
			},
			needUserMsg:{
				type:Boolean,
				default:true
			}
		},
		methods:{
			skipToUserDetail(){
				uni.navigateTo({
					url:"/pages/userDetail/userDetail?id=" + this.userId
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.video-container{
		width: 100%;
		background-color: white;
		.user-status{
			padding: 20rpx;
			width: 100%;
			display: flex;
			flex-direction: row;
			
			.img-block{
				height:100rpx;
				width: 100rpx;
				border-radius: 50%;
				overflow: hidden;
				
				.cover-image{ 
					width: 100%;
					height: 100%;
				}
			}
			.usrn-block{
				margin-left: 20rpx;
				height: 100%;
				line-height: 100rpx;
			}
		}
		
		.content-block{
			padding: 0 20rpx 20rpx 20rpx;
			white-space: normal;
		}
		
		.video-block{
			width: 100%;
			
		}
	}
</style> 