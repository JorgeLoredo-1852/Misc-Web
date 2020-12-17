import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/YouTubeApi';
import VideosList from './VideosList';

class App extends React.Component{

    state = {videos : [], selectedVideo : null};

    onSearchTerm = async (term) => {
        const list = await youtube.get('/search',
            {params : {q : term}}
        );
        this.setState({videos : list.data.items});
    } 
    
    onVideoSelect = (video) => {
        console.log(video);
    }

    render(){
        return(
            <div>
                <div className = 'container'>
                    <SearchBar onSearchTerm = {this.onSearchTerm}/>   
                    <div className = 'row' style={{margin: '20px'}}>
                        <div className = 'col-7'></div>
                        <VideosList onVideoSelect = {this.onVideoSelect} videos = {this.state.videos}/>
                    </div>
                </div>

            </div>
        );
    }

}


export default App;