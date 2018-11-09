import Vue from 'vue'
import Router from 'vue-router'
// 懒加载路由页面资源（减少应用体积，加快首次加载速度）
const index = () => import('@/pages/index/index')

Vue.use(Router)

export default new Router({
  // mode: 'history',//该模式需要后端支持
  routes: [
    {
      path: '/index',
      component: index,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    // 注意：开启history模式，后端就无法返回404页面了，
    // 所以前端需要对所有情况做一个统一处理，这里可以写一个404页面或者像我一样返回主页
    // 优先级放在最下面
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
