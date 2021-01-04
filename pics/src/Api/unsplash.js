import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID TAzrd2cOEjtdUpYdvDTdiXgbUidwcejwpLP5npr9fPI'
    }
});