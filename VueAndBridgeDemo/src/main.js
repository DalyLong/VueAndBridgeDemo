// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//引入桥接文件
import Bridge from './config/bridge'
Vue.prototype.$bridge = Bridge

// 自定义组件
import list from '@/components/list'

//vux的相关组件
import  { LoadingPlugin,ToastPlugin } from 'vux'
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)

// 网络请求框架
import axios from 'axios'

//引入jQuery
import $ from 'jquery'
window.jQuery = $
window.$ = $

Vue.prototype.$http = axios     // 这样设置就可以在组件内用 this.$http 使用axios了
axios.defaults.baseURL = '' //初始化基础地址

Vue.config.productionTip = false

//声明组件
Vue.component('my-list', list)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
