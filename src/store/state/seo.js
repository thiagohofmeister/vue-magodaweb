import Api from '@/api'

export default {
  namespaced: true,
  state: {
    seo: {
      seoTitle: ''
    },
    fetching: false
  },
  actions: {
    async fetch ({ state, commit, getters }, { path }) {
      commit('fetching')
      const seo = await Api.getSeo(path)

      commit('setFetchData', {
        seo
      })
    }
  },
  getters: {
    getByPostSlug: state => slug => state.posts.find(post => post.slug === slug)
  },
  mutations: {
    setFetchData (state, { seo }) {
      state.seo = seo
      state.fetching = false
    },
    fetching (state) {
      state.fetching = true
    }
  }
}
