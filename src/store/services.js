import axios from 'axios';

export const services = {
    fetchEvents
}

function fetchEvents(key, timeString) {
    let link = `https://challenge.nfhsnetwork.com/v2/search/events/upcoming?state_association_key=${key}&amp;size=50&${timeString}`;
    return axios.get(link);
}