import api_keys from './api_keys'
import axios from "axios";

const proxy = 'https://cors-anywhere.herokuapp.com/';
const EVENTFUL_API_KEY = api_keys.eventful_api_key;
const API_URL = `${proxy}http://api.eventful.com/json/events/search?app_key=${EVENTFUL_API_KEY}`;

function getEvents(location) {
    return axios.get(`${API_URL}&location=${location}`);
}

export default {
    getEvents
}