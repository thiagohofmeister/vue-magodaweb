import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080/platform/api'
})

export default {
  async getPostsList (options) {
    return (await instance.get('/post?page=1&limit=6')).data
  },
  async getPost (postSlug) {
    return (await instance.get(`/post/${postSlug}`)).data.posts[0]
  },
  async getPosts (categorySlug) {
    return (await instance.get(`/post/${categorySlug}`)).data.posts
  },
  async getSeo (path) {
    return (await instance.get(`/seo/${path}`)).data
  }
}
