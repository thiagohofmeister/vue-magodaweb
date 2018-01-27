<template>
  <div>
    Home
  </div>
</template>

<script>
export default {
  created: function () {
    this.$on('updateHead', function () {
      self.title = 'My async title'
    })
  }
}
</script>
