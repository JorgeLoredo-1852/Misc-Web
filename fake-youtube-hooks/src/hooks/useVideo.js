import React,{useState,useEffect} from 'react';
import youtube from '../api/YouTubeApi';

const useVideo = (defaultSearch) => {
    const [videos, setVideo] = useState([]);

    useEffect(()=>{
        onSearchTerm(defaultSearch);
    },[defaultSearch]);

    const onSearchTerm = async (term) => {
        const list = await youtube.get('/search',
            {params : {q : term}}
        );
        setVideo(list.data.items);
    }

    return [videos, onSearchTerm];
}

export default useVideo;