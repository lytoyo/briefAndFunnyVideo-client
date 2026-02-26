import MyGrid from './my-grid.vue'

// 为 Vue 2 注册组件
MyGrid.install = function(Vue) {
  Vue.component(MyGrid.name, MyGrid)
}

export default MyGrid