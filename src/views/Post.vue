<template>
  <div class="container-fluid">
    <header>
      <div class="row">
        <div class="col-10 offset-1 banner">
          <img :src="post.imagem" :alt="post.titulo">
        </div>
      </div>

      <div class="row">
        <div class="col-1 text-center">
          <img :src="post.autor.imagem" alt="" class="author-image">
        </div>
        <div class="col">
          <h1>{{ post.titulo }}</h1>

          <span class="author">Postado por <p class="author-name">{{ post.autor.nome }}</p></span>
          <span class="labels">
            <span class="badge comment badge-info">
              <span class="badge badge-light">{{ post.comentarios.quantidade }}</span>
              {{ post.comentarios.quantidade === 1 ? 'comentário' : 'comentários' }}
            </span>
            <span class="post-date badge badge-secondary">{{ post.dataPostagem }}</span>
          </span>
        </div>
      </div>
    </header>

    <div class="content container" v-html="post.conteudo.html">

    </div>
  </div>
</template>

<script>
import Api from '@/api'
import Loader from '@/components/Loader'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    loading: true,
    post: {}
  }),
  props: {
    category: {
      type: String,
      required: true
    },
    postSlug: {
      type: String,
      required: true
    }
  },
  async mounted () {

    this.post = this.getByPostSlug(this.postSlug)

    if (!this.post) {
      try {
        this.post = await Api.getPost(this.postSlug)
      } catch (err) {
        this.redirectToListPosts()
      }
    }

    console.log(this.post)
  },
  methods: {
    redirectToListPosts () {
      this.$router.push(`/`)
    }
  },
  computed: {
    ...mapGetters('posts', [
      'getByPostSlug'
    ])
  },
  components: {
    Loader
  }
}
</script>

<style lang="sass" scoped>
  header
    background: #e1e1e1
    padding: 15px
    border-bottom-left-radius: 7px
    border-bottom-right-radius: 7px

  h1
    color: #0a648c
    font-weight: bold
    font-size: 32px

  .banner
    margin-bottom: 15px

    img
      width: 100%

  .author-image
    width: 100px
    height: 100px
    border-radius: 100%

  .author
    font-size: 13px

  .author-name
    display: inline-block
    color: #e2534b
    font-weight: bold

  .labels
    display: block

  .post-date
    font-size: 11px

  .comment
    font-size: 13px

    & > .badge
      vertical-align: middle
      font-size: 9px

  .content
    margin-top: 20px
    margin-bottom: 20px
</style>
