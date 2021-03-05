<template>
	<div id="mapbox"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default {
	name: "Mapbox",
	data() {
		return {
			accessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN,
			map: null,
		};
	},
	mounted() {
		mapboxgl.accessToken = this.accessToken;

		this.map = new mapboxgl.Map({
			container: "mapbox",
			style: "mapbox://styles/mapbox/streets-v11",
			center: [-100.88415824784241, 39.860819332920386],
			zoom: 3,
		});
	},
};
</script>

<style lang="scss" scoped></style>
