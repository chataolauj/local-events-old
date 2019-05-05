<template>
    <div id="search-bar">
        <input v-model="location" type="text" placeholder="Location">
        <button @click="getEvents">Search</button>
    </div>
</template>

<script>
import api from '../lib/API.js'

export default {
    name: "Search",
    data() {
        return {
            location: null,
            events: null
        }
    },
    methods: {
        getEvents() {
            api.getEvents(this.location).then(results => {
                console.log(results);
                this.events = results;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
#search-bar {
    width: 100vw;
    height: 5vh;
    background-color: gray;
    display: flex;
    flex-direction: row;
    //justify-content: space-evenly;

    input[type="text"] {
        width: 30%;
    }
}
</style>