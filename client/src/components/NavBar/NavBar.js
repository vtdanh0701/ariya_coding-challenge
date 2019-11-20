import React from 'react';
import logo from '../../assets/img/logo.png'
import './NavBar.css';

function NavBar(){
    return (
        <div className="navBar">
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="lang">
                <i className="fas fa-globe"></i>
                
                EN
                
            </div>
        </div>
    )
}

export default NavBar;