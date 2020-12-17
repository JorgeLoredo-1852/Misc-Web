import axios from 'axios';

const KEY = "AIzaSyCAjS27opO-mx4v6iFE5BoegTA6y_ExD8M";

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params : {
        part :'snippet',
        type : 'video',
        masResults : 5,
        key : KEY
    }
});