<template>
    <div id="event-list">
        <li @click="setMarkerIndex(index)" v-for="(event, index) in eventList" :item="event" :key="index">
            <h3>{{event.title}}</h3>
        </li>
    </div>
</template>

<script>
export default {
    props: {
        events: Array
    },
    data() {
        return {
            eventList: null
        }
    },
    methods: {
        setMarkerIndex(index) {
            //send index to App.vue then to GoogleMaps component
            this.$emit("markerIndex", index);
        }
    },
    watch: {
        events() {
            this.eventList = this.events;
        }
    }
}
</script>

<style lang="scss" scoped>
#event-list {
    li {
        background-color: white;
        color: black;
        border-bottom: 1px solid #F5ECEC;
        list-style: none;
        padding: 5px;

        &:hover {
            cursor: pointer;
            background-color: #F8F4F4;
            color: black;
        }
    }
}
</style>
