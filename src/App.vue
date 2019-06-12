<template>
  <div id="app">
    <Search id="search-bar" @location="getEvents"/>
    <div id="content">
      <EventList id="event-list" @markerIndex="getMarkerIndex" :events="events"/>
      <GoogleMaps id="google-map" :events="events" :markerIndex="markerIndex"/>
    </div>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import EventList from './components/EventList.vue'
import GoogleMaps from './components/GoogleMaps.vue'
import api from './lib/API.js'

export default {
  name: 'app',
  components: {
    Search,
    EventList,
    GoogleMaps
  },
  data() {
    return {
      events: null,
      markers: null,
      markerIndex: null
    }
  },
  methods: {
    getEvents(location) {
      api.getEvents(location).then(result => {
          try {
            this.events = result.data.events.event;
          }
          catch(error) {
            console.log(error)
          }
      })
    },
    getMarkerIndex(markerIndex) {
      this.markerIndex = markerIndex;
    }
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
  height: 95vh;
  grid-area: 'content';
  display: grid;
  grid-template-columns: 2.5fr 7.5fr;
  grid-template-areas: "list" "map";
}

#search-bar {
  grid-area: "search";
  width: 100vw;
  height: 5vh;
}

#event-list {
  grid-area: "list";
}

#google-map {
  grid-area: "map";
  height: 95vh;
}
</style>
