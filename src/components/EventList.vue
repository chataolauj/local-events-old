<template>
    <div id="event-list">
        <li @click="setMarkerIndex(index)" v-for="(event, index) in eventList" :item="event" :key="index">
            <h4>{{event.title}}</h4>
            <p><i class="fas fa-map-marker-alt"></i> {{event.venue_address}}, {{event.city_name}}, {{event.region_abbr}}</p>
            <p><i class="fas fa-calendar-day"></i> {{event.start_time | formatDate(event.start_time)}}</p>
            <p><i class="fas fa-clock"></i> {{event.start_time | formatTime(event.start_time)}}</p>
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
    filters: {
        formatDate(eventDate) {
            let date = new Date(eventDate);
            return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
        },
        formatTime(eventDate) {
            let date = new Date(eventDate);
            return date.getUTCHours;
        }
    },
    watch: {
        events() {
            console.log(this.events)
            this.eventList = this.events;
        }
    }
}
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css");

$primaryOne: #FF3B3F;
$primaryTwo: #51d0de;
$primaryThree: #e1e8f0;

#event-list {
    overflow: auto;
    background-color: white;

    li {
        background-color: white;
        color: black;
        border-bottom: 1px solid $primaryThree;
        list-style: none;
        padding: 5px 15px 5px 15px;

        h4 {
            padding-top: 5px;
            margin-bottom: 20px;
        }

        p {
            padding-bottom: 5px;

            i {
                padding-right: 5px;
            }
        }

        &:hover {
            cursor: pointer;
            background-color: #F8F4F4;
            color: black;
        }
    }
}
</style>