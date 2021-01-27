import axios from "axios";
import store from "../store/index";

const proxy = "https://cors-anywhere.herokuapp.com/";
const EVENTFUL_API_KEY = process.env.VUE_APP_EVENTFUL_KEY;
const API_URL = `${proxy}http://api.eventful.com/json/events/search?app_key=${EVENTFUL_API_KEY}`;

function getEvents(searchParams) {
	let { location, date, within, pageNumber } = searchParams;

	if (date == null || date == "") {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, "0");
		var mm = String(today.getMonth() + 1).padStart(2, "0");
		var yyyy = today.getFullYear();

		date = mm + "/" + dd + "/" + yyyy;
	}

	if (within == null || within == "") {
		within = 25;
	}

	return axios.get(
		`${API_URL}&location=${location}&within=${within}&sort_order=relevance&sort_direction=ascending&page_number=${pageNumber}&page_size=25&date=${date}`
	);
}

function loadMoreEvents() {
	let { location, date, within, pageNumber } = store.state.searchParams;

	pageNumber++;

	store.commit("setSearchParams", { location, date, within, pageNumber });

	return axios.get(
		`${API_URL}&location=${location}&within=${within}&sort_order=relevance&sort_direction=ascending&page_number=${pageNumber}&page_size=25&date=${date}`
	);
}

export default {
	getEvents,
	loadMoreEvents,
};
