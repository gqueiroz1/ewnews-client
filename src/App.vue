<template>
  <div id="app">
    <ew-header />
    <router-view/>
  </div>
</template>

<script>
import EWHeader from './components/EWHeader.vue'

export default {
  components: { 'ew-header': EWHeader }
}
</script>

<style>
#app {
  /* font-family: Poppins, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
