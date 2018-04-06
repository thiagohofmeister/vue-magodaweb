<template>
  <div>
    <loader :loading="loading"/>
    <server-error v-if="hasError"/>
    <template v-if="!loading && !hasError">
      <header class="header container-fluid">
        <div class="container">
          <div class="row">
            <div class="col">
              <router-link :to="{ name: 'home' }">
                <div class="logo"></div>
              </router-link>
            </div>
          </div>
        </div>
      </header>

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

      <footer class="footer container-fluid">
        <div class="row">
          <div class="col-md-3 v-center">
            <p class="rights">© 2015 - 2018 O Mago da Web. Todos os direitos reservados.</p>
          </div>
          <div class="socials col-md-2 offset-7 v-center">
            <a :href="facebookUrl" class="icon fb v-center" target="_blank">
            </a>
            <a :href="twitterUrl" class="icon tt v-center" target="_blank">
            </a>
            <a :href="googlePlusUrl" class="icon gp v-center" target="_blank">
            </a>
          </div>
        </div>
      </footer>
    </template>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import ServerError from '@/components/ServerError'
import Icon from 'vue-awesome/components/Icon'
import seo from '@/api/seo'

const path = function () {
  let url = window.location.href

  let slug = ''
  if (url.indexOf('#') !== -1) {
    const [, first, second] = url.split('#')[1].split('/')

    slug += first
    if (second !== undefined) {
      slug += '/' + second
    }
  }

  if (slug === '') {
    slug = '/'
  }

  return seo[slug]
}

export default {
  data: () => ({
    loading: true,
    hasError: false,
    menu: [
      { name: 'mago', label: 'Mago' },
      { name: 'servicos', label: 'Serviços' },
      { name: 'blog', label: 'Blog' },
      { name: 'contato', label: 'Contato' }
    ],
    facebookUrl: '',
    twitterUrl: '',
    googlePlusUrl: ''
  }),
  async mounted () {
    setTimeout(() => {
      this.loading = false
    }, 500)
  },
  components: {
    Loader,
    ServerError,
    Icon
  },
  head: {
    title: {
      inner: path().title
    }
  }
}
</script>

<style lang="sass">
  .header
    padding: 15px
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

  .footer
    background: #2f2e2e
    padding: 15px

    .rights
      font-size: 11px
      color: #fff
      margin: 0

    .socials
      color: #fff

      .icon
        font-size: 20px
        color: #fff

        &:hover
          color: #b7b7b7

        &:not(:last-child)
          margin-right: 10px
</style>
