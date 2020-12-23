import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const pageOne = () =>{
    return (
    <div>
        PageOne
        <Link to="/page2">Page 2</Link>
    </div>);
};

const pageTwo = () =>{
    return (
    <div>
        pageTwo
        <Link to="/">Page1</Link>
    </div>);
};

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={pageOne}/>
                    <Route path="/page2" exact component={pageTwo}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;