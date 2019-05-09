<template>
    <div id="google-map">
        
    </div>
</template>

<script>
import gMaps from '../lib/gMaps.js'

export default {
    name: 'GoogleMaps',
    props: {
        events: Array
    },
    data() {
        return {
            map: null,
            locations: []
        }
    },
    async mounted() {
        try {
            const google = await gMaps();
            const geocoder = new google.maps.Geocoder();
            this.map = new google.maps.Map(this.$el);

            geocoder.geocode({ address: 'USA'}, (results, status) => {
                if (status !== 'OK' || !results[0]) {
                    throw new Error(status);
                }

                this.map.setCenter(results[0].geometry.location);
                this.map.fitBounds(results[0].geometry.viewport);
            });
        } catch (error) {
            console.error(error);
        }
    },
    watch: {
        async events() {
            //console.log(this.events)
            try {
                const google =  await gMaps();

                this.locations = this.events.map(event => {
                    new google.maps.Marker({
                        position: {
                            lat: parseInt(event.latitude, 10),
                            lng: parseInt(event.longitude, 10)
                        },
                        map: this.map,
                        title: event.title
                    })
                })
            }
            catch(error) {
                console.error(error)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#google-map {
    width: auto;
    height: 100vh;
}
</style>