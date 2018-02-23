// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
// import Icon from 'vue-awesome/icons'

Vue.config.productionTip = false

// Vue.component(Icon)

require('./styles/custom-bootstrap.scss')
require('../node_modules/bootstrap/scss/bootstrap.scss')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
