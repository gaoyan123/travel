// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端三百毫秒点击延迟插件
import fastClick from 'fastclick'
import reset from 'styles/reset.css'
import iconfont from 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
