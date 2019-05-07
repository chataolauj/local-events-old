<template>
    <div id="event-list">
        <li v-for="(event, index) in eventList" :item="event" :key="index">
            {{event.title}}
        </li>
    </div>
</template>

<script>
export default {
    name: 'EventList',
    props: {
        events: Array
    },
    data() {
        return {
            eventList: null
        }
    },
    watch: {
        events() {
            console.log(this.events);
            this.eventList = this.events;
        }
    }
}
</script>

<style lang="scss" scoped>
#event-list {
    
}
</style>
