// i18n/index.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCN from '@/locales/zh-CN.js'
import enUS from '@/locales/en-US.js'

// 使用 VueI18n
Vue.use(VueI18n)

// 获取系统语言
function getSystemLanguage() {
  let systemLang = 'zh-CN'
  
  // #ifdef APP-PLUS
  systemLang = plus.os.language || 'zh-CN'
  // #endif
  
  // #ifdef H5
  systemLang = navigator.language || 'zh-CN'
  // #endif
  
  // #ifdef MP-WEIXIN
  systemLang = wx.getSystemInfoSync().language || 'zh-CN'
  // #endif
  
  return systemLang.startsWith('zh') ? 'zh-CN' : 'en-US'
}

// 创建 i18n 实例
const i18n = new VueI18n({
  locale: uni.getStorageSync('userLanguage') || getSystemLanguage(),
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  },
  silentTranslationWarn: true
})

export default i18n