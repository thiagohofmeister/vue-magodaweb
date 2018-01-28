<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted () {
    this.getAsyncData()
  },
  methods: {
    getAsyncData: function () {
      var self = this
      window.setTimeout(function () {
        self.title = 'My async title'
        self.$emit('updateHead')
      }, 3000)
    }
  }
}
</script>

<style lang="sass">
  .page-content
    margin-top: 15px
</style>
