<!-- components/video-player/video-controls.vue -->
<template>
  <view class="video-controls" :class="{ 'hidden': !visible }">
    <!-- 进度条 -->
    <view class="progress-container">
      <view class="time-display">{{ formatTime(currentTime) }}</view>
      <view class="progress-bar" @click="onProgressClick">
        <view class="progress-bg">
          <view 
            class="progress-played" 
            :style="{ width: progress + '%' }"
          ></view>
          <view 
            class="progress-buffer" 
            :style="{ width: bufferPercent + '%' }"
          ></view>
          <view 
            class="progress-thumb" 
            :style="{ left: progress + '%' }"
            @touchstart="onThumbTouchStart"
            @touchmove="onThumbTouchMove"
            @touchend="onThumbTouchEnd"
          ></view>
        </view>
      </view>
      <view class="time-display">{{ formatTime(duration) }}</view>
    </view>
    
    <!-- 控制按钮 -->
    <view class="controls-bar">
      <view class="left-controls">
        <view class="control-btn" @click="$emit('play')" v-if="!isPlaying">
          <text class="icon">▶</text>
        </view>
        <view class="control-btn" @click="$emit('pause')" v-else>
          <text class="icon">⏸</text>
        </view>
        
        <view class="control-btn" @click="$emit('mute-toggle')">
          <text class="icon" v-if="isMuted">🔇</text>
          <text class="icon" v-else>🔊</text>
        </view>
        
        <view class="volume-slider" v-if="showVolumeSlider">
          <slider
            :value="volume * 100"
            min="0"
            max="100"
            @changing="onVolumeChanging"
            @change="onVolumeChange"
            activeColor="#007aff"
            backgroundColor="#666"
            block-size="20"
          />
        </view>
      </view>
      
      <view class="right-controls">
        <view class="control-btn" @click="$emit('fullscreen-toggle')">
          <text class="icon" v-if="isFullscreen">⤢</text>
          <text class="icon" v-else>⤡</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'VideoControls',
  props: {
    currentTime: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 0
    },
    isPlaying: {
      type: Boolean,
      default: false
    },
    isMuted: {
      type: Boolean,
      default: false
    },
    volume: {
      type: Number,
      default: 1
    },
    isFullscreen: {
      type: Boolean,
      default: false
    },
    bufferPercent: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      visible: true,
      showVolumeSlider: false,
      isSeeking: false,
      seekValue: 0
    };
  },
  computed: {
    progress() {
      if (this.duration <= 0) return 0;
      return (this.currentTime / this.duration) * 100;
    }
  },
  mounted() {
    this.startAutoHide();
  },
  methods: {
    formatTime(seconds) {
      if (isNaN(seconds)) return '00:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    },
    
    onProgressClick(e) {
      const rect = e.target.getBoundingClientRect();
      const clickX = e.detail.x - rect.left;
      const percent = (clickX / rect.width) * 100;
      const targetTime = (percent / 100) * this.duration;
      this.$emit('seek', targetTime);
    },
    
    onThumbTouchStart() {
      this.isSeeking = true;
      this.stopAutoHide();
    },
    
    onThumbTouchMove(e) {
      if (this.isSeeking) {
        const rect = e.target.getBoundingClientRect();
        const touchX = e.touches[0].clientX;
        const percent = ((touchX - rect.left) / rect.width) * 100;
        this.seekValue = Math.max(0, Math.min(100, percent));
      }
    },
    
    onThumbTouchEnd() {
      this.isSeeking = false;
      const targetTime = (this.seekValue / 100) * this.duration;
      this.$emit('seek', targetTime);
      this.startAutoHide();
    },
    
    onVolumeChanging(e) {
      this.$emit('volume-change', e.detail.value / 100);
    },
    
    onVolumeChange(e) {
      this.$emit('volume-change', e.detail.value / 100);
      this.showVolumeSlider = false;
    },
    
    toggleVolumeSlider() {
      this.showVolumeSlider = !this.showVolumeSlider;
    },
    
    startAutoHide() {
      clearTimeout(this.hideTimer);
      this.visible = true;
      this.hideTimer = setTimeout(() => {
        this.visible = false;
      }, 3000);
    },
    
    stopAutoHide() {
      clearTimeout(this.hideTimer);
      this.visible = true;
    },
    
    showControls() {
      this.startAutoHide();
    }
  }
};
</script>

<style scoped>
.video-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 20rpx;
  transition: opacity 0.3s;
}

.video-controls.hidden {
  opacity: 0;
  pointer-events: none;
}

.progress-container {
  display: flex;
  align-items: center;
  margin-bottom: 20rpx;
}

.time-display {
  color: #fff;
  font-size: 24rpx;
  min-width: 80rpx;
  text-align: center;
}

.progress-bar {
  flex: 1;
  height: 40rpx;
  padding: 0 20rpx;
  position: relative;
}

.progress-bg {
  position: relative;
  height: 4rpx;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2rpx;
  overflow: visible;
}

.progress-played {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #007aff;
  border-radius: 2rpx;
  z-index: 1;
}

.progress-buffer {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 2rpx;
  z-index: 0;
}

.progress-thumb {
  position: absolute;
  top: 50%;
  width: 24rpx;
  height: 24rpx;
  background-color: #007aff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.controls-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-controls,
.right-controls {
  display: flex;
  align-items: center;
  gap: 20rpx;
}

.control-btn {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 32rpx;
}

.volume-slider {
  width: 150rpx;
  margin-left: 10rpx;
}
</style>