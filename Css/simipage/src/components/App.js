import React from 'react';
import './style.css';
import Header from './Header/Header';
import About from './About/About';
import { Feature } from './Feature/Feature';
import { Tours } from './Tours/Tours';
import { Stories } from './Stories/Stories';

const App = () =>{
    return(
        <React.Fragment>
            <Header/>
            <About/>
            <Feature/>
            <Tours/>
            <Stories/>
        </React.Fragment>
    );
};

export default App;