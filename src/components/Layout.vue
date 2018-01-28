<template>
  <div>
    <loader :loading="loading"/>
    <server-error v-if="hasError"/>
    <template v-if="!loading && !hasError">
      <div class="header container-fluid">
        <div class="container">
          <div class="row">
            <div class="col">
              <router-link :to="{ name: 'home' }">
                <div class="logo"></div>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="menu col text-center">
            <router-link class="menu-item" v-for="menuItem in menu" :to="{ name: menuItem.name }" :key="menuItem.name">
              <div class="menu-item-label">{{ menuItem.label }}</div>
            </router-link>
          </div>
        </div>
      </div>

      <router-view/>
    </template>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import ServerError from '@/components/ServerError'

export default {

  data: () => ({
    loading: true,
    hasError: false,
    menu: [
      { name: 'mago', label: 'Mago' },
      { name: 'servicos', label: 'Serviços' },
      { name: 'blog', label: 'Blog' },
      { name: 'contato', label: 'Contato' }
    ]
  }),
  async mounted () {
    setTimeout(() => {
      this.loading = false
    }, 500)
  },
  components: {
    Loader,
    ServerError
  }
}
</script>

<style lang="sass">
  .header
    padding: 15px 0
    background: #b6b6b6

  .logo
    background: url("../assets/logotipo.png")
    width: 281px
    height: 102px
    margin: auto

  .menu
    text-align: right
    background: #2f2e2e
    padding: 5px 0

  .menu-item
    display: inline-block
    padding: 0 10px
    color: #fff

    &:hover
      color: #00aeff
      text-decoration: none

    &:last-child
      padding-right: 0

  .v-center
      display: flex
      align-items: center
</style>
