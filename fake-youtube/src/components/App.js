import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/YouTubeApi';
import VideosList from './VideosList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    state = {videos : [], selectedVideo : null};

    componentDidMount(){
        this.onSearchTerm('Rapder');
    }

    onSearchTerm = async (term) => {
        const list = await youtube.get('/search',
            {params : {q : term}}
        );
        this.setState({videos : list.data.items, selectedVideo:list.data.items[0]});
    } 
    
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render(){
        return(
            <div>
                <div className = 'container'>
                    <SearchBar onSearchTerm = {this.onSearchTerm}/>   
                    <div className = 'row' style={{margin: '20px'}}>
                        <div className = 'col-7'>
                            <VideoDetail video = {this.state.selectedVideo}/>
                        </div>
                        <VideosList onVideoSelect = {this.onVideoSelect} videos = {this.state.videos}/>
                    </div>
                </div>
            </div>
        );
    }

}


export default App;