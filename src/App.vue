<template>
  <div id="app">
    <Search id="search-bar" @search_parameters="getEvents"/>
    <div id="content">
      <EventList id="event-list" 
      @loading="isLoading" 
      @markerIndex="getMarkerIndex" 
      :isLoading="this.loading" 
      :isEventNull="this.isEventNull"
      :events="events"/>
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
      loading: null,
      events: null,
      isEventNull: null,
      markerIndex: null,
    }
  },
  methods: {
    getEvents(search_parameters) {
      this.loading = true;
      
      api.getEvents(search_parameters).then(result => {
          try {
            console.log(result.data)
            this.events = result.data.events.event;
            this.isEventNull = false;
          }
          catch(error) {
            console.log(error)
            this.loading = false;
            this.isEventNull = true;
          }
      })
    },
    getMarkerIndex(markerIndex) {
      this.markerIndex = markerIndex;
    },
    isLoading(loading) {
      this.loading = loading;
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
  height: 7vh;
}

#event-list {
  grid-area: "list";
  height: 93vh;
}

#google-map {
  grid-area: "map";
  height: 93vh;
}
</style>
