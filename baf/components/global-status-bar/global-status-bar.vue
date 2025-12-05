
<template>
  <!-- 这个组件会自动计算高度并占位 -->
  <view class="global-status-bar" :style="barStyle"></view>
</template>

<script>
export default {
  name: 'GlobalStatusBar',
  data() {
    return {
      statusBarHeight: 20 // 默认高度
    }
  },
  computed: {
    barStyle() {
      return {
        height: this.statusBarHeight + 'px',
        width: '100%'
      }
    }
  },
  mounted() {
    // 自动获取手机状态栏高度
    const systemInfo = uni.getSystemInfoSync()
    this.statusBarHeight = systemInfo.statusBarHeight || 20
  }
}
</script>

<style scoped>
.global-status-bar {
}
</style>