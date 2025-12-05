// components/el-button/index.js
import MyButton from './my-button.vue'

// 为 Vue 2 注册组件
MyButton.install = function(Vue) {
  Vue.component(MyButton.name, MyButton)
}

export default MyButton