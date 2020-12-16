import React from 'react';

const ImagesList = (props) => {
    const imagess = props.images.map( (image) =>{
        return <img alt = {image.description} key = {image.id} src = {image.urls.regular}/>
    }
    );
    
    return <div>{imagess}</div>
}

export default ImagesList;