import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header = () => {
    return(
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">Streamy</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link class="nav-link" to="/">All Streams</Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link ">
                        <GoogleAuth/>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    );
};

export default Header;