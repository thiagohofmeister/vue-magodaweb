import Vue from 'vue'
import Vuex from 'vuex'
import posts from './state/posts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    posts
  }
})
