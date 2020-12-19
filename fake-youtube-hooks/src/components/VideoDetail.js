import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>;
    }

    const videoSrc = 'https://www.youtube.com/embed/' + video.id.videoId;

    return(
        <figure className= "figure">
            <iframe title= 'video player'src={videoSrc}></iframe>
            <figcaption>
                <h6>{video.snippet.title}</h6>
                <div>{video.snippet.description}</div>
            </figcaption>
        </figure>  
    );
}

export default VideoDetail;

/*<figure class="figure">
  <img src="..." class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>*/