<template>
	<div id="google-map"></div>
</template>

<script>
import gMaps from "../lib/gMaps.js";

export default {
	name: "GoogleMaps",
	/* props: {
		events: Array,
		markerIndex: Number,
	}, */
	data() {
		return {
			google: null,
			map: null,
			locations: [],
			infoWindow: null,
		};
	},
	async mounted() {
		try {
			this.google = await gMaps();
			const geocoder = new this.google.maps.Geocoder();
			this.map = new this.google.maps.Map(this.$el, {
				zoom: 20,
			});

			geocoder.geocode({ address: "USA" }, (results, status) => {
				if (status !== "OK" || !results[0]) {
					throw new Error(status);
				}

				this.map.setCenter(results[0].geometry.location);
				this.map.fitBounds(results[0].geometry.viewport);
			});
		} catch (error) {
			console.error(error);
		}
	},
	computed: {
		events() {
			return this.$store.state.events;
		},
		markerIndex() {
			return this.$store.state.markerIndex;
		},
	},
	watch: {
		events() {
			this.infoWindow = new this.google.maps.InfoWindow();

			//OverlappingMarkerSpiderfier not defined might cause future problems
			// eslint-disable-next-line
			var oms = new OverlappingMarkerSpiderfier(this.map, {
				markersWontMove: true,
				markersWontHide: true,
				basicFormatEvents: true,
			});

			if (this.locations !== null) {
				for (let i = 0; i < this.locations.length; i++) {
					this.locations[i].setMap(null); //removes markers from previous search
				}

				this.locations = []; //emptys array that contained previous search
			}

			let bounds = new this.google.maps.LatLngBounds();
			let infoWindow = new this.google.maps.InfoWindow();

			this.locations = this.events.map((event) => {
				let marker = new this.google.maps.Marker({
					position: {
						lat: parseFloat(event.latitude),
						lng: parseFloat(event.longitude),
					},
					title: event.title,
				});

				marker.addListener("spider_click", function() {
					infoWindow.setContent(
						event.description || "No description."
					);
					infoWindow.open(this.map, marker);
				});

				bounds.extend(marker.position);

				oms.addMarker(marker);

				return marker;
			});

			this.map.fitBounds(bounds);
		},
		markerIndex() {
			this.$store.commit("setActiveItem", this.markerIndex);

			let clicked_marker = this.locations[this.markerIndex];

			this.google.maps.event.trigger(clicked_marker, "spider_click");
		},
	},
};
</script>

<style lang="scss" scoped></style>
