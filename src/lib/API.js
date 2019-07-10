import api_keys from './api_keys'
import axios from "axios";

const proxy = 'https://cors-anywhere.herokuapp.com/';
const EVENTFUL_API_KEY = process.env.eventful_api_key || api_keys.eventful_api_key;
const API_URL = `${proxy}http://api.eventful.com/json/events/search?app_key=${EVENTFUL_API_KEY}`;

function getEvents(search_parameters) {
    var location = search_parameters.location;
    var date = search_parameters.date;
    var within = search_parameters.within;

    if(date == null || date == '') {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        date = mm + '/' + dd + '/' + yyyy;
    }

    if(within == null || within == '') {
        within = 5;
    }

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