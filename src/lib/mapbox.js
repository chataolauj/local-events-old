import geocoding from "@mapbox/mapbox-sdk/services/geocoding";

const geoService = geocoding({
	accessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN,
});

export function fwdGeo(location) {
	return new Promise((resolve, reject) => {
		geoService
			.forwardGeocode({
				query: location,
				limit: 5,
				types: [
					"place",
					"region",
					"postcode",
					"country",
					"address",
					"locality",
					"district",
				],
			})
			.send()
			.then(
				(res) => {
					resolve(res);
				},
				(err) => {
					reject(err);
				}
			);
	});
}

export default {
	fwdGeo,
};
