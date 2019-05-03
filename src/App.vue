<template>
  <div id="app">
    <GoogleMaps />
  </div>
</template>

<script>
import GoogleMaps from './components/GoogleMaps.vue'

export default {
  name: 'app',
  components: {
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
}
</style>
