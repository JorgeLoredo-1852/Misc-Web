import React from 'react';

const Link = ({className,href,children}) =>{

    const onClick = (event) =>{
        event.preventDefault();
        window.history.pushState({},'',href);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return(
        <li className="nav-item" onClick={onClick}>
            <a className={className} href={href}>{children}</a>
        </li>
    );
};

export default Link;