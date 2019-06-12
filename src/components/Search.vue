<template>
    <div id="search-bar">
        <input v-model="location" type="text" placeholder="Location" @keyup.enter="getLocation">
        <button @click="getLocation">Search</button>
    </div>
</template>

<script>

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
    background-color: #E8E5E5;
    display: flex;
    flex-direction: row;
    justify-content: center;

    input[type="text"] {
        width: 30%;
    }
}
</style>