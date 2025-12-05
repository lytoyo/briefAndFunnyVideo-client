<script>
	
	export default {
		onLaunch: function() {
			uni.onTabBarMidButtonTap(()=>{
				uni.navigateTo({
					url:'/pages/upload/upload'
				})
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	
</style>
