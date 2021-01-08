import React from 'react';
import './Button.css';

const Button = (props) =>{
    return(
        <a href="#"  className={props.classes}>{props.title}</a>
    );
};

export default Button;