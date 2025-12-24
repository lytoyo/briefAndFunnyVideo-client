<!-- components/video-player/video-gesture.vue -->
<template>
  <view 
    class="gesture-layer"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchCancel"
  ></view>
</template>

<script>
export default {
  name: 'VideoGesture',
  data() {
    return {
      startX: 0,
      startY: 0,
      startTime: 0,
      lastTapTime: 0,
      isDragging: false,
      touchCount: 0
    };
  },
  methods: {
    onTouchStart(e) {
      this.startX = e.touches[0].clientX;
      this.startY = e.touches[0].clientY;
      this.startTime = Date.now();
      this.touchCount = e.touches.length;
    },
    
    onTouchMove(e) {
      if (e.touches.length === 2) {
        this.handlePinch(e);
      }
    },
    
    onTouchEnd(e) {
      const endTime = Date.now();
      const deltaTime = endTime - this.startTime;
      const deltaX = e.changedTouches[0].clientX - this.startX;
      const deltaY = e.changedTouches[0].clientY - this.startY;
      
      // 双击检测
      if (deltaTime < 300 && Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
        const currentTime = Date.now();
        if (currentTime - this.lastTapTime < 300) {
          this.$emit('double-tap');
        } else {
          this.$emit('tap');
        }
        this.lastTapTime = currentTime;
        return;
      }
      
      // 滑动检测
      if (deltaTime < 300 && (Math.abs(deltaX) > 30 || Math.abs(deltaY) > 30)) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          // 水平滑动
          if (deltaX > 0) {
            this.$emit('swipe-right', { deltaX, deltaY });
          } else {
            this.$emit('swipe-left', { deltaX, deltaY });
          }
        } else {
          // 垂直滑动
          if (deltaY > 0) {
            this.$emit('swipe-down', { deltaX, deltaY });
          } else {
            this.$emit('swipe-up', { deltaX, deltaY });
          }
        }
      }
    },
    
    onTouchCancel() {
      this.isDragging = false;
    },
    
    handlePinch(e) {
      if (e.touches.length === 2) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        
        const distance = Math.sqrt(
          Math.pow(touch2.clientX - touch1.clientX, 2) +
          Math.pow(touch2.clientY - touch1.clientY, 2)
        );
        
        this.$emit('pinch', distance);
      }
    }
  }
};
</script>

<style scoped>
.gesture-layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
</style>