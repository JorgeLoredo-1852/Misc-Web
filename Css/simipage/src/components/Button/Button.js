import React from 'react';
import './Button.css';

const Button = (props) =>{
    return(
        <a href="#"  className={"btn " + props.colorType}>Mira la colección</a>
    );
};

export default Button;