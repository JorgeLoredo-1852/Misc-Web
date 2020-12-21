import React from 'react';
import SongsList from './SongsList';
import SongDetail from './SongDetail';

const App = () =>{
    return (
    <div className= "container">
        <div className = "row" style = {{margin:"20px"}}>
            <div className = "col-6">
                <SongsList/>
            </div>
            <div className = "col-6">
                <SongDetail/>
            </div>
        </div>
    </div>);
};

export default App;