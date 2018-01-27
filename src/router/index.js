import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'

// pages
import routes from './routes'

Vue.use(Router)
Vue.use(VueHead)

export default new Router({
  routes,
  history: true
})
