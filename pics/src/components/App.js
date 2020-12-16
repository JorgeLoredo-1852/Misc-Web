import React from 'react';
import unsplash from '../Api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component{
    state = {imagesList : []};
    whenSubmitted = async (term) => {
        const response = await unsplash.get('/search/photos',{params:{query:term}})
        this.setState({imagesList: response.data.results});
    }

    render(){
        return(
            <div className = 'container-fluid' style = {{marginTop: '20px'}}>
                <div className = 'row'>
                    <div className = "col">Found {this.state.imagesList.length} Images </div>
                    <SearchBar onSubmit = {this.whenSubmitted}/>
                     
                    <div className = "col"></div>
                </div>
            </div>
        );
    }
}

export default App;


//TAzrd2cOEjtdUpYdvDTdiXgbUidwcejwpLP5npr9fPI

//aDviXhQDcGJpX2rsZUAZoUgx_DI4o9yw0ikMJ1frzxQ