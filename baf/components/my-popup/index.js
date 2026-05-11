import MyPopup from './my-popup'

// 为 Vue 2 注册组件
MyPopup.install = function(Vue) {
  Vue.component(MyPopup.name, MyPopup)
} 

export default MyPopup