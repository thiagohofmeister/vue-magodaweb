import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080/platform/api'
})

export default {
  async getPostsList (options) {
    return (await instance.get('/post?page=1&limit=5')).data
  }
}
