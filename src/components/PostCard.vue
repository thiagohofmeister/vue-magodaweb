<template>
  <div class="post-content">
    <img :src="getImage()" :alt="post.titulo">

    <h2>{{ post.titulo }}</h2>

    <p>{{ getShortDescription() }}</p>
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
      return this.post.conteudo.substr(0, 50)
    }
  }
}
</script>

<style lang="sass" scoped>
  .post-content
    border: 1px solid #333
    padding: 15px
    margin-bottom: 30px

  img
    width: 100%
    -max-height: 185px
</style>
