<template>
  <div id="app">
    <Search />
    <GoogleMaps />
  </div>
</template>

<script>
import Search from './components/Search.vue'
import GoogleMaps from './components/GoogleMaps.vue'

export default {
  name: 'app',
  components: {
    Search,
    GoogleMaps
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas: 
    "Search"
    "GoogleMaps";
}
</style>
