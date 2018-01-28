<template>
  <div class="form-group" v-bind:class="colClass">
    <label class="form-label">{{ label }}</label>
    <div class="form-control">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    colClass () {
      return `l-col-${this.columns}@md`
    }
  },
  props: {
    columns: {
      type: Number,
      default: 3
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>
