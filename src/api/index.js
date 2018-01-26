import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080/platform/api'
})

export default {
  async getPostsList () {
    return (await instance.get('/post?page=1&limit=1')).data
  }
}
