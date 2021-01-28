import geocoding from "@mapbox/mapbox-sdk/services/geocoding";

const geoService = geocoding({
	accessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN,
});

function forwardGeocode(location) {
	geoService
		.forwardGeocode({
			query: location,
		})
		.send()
		.then((res) => {
			console.log(res);
		});
}

export default {
	forwardGeocode,
};
