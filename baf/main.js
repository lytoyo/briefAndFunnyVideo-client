import App from './App'
import Vue from 'vue'
import './uni.promisify.adaptor'
import store from './store'
import i18n from './i18n/index.js'
import GlobalStatusBar from '@/components/global-status-bar/global-status-bar.vue'
import BASE_URL from '@/config/index.js'
Vue.component('global-status-bar', GlobalStatusBar)
Vue.config.productionTip = false


// uni-app 特定的配置
App.mpType = 'app'

const app = new Vue({
	i18n,
  store,
  BASE_URL,
  ...App
})

app.$mount()