import React from 'react';
import Link from './Link';

const Header = () =>{
    return(
        <ul className="nav nav-pills nav-fill">
            <Link className = "nav-link" href = "/">
                Accordion
            </Link>
            <Link className = "nav-link" href = "/translate">
                Translate
            </Link>
            <Link className = "nav-link" href = "/search">
                Search
            </Link>
            <Link className = "nav-link" href = "/dropdown">
                Dropdown
            </Link>
        </ul>
    );
}

export default Header;