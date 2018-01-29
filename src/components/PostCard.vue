<template>
  <div class="post-content">
    <router-link :to="post.url">
      <h2>{{ post.titulo }}</h2>

      <img :src="getImage()" :alt="post.titulo">

      <p v-html="getShortDescription()"></p>

      <span class="badge comment badge-info">
        <span class="badge badge-light">{{ post.comentarios.quantidade }}</span>
        {{ post.comentarios.quantidade === 1 ? 'comentário' : 'comentários' }}
      </span>
      <span class="post-date badge badge-secondary float-right">{{ post.dataPostagem }}</span>
    </router-link>
  </div>
</template>

<script>
import { isEmpty } from 'lodash'

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImage () {
      if (!isEmpty(this.post.seoOpenGraph)) {
        return this.post.seoOpenGraph
      }

      return this.post.imagem
    },
    getShortDescription () {
      return this.post.conteudo.plainText.split(' ').splice(0, 50).join(' ') + '...'
    }
  }
}
</script>

<style lang="sass" scoped>
  .post-content
    border: 1px solid #333
    padding: 15px
    margin-bottom: 30px

    a:hover
      text-decoration: none

    h2
      font-size: 20px
      color: #0a648c

    p
      color: #626262
      text-align: justify
      text-indent: 25px
      font-size: 14px

    img
      width: 100%
      margin-bottom: 10px

    .post-date
      font-size: 11px

    .comment
      font-size: 13px

      & > .badge
        vertical-align: middle
        font-size: 9px
</style>
