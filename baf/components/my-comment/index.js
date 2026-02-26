import MyComment from './my-comment.vue'

// 为 Vue 2 注册组件
MyComment.install = function(Vue) {
  Vue.component(MyComment.name, MyComment)
}

export default MyComment