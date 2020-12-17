import React from 'react';
import VideoItem from './VideoItem';

const VideosList = (props) =>{
    const renderedList = props.videos.map( (video) =>{
        return <VideoItem key={video.id.videoId} onVideoSelect = {props.onVideoSelect} video = {video}/>
    });
    return (
    <div className="list-group col-5">
        {renderedList}
    </div>
    );
}

export default VideosList;