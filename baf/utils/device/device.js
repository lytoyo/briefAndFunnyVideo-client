let deviceInfo = null

export function getDeviceInfo() {
  if (deviceInfo) return deviceInfo
  
  const info = uni.getSystemInfoSync()
  const { windowWidth, windowHeight, screenWidth, screenHeight, statusBarHeight, platform } = info
  
  // 计算 rpx 转换比例
  const rpxRatio = 750 / windowWidth
  
  deviceInfo = {
    // 屏幕尺寸
    windowWidth,
    windowHeight,
    screenWidth, 
    screenHeight,
    
    // 状态栏高度
    statusBarHeight,
    
    // 平台
    platform,
    
    // 计算比例
    rpxRatio,
    
    // 常用计算函数
    rpxToPx(rpx) {
      return Math.floor(rpx / rpxRatio)
    },
    
    pxToRpx(px) {
      return Math.floor(px * rpxRatio)
    },
    
    // 百分比计算
    percentToPx(percent, base = windowWidth) {
      return Math.floor(base * percent / 100)
    },
    
    // 适配不同屏幕
    adaptivePx(designPx, designWidth = 750) {
      return Math.floor(designPx * windowWidth / designWidth)
    }
  }
  
  return deviceInfo
}