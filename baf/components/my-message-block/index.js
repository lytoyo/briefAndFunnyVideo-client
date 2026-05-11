import MyMessageBlock from './my-message-block.vue'

// 为 Vue 2 注册组件
MyMessageBlock.install = function(Vue) {
  Vue.component(MyMessageBlock.name, MyMessageBlock)
} 

export default MyMessageBlock