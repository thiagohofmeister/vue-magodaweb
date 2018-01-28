import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'
import VueMasonry from 'vue-masonry-css'

// pages
import routes from './routes'

Vue.use(Router)
Vue.use(VueHead)
Vue.use(VueMasonry)

export default new Router({
  routes,
  history: true
})
