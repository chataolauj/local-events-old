<template>
    <div id="search-bar">
        <input v-model="location" type="text" placeholder="Location" @keyup.enter="getLocation">
        <button @click="getLocation">Search</button>
    </div>
</template>

<script>
//import api from '../lib/API.js'

export default {
    name: "Search",
    data() {
        return {
            location: null
        }
    },
    methods: {
        getLocation() {
            this.$emit("location", this.location);
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