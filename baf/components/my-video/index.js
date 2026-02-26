import MyVideo from './my-video.vue'

// 为 Vue 2 注册组件
MyVideo.install = function(Vue) {
  Vue.component(MyVideo.name, MyVideo)
}

export default MyVideo