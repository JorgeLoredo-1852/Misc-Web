import React from 'react';
import SearchBar from './SearchBar';

const App = () => {
    return(
        <div className = 'container-fluid' style = {{marginTop: '20px'}}>
            <div className = 'row'>
                <div className = "col"></div>
                <SearchBar/>
                <div className = "col"></div>
            </div>
        </div>
    );
}

export default App;