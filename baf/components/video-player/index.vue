<!-- components/video-player/index.vue -->
<template>
  <view class="video-container" :style="{ width: width, height: height }">
    <!-- 视频区域 -->
    <video
      v-if="!useCustomPlayer"
      :id="videoId"
      :src="src"
      :autoplay="autoplay"
      :loop="loop"
      :muted="muted"
      :controls="false"
      :show-progress="false"
      :show-fullscreen-btn="false"
      :show-play-btn="false"
      :show-center-play-btn="false"
      :enable-progress-gesture="false"
      :style="videoStyle"
      @play="onPlay"
      @pause="onPause"
      @ended="onEnded"
      @timeupdate="onTimeUpdate"
      @error="onError"
      @loadedmetadata="onLoadedMetadata"
      @waiting="onWaiting"
      @seeking="onSeeking"
      @seeked="onSeeked"
    />
    
    <!-- 自定义UI层 -->
    <view class="video-overlay" @click="togglePlay">
      <!-- 播放/暂停按钮 -->
      <view v-if="!isPlaying" class="play-btn" @click.stop="play">
        <text class="icon-play">▶</text>
      </view>
      
      <!-- 加载中 -->
      <view v-if="isLoading" class="loading">
        <view class="loading-spinner"></view>
      </view>
      
      <!-- 错误提示 -->
      <view v-if="hasError" class="error-overlay">
        <text class="error-text">视频加载失败</text>
        <button class="retry-btn" @click.stop="retry">重试</button>
      </view>
    </view>
    
    <!-- 自定义控制条 -->
    <video-controls
      v-if="showControls"
      :current-time="currentTime"
      :duration="duration"
      :is-playing="isPlaying"
      :is-muted="isMuted"
      :volume="volume"
      :is-fullscreen="isFullscreen"
      :buffer-percent="bufferPercent"
      @play="play"
      @pause="pause"
      @mute-toggle="toggleMute"
      @fullscreen-toggle="toggleFullscreen"
      @seek="onSeek"
      @volume-change="onVolumeChange"
    />
    
    <!-- 手势控制层 -->
    <video-gesture
      v-if="enableGesture"
      @tap="onGestureTap"
      @double-tap="onGestureDoubleTap"
      @swipe-left="onGestureSwipeLeft"
      @swipe-right="onGestureSwipeRight"
      @swipe-up="onGestureSwipeUp"
      @swipe-down="onGestureSwipeDown"
      @pinch="onGesturePinch"
    />
    
    <!-- 弹幕层 -->
    <video-danmu
      v-if="enableDanmu"
      :current-time="currentTime"
      :danmu-list="danmuList"
    />
  </view>
</template>

<script>
import VideoControls from './video-controls.vue';
import VideoGesture from './video-gesture.vue';
import VideoDanmu from './video-danmu.vue';

export default {
  name: 'VideoPlayer',
  components: {
    VideoControls,
    VideoGesture,
    VideoDanmu
  },
  props: {
    // 基本属性
    src: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400rpx'
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    muted: {
      type: Boolean,
      default: false
    },
    
    // 功能开关
    showControls: {
      type: Boolean,
      default: true
    },
    enableGesture: {
      type: Boolean,
      default: true
    },
    enableDanmu: {
      type: Boolean,
      default: false
    },
    
    // 样式
    poster: {
      type: String,
      default: ''
    },
    objectFit: {
      type: String,
      default: 'contain' // contain, fill, cover
    }
  },
  data() {
    return {
      videoId: `video_${Date.now()}_${Math.random().toString(36).substr(2)}`,
      videoContext: null,
      isPlaying: false,
      isLoading: false,
      hasError: false,
      currentTime: 0,
      duration: 0,
      isMuted: this.muted,
      volume: 1,
      isFullscreen: false,
      bufferPercent: 0,
      danmuList: [],
      videoStyle: {
        width: '100%',
        height: '100%',
        'object-fit': this.objectFit
      }
    };
  },
  computed: {
    progress() {
      return this.duration > 0 ? (this.currentTime / this.duration) * 100 : 0;
    }
  },
  mounted() {
    this.initVideo();
  },
  beforeDestroy() {
    this.destroyVideo();
  },
  methods: {
    // 初始化视频
    initVideo() {
      this.videoContext = uni.createVideoContext(this.videoId, this);
      this.$nextTick(() => {
        if (this.autoplay) {
          this.play();
        }
      });
    },
    
    // 播放
    play() {
      if (this.videoContext) {
        this.videoContext.play();
        this.isPlaying = true;
        this.$emit('play');
      }
    },
    
    // 暂停
    pause() {
      if (this.videoContext) {
        this.videoContext.pause();
        this.isPlaying = false;
        this.$emit('pause');
      }
    },
    
    // 切换播放/暂停
    togglePlay() {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    },
    
    // 跳转到指定时间
    seek(time) {
      if (this.videoContext && time >= 0 && time <= this.duration) {
        this.videoContext.seek(time);
      }
    },
    
    // 切换静音
    toggleMute() {
      this.isMuted = !this.isMuted;
      if (this.videoContext) {
        this.videoContext.muted(this.isMuted);
      }
      this.$emit('mute-change', this.isMuted);
    },
    
    // 切换全屏
    toggleFullscreen() {
      this.isFullscreen = !this.isFullscreen;
      if (this.videoContext) {
        this.videoContext.requestFullScreen({
          direction: 90
        });
      }
      this.$emit('fullscreen-change', this.isFullscreen);
    },
    
    // 设置音量
    setVolume(volume) {
      this.volume = Math.max(0, Math.min(1, volume));
      // 原生video不支持直接设置音量，可通过audioContext
      this.$emit('volume-change', this.volume);
    },
    
    // 重试
    retry() {
      this.hasError = false;
      this.initVideo();
      this.$emit('retry');
    },
    
    // 销毁
    destroyVideo() {
      if (this.videoContext) {
        this.videoContext.stop();
        this.videoContext = null;
      }
    },
    
    // 事件处理
    onPlay() {
      this.isPlaying = true;
      this.$emit('play');
    },
    
    onPause() {
      this.isPlaying = false;
      this.$emit('pause');
    },
    
    onEnded() {
      this.isPlaying = false;
      this.$emit('ended');
    },
    
    onTimeUpdate(e) {
      this.currentTime = e.detail.currentTime;
      this.$emit('timeupdate', e.detail);
    },
    
    onError(e) {
      this.hasError = true;
      this.isPlaying = false;
      console.error('视频播放错误:', e);
      this.$emit('error', e);
    },
    
    onLoadedMetadata(e) {
      this.duration = e.detail.duration;
      this.$emit('loadedmetadata', e.detail);
    },
    
    onWaiting() {
      this.isLoading = true;
      this.$emit('waiting');
    },
    
    onSeeking() {
      this.isLoading = true;
      this.$emit('seeking');
    },
    
    onSeeked() {
      this.isLoading = false;
      this.$emit('seeked');
    },
    
    // 手势事件
    onGestureTap() {
      this.togglePlay();
    },
    
    onGestureDoubleTap() {
      this.togglePlay();
    },
    
    onGestureSwipeLeft() {
      this.seek(this.currentTime - 10);
    },
    
    onGestureSwipeRight() {
      this.seek(this.currentTime + 10);
    },
    
    onGestureSwipeUp() {
      this.setVolume(Math.min(1, this.volume + 0.1));
    },
    
    onGestureSwipeDown() {
      this.setVolume(Math.max(0, this.volume - 0.1));
    },
    
    onGesturePinch(scale) {
      this.toggleFullscreen();
    }
  }
};
</script>

<style scoped>
.video-container {
  position: relative;
  background-color: #000;
  overflow: hidden;
}

.video-container video {
  width: 100%;
  height: 100%;
  display: block;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
}

.play-btn {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 40rpx;
}

.loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.loading-spinner {
  width: 60rpx;
  height: 60rpx;
  border: 6rpx solid #fff;
  border-top: 6rpx solid #007aff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
}

.error-text {
  font-size: 28rpx;
  margin-bottom: 20rpx;
  color: #fff;
}

.retry-btn {
  background-color: #007aff;
  color: #fff;
  border: none;
  border-radius: 8rpx;
  padding: 16rpx 32rpx;
  font-size: 28rpx;
}
</style>