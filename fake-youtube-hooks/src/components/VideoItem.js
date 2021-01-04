import React from 'react';
import './VideoItem.css';

const VideoItem = (props) =>{
    return(
        <a href="#" onClick={() => props.onVideoSelect(props.video)} class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between video-item">
                <img alt = "" src = {props.video.snippet.thumbnails.medium.url} style={{maxWidth:'120px',maxHeight:'80px'}}/>
                <div id="titulo">{props.video.snippet.title}</div>
            </div>
        </a>
    );
}

export default VideoItem;
