import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/YouTubeApi';
import VideosList from './VideosList';

class App extends React.Component{

    state = {videos : []};

    onSearchTerm = async (term) => {
        const list = await youtube.get('/search',
            {params : {q : term}}
        );
        this.setState({videos : list.data.items});
    } 
    
    render(){
        return(
            <div className = 'container'>
                <SearchBar onSearchTerm = {this.onSearchTerm}/>
                <VideosList videos = {this.state.videos}/>
            </div>
        );
    }

}


export default App;