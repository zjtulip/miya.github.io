// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'shared/api/http'

// 引人Element框架
import Element from 'element-ui'

// 引入全局样式
import 'shared/styles/base.styl'
import 'element-ui/lib/theme-chalk/index.css'

// 注册全局组件
import components from 'shared/components'
Vue.use(components)
Vue.use(Element)
Vue.prototype.axios = axios

// 屏蔽开发环境
if (process.env.NODE_ENV === 'production') {
  console.log = () => {}
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  components: { App },
  template: '<App/>'
})
