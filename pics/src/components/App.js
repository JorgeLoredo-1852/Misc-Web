import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{

    async whenSubmitted(term){
        const response = await axios.get('https://api.unsplash.com/search/photos',
        {
            params:{
                query:term
            },
            headers:{
                Authorization: 'Client-ID TAzrd2cOEjtdUpYdvDTdiXgbUidwcejwpLP5npr9fPI'
            }
        }
        )

        console.log(response.data.results);
    }

    render(){
        return(
            <div className = 'container-fluid' style = {{marginTop: '20px'}}>
                <div className = 'row'>
                    <div className = "col"></div>
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