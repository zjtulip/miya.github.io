import Vue from 'vue'
import Router from 'vue-router'

import auth from './routes/auth'
import apps from './routes/apps'
import others from './routes/others'

Vue.use(Router)

let routes = [
  ...auth,
  ...apps,
  ...others
]

const router = new Router({
  mode: 'history',
  routes: routes
})

export default router
