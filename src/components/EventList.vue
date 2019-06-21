<template>
    <div id="event-list">
        <h3 id="no-results" v-if="!this.loading && this.eventList == null">No results...</h3>
        <!-- <div v-if="this.loading" class="loader"></div> -->
        <div class="loader" v-if="this.loading">
            <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
            </svg>
        </div>
        <ul v-if="!this.loading">
            <li @click="setMarkerIndex(index)" v-for="(event, index) in eventList" :item="event" :key="index">
                <h4>{{event.title}}</h4>
                <p><i class="fas fa-map-marker-alt"></i> {{event.venue_address}}, {{event.city_name}}, {{event.region_abbr}}</p>
                <p><i class="fas fa-calendar-day"></i> {{event.start_time | formatDate(event.start_time)}}</p>
                <p><i class="fas fa-clock"></i> {{event.start_time | formatTime(event.start_time)}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        events: Array,
        isLoading: Boolean
    },
    data() {
        return {
            eventList: null,
            loading: null,
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
            console.log("hits events() in EventList.vue")
            this.eventList = this.events;
            this.$emit("loading", this.loading = false);
        },
        isLoading() {
            console.log("hits isLoading() in EventList.vue")
            this.loading = this.isLoading;
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
    display: flex;
    background-color: white;

    #no-results {
        align-self: center;
        margin: auto;
    }

    li {
        background-color: white;
        color: black;
        border-bottom: 1px solid gainsboro;
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
            background-color: rgba(81, 208, 222, .5);
            color: black;
        }
    }

    /* .loader,
    .loader:before,
    .loader:after {
        align-self: center;
        justify-self: center;
        background: $primaryOne;
        -webkit-animation: load1 1s infinite ease-in-out;
        animation: load1 1s infinite ease-in-out;
        width: 1em;
        height: 4em;
    }
    .loader {
        color: $primaryOne;
        text-indent: -9999em;
        margin: 88px auto;
        position: relative;
        font-size: 11px;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }
    .loader:before,
    .loader:after {
        position: absolute;
        top: 0;
        content: '';
    }
    .loader:before {
        left: -1.5em;
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }
    .loader:after {
        left: 1.5em;
    }
    @-webkit-keyframes load1 {
        0%,
        80%,
        100% {
            box-shadow: 0 0;
            height: 4em;
        }
        40% {
            box-shadow: 0 -2em;
            height: 5em;
        }
    }
    @keyframes load1 {
        0%,
        80%,
        100% {
            box-shadow: 0 0;
            height: 4em;
        }
        40% {
            box-shadow: 0 -2em;
            height: 5em;
        }
    } */

    $width: 100px;

    .loader {
        position: relative;
        align-self: center;
        justify-self: center;
        margin: 0 auto;
        width: $width;
        &:before {
            content: '';
            display: block;
            padding-top: 100%;
        }
    }

    .circular {
        animation: rotate 2s linear infinite;
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

    .path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }

    @keyframes color {
        100%,
        0% {
            stroke: $primaryOne;
        }
        40% {
            stroke: $primaryOne;
        }
        66% {
            stroke: $primaryOne;
        }
        80%,
        90% {
            stroke: $primaryOne;
        }
    }
}
</style>