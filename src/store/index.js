import Vue from 'vue'
import Vuex from 'vuex'
import posts from './state/posts'
import seo from './state/seo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    posts,
    seo
  }
})
