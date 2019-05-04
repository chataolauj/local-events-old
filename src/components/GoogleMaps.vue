<template>
    <div id="google-map">
        
    </div>
</template>

<script>
import gMaps from '../lib/gMaps.js'

export default {
    name: 'GoogleMaps',
    async mounted() {
        try {
            const google = await gMaps();
            const geocoder = new google.maps.Geocoder();
            const map = new google.maps.Map(this.$el);

            geocoder.geocode({ address: 'USA'}, (results, status) => {
            if (status !== 'OK' || !results[0]) {
                throw new Error(status);
            }

            map.setCenter(results[0].geometry.location);
            map.fitBounds(results[0].geometry.viewport);
            });
        } catch (error) {
            console.error(error);
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