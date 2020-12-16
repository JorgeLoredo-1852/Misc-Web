import React from 'react';
import unsplash from '../Api/unsplash';
import ImagesList from './ImagesList';
import SearchBar from './SearchBar';

class App extends React.Component{
    state = {imagesList : []};
    whenSubmitted = async (term) => {
        const response = await unsplash.get('/search/photos',{params:{query:term}})
        this.setState({imagesList: response.data.results});
        console.log(this.state);
    }

    render(){
        return(
            <div className = 'container-fluid' style = {{marginTop: '20px'}}>
                <div className = 'row'>
                    <div className = "col">Found {this.state.imagesList.length} Images </div>
                    <SearchBar onSubmit = {this.whenSubmitted}/>
                    <div className = "col"></div>
                </div>
                <ImagesList images = {this.state.imagesList}/>
            </div>
        );
    }
}

export default App;


//TAzrd2cOEjtdUpYdvDTdiXgbUidwcejwpLP5npr9fPI

//aDviXhQDcGJpX2rsZUAZoUgx_DI4o9yw0ikMJ1frzxQ