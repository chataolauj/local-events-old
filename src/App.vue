<template>
  <div id="app">
    <Search id="search-bar"/>
    <div id="content">
      <EventList />
      <GoogleMaps id="google-map"/>
    </div>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import EventList from './components/EventList.vue'
import GoogleMaps from './components/GoogleMaps.vue'

export default {
  name: 'app',
  components: {
    Search,
    EventList,
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
    "search"
    "content";
}

#content {
  width: 100vw;
  height: 100vh;
  grid-area: 'content';
  display: grid;
  grid-template-columns: 25% auto;
  grid-template-areas: "list" "map";
}

#search-bar {
  grid-area: "search";
}

#event-list {
  grid-area: "list";
}

#google-map {
  grid-area: "map";
}
</style>
