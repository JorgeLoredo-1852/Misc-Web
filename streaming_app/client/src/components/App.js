import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import StreamList from './streaming/StreamList';
import StreamEdit from './streaming/StreamEdit';
import StreamShow from './streaming/StreamShow';
import StreamCreate from './streaming/StreamCreate';
import StreamDelete from './streaming/StreamDelete';
import Header from './Header';

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/stream/new" exact component={StreamCreate}/>
                    <Route path="/stream/edit" exact component={StreamEdit}/>
                    <Route path="/stream/delete" exact component={StreamDelete}/>
                    <Route path="/stream/view" exact component={StreamShow}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;