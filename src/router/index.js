import Vue from 'vue'
import Router from 'vue-router'
//@代表src目录下的文件
import home from '@/View/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
