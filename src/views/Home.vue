<template>
  <div>
    <loader :loading="loading"/>

    <div class="container-fluid page-content">
      <masonry
        :cols="{default: 3, 1000: 3, 700: 2, 400: 1}"
        :gutter="{default: '30px', 700: '15px'}"
      >
        <post-card v-for="post in posts" :post="post" :key="post.slug"/>
      </masonry>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Loader from '@/components/Loader'
import PostCard from '@/components/PostCard'

export default {
  data: () => ({
    loading: false,
    options: {
      code: '',
      title: '',
      brand: ''
    }
  }),
  computed: {
    ...mapState('posts', [
      'total',
      'posts',
      'lastFetchOptions'
    ])
  },
  methods: {
    ...mapActions('posts', [
      'fetch'
    ]),
    async getPosts () {
      this.fetch({
        options: this.options
      })
    }
  },
  async mounted () {
    this.loading = true

    this.getPosts()

    this.loading = false
  },
  components: {
    Loader,
    PostCard
  }
}
</script>

<style>
  .row.make-columns {
    -moz-column-width: 19em !important;
    -webkit-column-width: 19em !important;
    -moz-column-gap: 1em !important;
    -webkit-column-gap:1em !important;
  }
  .row.make-columns > div {
    display: inline-block !important;
    padding:  .5rem !important;
    width:  100% !important;
  }
</style>
