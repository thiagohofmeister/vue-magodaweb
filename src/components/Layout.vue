<template>
  <div>
    <loader :loading="loading"></loader>
    <server-error v-if="hasError"></server-error>
    <template v-if="!loading && !hasError">
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
  import Loader from '@/components/Loader'

  export default {
    data: () => ({
      loading: true,
      hasError: false
    }),
    async mounted () {
      setTimeout(() => {
        this.loading = false
      }, 200)
    },
    components: {
      Loader
    }
  }
</script>

<style scoped>

</style>
