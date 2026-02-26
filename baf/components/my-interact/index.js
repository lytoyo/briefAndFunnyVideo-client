// components/el-button/index.js
import MyInteract from './my-interact.vue'

// 为 Vue 2 注册组件
MyInteract.install = function(Vue) {
  Vue.component(MyInteract.name, MyInteract)
}

export default MyInteract