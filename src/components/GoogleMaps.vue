<template>
    <div id="google-map">
        
    </div>
</template>

<script>
import gMaps from '../lib/gMaps.js'
//import OMS from '../lib/oms.js'

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
            try {
                const google = await gMaps();

                //OverlappingMarkerSpiderfier not defined might cause future problems
                // eslint-disable-next-line
                var oms = new OverlappingMarkerSpiderfier(this.map, {
                    markersWontMove: true,
                    markersWontHide: true,
                    basicFormatEvents: true
                });

                if(this.locations !== null) {
                    for(let i = 0; i < this.locations.length; i++) {
                        this.locations[i].setMap(null);
                    }

                    this.locations = [];
                }

                let bounds = new google.maps.LatLngBounds();
                let infoWindow = new google.maps.InfoWindow();

                this.locations = this.events.map(event => {
                    let marker = new google.maps.Marker({
                        position: {
                            lat: parseInt(event.latitude, 10),
                            lng: parseInt(event.longitude, 10)
                        },
                        title: event.title
                    });

                    google.maps.event.addListener(marker, 'spider_click', function() {
                        infoWindow.setContent(event.description || "No description available.");
                        infoWindow.open(this.map, marker);
                    });

                    bounds.extend(marker.position);

                    oms.addMarker(marker);

                    return marker;
                })

                this.map.fitBounds(bounds);
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