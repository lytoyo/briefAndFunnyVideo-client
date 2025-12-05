<!-- components/el-button/el-button.vue -->
<template>
  <button 
    class="el-button"
    :class="buttonClasses"
    :style="buttonStyles"
    :disabled="disabled || loading || isCounting"
    :loading="loading"
    @click="handleClick"
  >
    <!-- 加载状态 -->
    <text v-if="loading" class="el-button__loading">
      <text class="el-icon-loading">⟳</text>
    </text>
    
    <!-- 图标 -->
    <text v-if="icon && !loading && !isCounting" class="el-button__icon" :class="`el-icon-${icon}`">
      {{ getIconText(icon) }}
    </text>
    
    <!-- 按钮文本 -->
    <text class="el-button__text">
      <slot v-if="!isCounting"></slot>
      <text v-else>{{ countdown }}s</text>
    </text>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'primary', 'success', 'warning', 'danger', 'info'].includes(value)
    },
    // 尺寸
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['medium', 'small', 'mini'].includes(value)
    },
    // 是否朴素按钮
    plain: {
      type: Boolean,
      default: false
    },
    // 是否圆角按钮
    round: {
      type: Boolean,
      default: false
    },
    // 是否圆形按钮
    circle: {
      type: Boolean,
      default: false
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 图标类名
    icon: {
      type: String,
      default: ''
    },
    // 加载状态
    loading: {
      type: Boolean,
      default: false
    },
    // 宽度
    width: {
      type: [String, Number],
      default: ''
    },
    // 是否为验证码按钮
    isCaptcha: {
      type: Boolean,
      default: false
    },
    // 倒计时时长（秒）
    countdownTime: {
      type: Number,
      default: 60
    },
    // 是否自动开始倒计时（用于页面加载时恢复状态）
    autoStart: {
      type: Boolean,
      default: false
    }
  },
  
  data() {
    return {
      isCounting: false,
      countdown: 0,
      timer: null
    }
  },
  
  computed: {
    buttonClasses() {
      return [
        `el-button--${this.type}`,
        `el-button--${this.size}`,
        {
          'is-plain': this.plain,
          'is-round': this.round,
          'is-circle': this.circle,
          'is-disabled': this.disabled,
          'is-loading': this.loading,
          'is-counting': this.isCounting
        }
      ]
    },
    
    buttonStyles() {
      const styles = {}
      if (this.width) {
        styles.width = typeof this.width === 'number' ? `${this.width}rpx` : this.width
      }
      return styles
    }
  },
  
  watch: {
    // 监听 autoStart 变化，用于恢复倒计时状态
    autoStart: {
      immediate: true,
      handler(newVal) {
        if (newVal && this.isCaptcha) {
          this.restoreCountdownState()
        }
      }
    }
  },
  
  beforeDestroy() {
    // 组件销毁前清除定时器
    this.clearTimer()
  },
  
  methods: {
    handleClick(event) {
      if (!this.disabled && !this.loading && !this.isCounting) {
        if (this.isCaptcha) {
          this.startCountdown()
        }
        this.$emit('click', event)
      }
    },
    
    getIconText(icon) {
      const iconMap = {
        'search': '🔍',
        'edit': '✏️',
        'delete': '🗑️',
        'plus': '+',
        'minus': '-',
        'close': '×',
        'check': '✓'
      }
      return iconMap[icon] || icon
    },
    
    // 开始倒计时
    startCountdown() {
      this.isCounting = true
      this.countdown = this.countdownTime
      
      // 保存倒计时状态到本地存储
      this.saveCountdownState()
      
      this.timer = setInterval(() => {
        this.countdown--
        
        if (this.countdown <= 0) {
          this.stopCountdown()
        } else {
          // 更新本地存储的状态
          this.saveCountdownState()
        }
      }, 1000)
      
      this.$emit('countdown-start')
    },
    
    // 停止倒计时
    stopCountdown() {
      this.isCounting = false
      this.countdown = 0
      this.clearTimer()
      this.clearCountdownState()
      this.$emit('countdown-end')
    },
    
    // 清除定时器
    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    
    // 保存倒计时状态到本地存储
    saveCountdownState() {
      if (this.isCaptcha) {
        const state = {
          endTime: Date.now() + this.countdown * 1000,
          totalTime: this.countdownTime
        }
        uni.setStorageSync('el-button-captcha-state', JSON.stringify(state))
      }
    },
    
    // 恢复倒计时状态
    restoreCountdownState() {
      try {
        const stored = uni.getStorageSync('el-button-captcha-state')
        if (stored) {
          const state = JSON.parse(stored)
          const remainingTime = Math.ceil((state.endTime - Date.now()) / 1000)
          
          if (remainingTime > 0) {
            this.isCounting = true
            this.countdown = remainingTime
            
            this.timer = setInterval(() => {
              this.countdown--
              
              if (this.countdown <= 0) {
                this.stopCountdown()
              }
            }, 1000)
          } else {
            this.clearCountdownState()
          }
        }
      } catch (error) {
        console.error('恢复倒计时状态失败:', error)
        this.clearCountdownState()
      }
    },
    
    // 清除本地存储的倒计时状态
    clearCountdownState() {
      uni.removeStorageSync('el-button-captcha-state')
    },
    
    // 手动重置倒计时（外部调用）
    resetCountdown() {
      this.stopCountdown()
    },
    
    // 手动开始倒计时（外部调用）
    startManualCountdown() {
      if (!this.isCounting) {
        this.startCountdown()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 20rpx;
  height: 64rpx;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #FFFFFF;
  border: 2rpx solid #DCDFE6;
  border-radius: 8rpx;
  outline: none;
  font-size: 28rpx;
  color: #606266;
  transition: all 0.1s;
  
  /* 禁用状态 */
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  /* 倒计时状态 */
  &.is-counting {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  /* 尺寸 */
  &--medium {
    height: 64rpx;
    padding: 0 20rpx;
    font-size: 28rpx;
  }
  
  &--small {
    height: 56rpx;
    padding: 0 16rpx;
    font-size: 26rpx;
  }
  
  &--mini {
    height: 48rpx;
    padding: 0 12rpx;
    font-size: 24rpx;
  }
  
  /* 圆角 */
  &.is-round {
    border-radius: 32rpx;
  }
  
  /* 圆形 */
  &.is-circle {
    border-radius: 50%;
    width: 64rpx;
    height: 64rpx;
    padding: 0;
    
    &.el-button--small {
      width: 56rpx;
      height: 56rpx;
    }
    
    &.el-button--mini {
      width: 48rpx;
      height: 48rpx;
    }
  }
  
  /* 按钮类型 */
  &--default {
    color: #606266;
    background: #FFFFFF;
    border-color: #DCDFE6;
    
    &.is-plain {
      color: #606266;
      background: #FFFFFF;
      border-color: #DCDFE6;
    }
    
    &.is-counting {
      color: #999;
      background: #f5f5f5;
      border-color: #ddd;
    }
    
    &:active:not([disabled]):not(.is-counting) {
      background: #F5F7FA;
      border-color: #C0C4CC;
    }
  }
  
  &--primary {
    color: #FFFFFF;
    background: #409EFF;
    border-color: #409EFF;
    
    &.is-plain {
      color: #409EFF;
      background: #ECF5FF;
      border-color: #B3D8FF;
    }
    
    &.is-counting {
      color: #fff;
      background: #a0cfff;
      border-color: #a0cfff;
    }
    
    &:active:not([disabled]):not(.is-counting) {
      background: #3A8EE6;
      border-color: #3A8EE6;
    }
  }
  
  /* 其他按钮类型样式保持不变，只需添加 .is-counting 状态 */
  &--success,
  &--warning,
  &--danger,
  &--info {
    &.is-counting {
      opacity: 0.7;
    }
  }
  
  /* 图标和文本 */
  &__icon {
    margin-right: 8rpx;
    font-size: inherit;
  }
  
  &__text {
    font-size: inherit;
  }
  
  &__loading {
    margin-right: 8rpx;
    animation: rotating 2s linear infinite;
  }
}

/* 加载动画 */
@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>