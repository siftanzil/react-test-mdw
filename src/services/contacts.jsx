import axios from "axios";

const getAll = () => {
    const request = axios.get( "https://contact.mediusware.com/api/contacts/?page=1&page_size=200", {
        headers: {
            'X-CSRFToken': "TXIkWnpAVu8Yzz13WWm4gKPMNJjyStDXp8fkmYXzCrXJ57BVSWnEmapRTady8S1s"
        }
    } );
    return request.then( ( response ) => response.data );
};

export default { getAll };
