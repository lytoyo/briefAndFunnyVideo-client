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
			
		},
		onHide: function() {
			
		}
	}
</script>

<style lang="scss">
	
</style>
