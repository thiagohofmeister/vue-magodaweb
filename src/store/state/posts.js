import Api from '@/api'

export default {
  namespaced: true,
  state: {
    total: 0,
    posts: [],
    fetching: false,
    lastFetchOptions: null
  },
  actions: {
    async fetch ({ state, commit, getters }, { options }) {
      commit('fetching')
      const { total, posts } = await Api.getPostsList(options)

      commit('setFetchData', {
        posts, total, options
      })
    }
  },
  getters: {
    getByPostSlug: state => slug => state.posts.find(post => post.slug === slug),
    getByCategorySlug: state => slug => state.posts.find(post => post.category.slug === slug)
  },
  mutations: {
    setFetchData (state, { posts, total, options }) {
      state.total = total
      state.posts = posts
      state.lastFetchOptions = {...options}
      state.fetching = false
    },
    fetching (state) {
      state.fetching = true
    }
  }
}
