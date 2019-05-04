import axios from "axios";

const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = 'N8GSsKvrnSqtbkGg';
const location = 'Kannapolis';
const API_URL = `${proxy}http://api.eventful.com/json/events/search?app_key=${API_KEY}&location=${location}`;

function getEvents() {
    return axios.get(API_URL);
}

export default {
    getEvents
}