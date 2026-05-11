<template>
	
</template>
<script>
	import { initManager, connect, close as closeWebSocketManager } from './utils/websocket.js' 
	import userStore from '@/store/localStore/index.js'
	import messageStore from '@/store/message/index.js'
	
	export default {
		
		onLaunch: function() {
			initManager(); 
			uni.onTabBarMidButtonTap(()=>{
				uni.navigateTo({
					url:'/pages/upload/upload'
				})
			})
			this.badge = messageStore.calc()
			//监听聊天信息增加处理tabbar角标
			uni.$on('addMessageTabbarBadge',(number)=>{
				this.badge += number
			})
			uni.$on('subMessageTabbarBadge',(number)=>{
				this.badge -= number;
				if(this.badge < 0) this.badge = 0;
			})
			uni.$on('handleMessage',(message)=>{
				
			})
			
		},
		watch:{
			badge:{
				handler(newVal,oldVal){
					if(newVal > 0 && newVal <= 99){
						uni.setTabBarBadge({
							index:2,
							text:String(newVal)
						})
					}else if(newVal > 99){
						uni.setTabBarBadge({
							index:2,
							text:'99+'
						})
					}else{
						uni.removeTabBarBadge({
							index:2
						})
					}
				},
				immediate:true
			}
		},
		onShow: function() {
			
					// 【修改】App 显示时，如果用户已登录，尝试连接 WebSocket
					if(userStore.getUserid() !== undefined && userStore.getUserid() !== null){
						// 【修改】先确保 Manager 已初始化配置
						initManager(); 
						// 然后发起连接，Manager 内部会处理重复连接和重连逻辑
						connect(); 
					}
		},
		onUnload: function() { // 使用 onUnload 替代 beforeDestroy
				console.log('App Unload');
				uni.$off('handleMessage');
				uni.$off('addMessageTabbarBadge');
				uni.$off('subMessageTabbarBadge');
				
				// 【修改】App 卸载时，强制关闭 WebSocket
				closeWebSocketManager(true); // 强制关闭
			},
		
		data(){
			return{
				badge:0
			}
		}
	}
</script>

<style lang="scss">
	
</style>