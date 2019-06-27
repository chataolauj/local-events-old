import api_keys from './api_keys'
import axios from "axios";

const proxy = 'https://cors-anywhere.herokuapp.com/';
const EVENTFUL_API_KEY = api_keys.eventful_api_key;
const API_URL = `${proxy}http://api.eventful.com/json/events/search?app_key=${EVENTFUL_API_KEY}`;

function getEvents(search_parameters) {
    console.log(search_parameters)
    var location = search_parameters.location;
    var date = search_parameters.date;
    var within = search_parameters.within;

    return axios.get(`${API_URL}
    &location=${location}
    &date=${date}
    &within=${within}
    &page_size=25
    &sort_order=date`);
}

export default {
    getEvents
}