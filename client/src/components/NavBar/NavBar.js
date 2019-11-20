import React from 'react';
import logo from '../../assets/img/logo.png'
import './NavBar.css';

function NavBar(){
    return (
        <div className="nav">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="lang">
                <i className="fas fa-globe"></i>
                EN
            </div>
        </div>
    )
}

export default NavBar;