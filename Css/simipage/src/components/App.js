import React from 'react';
import './style.css';
import Header from './Header/Header';
import About from './About/About';
import { Feature } from './Feature/Feature';

const App = () =>{
    return(
        <React.Fragment>
            <Header/>
            <About/>
            <Feature/>
        </React.Fragment>
    );
};

export default App;