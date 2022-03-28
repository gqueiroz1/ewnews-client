<template>
  <div id="app">
    <ew-header v-if="isLogged" @open-menu="openMenuDrawer"/>
    <menu-drawer :is-menu-open="isMenuOpen" @close-menu-drawer="closeMenuDrawer" />
    <router-view/>
  </div>
</template>

<script>
import EwHeader from './components/EwHeader.vue'
import MenuDrawer from './components/MenuDrawer.vue'

export default {
  components: {
    EwHeader,
    MenuDrawer
  },

  data () {
    return {
      isMenuOpen: false
    }
  },

  computed: {
    isLogged () {
      if (this.$route.name === null) return false

      return this.$route.name !== 'Login' && this.$route.name !== 'Register'
    }
  },

  methods: {
    openMenuDrawer () {
      this.isMenuOpen = true
    },

    closeMenuDrawer () {
      this.isMenuOpen = false
    }
  }
}
</script>

<style>
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
