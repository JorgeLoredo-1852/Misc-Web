import React from 'react';
import './Header.css';
import logo from './logo-simi.png';
import Button from '../Button/Button';

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-box">
                <img src={logo} alt="logo" className="logo-image"></img>
            </div>
            <div className="text-box">
                <h1 className="text-primary">
                    <span className="text-primary-main">Dr simi</span>
                    <span className="text-primary-sub">Club de fans oficial</span>
                </h1>
                <Button colorType="btn-white"/>
            </div>
        </div>
    );
};

export default Header;