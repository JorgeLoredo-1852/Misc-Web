import React from 'react';
import './style.css';
import Header from './Header/Header';
import About from './About/About';

const App = () =>{
    return(
        <React.Fragment>
            <Header/>
            <About/>
        </React.Fragment>
    );
};

export default App;