import React,{useState,useEffect} from 'react';
import SearchBar from './SearchBar';
import VideosList from './VideosList';
import VideoDetail from './VideoDetail';
import useVideo from '../hooks/useVideo'

const App = () =>{
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, onSearchTerm] = useVideo('Rapder');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    },[videos])
  
    return(
        <div>
            <div className = 'container'>
                <SearchBar onSearchTerm = {onSearchTerm}/>   
                <div className = 'row' style={{margin: '20px'}}>
                    <div className = 'col-7'>
                        <VideoDetail video = {selectedVideo}/>
                    </div>
                    <VideosList onVideoSelect = {(video) => setSelectedVideo(video)} videos = {videos}/>
                </div>
            </div>
        </div>
    );

}

export default App;