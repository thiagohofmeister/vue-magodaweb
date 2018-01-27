<template>
  <div v-if="loading" class="loader">
    <clip-loader :loading="loading" :color="color" :size="size" v-bind:style="loaderStyle"></clip-loader>
  </div>
</template>

<script>
import { PulseLoader, ClipLoader } from 'vue-spinner/dist/vue-spinner.min.js'

export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: '40px'
    },
    color: {
      type: String,
      default: '#05ea19'
    }
  },
  data () {
    return {
      loaderStyle: {
        height: this.size
      }
    }
  },
  components: {
    PulseLoader,
    ClipLoader
  }
}
</script>

<style scoped>
  .v-spinner {
    position: absolute;
    width: 100%;
    margin: auto;
    text-align: center;
    top: 0;
    bottom: 0;
  }

  div.loader {
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(250, 250, 250, 0.8);
    z-index: 1;
  }
</style>
