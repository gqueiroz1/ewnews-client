<template>
  <div id="app">
    <ew-header @open-menu="openMenuDrawer"/>
    <menu-drawer :is-menu-open="isMenuOpen" @close-menu-drawer="closeMenuDrawer" />
    <router-view class="app-view"/>
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
  text-align: center;
  color: #2c3e50;
}

.app-view {
  margin-top: var(--header-height);
  padding: var(--spacing-md);
}
</style>
