import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamList from './streaming/StreamList';
import StreamEdit from './streaming/StreamEdit';
import StreamShow from './streaming/StreamShow';
import StreamCreate from './streaming/StreamCreate';
import StreamDelete from './streaming/StreamDelete';
import Header from './Header';
import history from '../history';

const App = () => {
    return(
        <div className="container">
            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={StreamList}/>
                        <Route path="/stream/new" exact component={StreamCreate}/>
                        <Route path="/stream/edit/:id" exact component={StreamEdit}/>
                        <Route path="/stream/delete/:id" exact component={StreamDelete}/>
                        <Route path="/stream/:id" exact component={StreamShow}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;


//743190205416-ruuddvg77bg5lcmnbvng4t0q7tmkj6bu.apps.googleusercontent.com
//nIOJZOvX917_2HF2CpFcrx2P client-secret