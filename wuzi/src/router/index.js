import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'Login',
      // 懒加载 AMD 的 require 随用随载
      component: resolve => require(['../pages/login/login'], resolve)
    }
  ]
})
