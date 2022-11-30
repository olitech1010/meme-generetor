import React from "react";
import logo from "../images/logo.png"
function Header (){

    return (
        <header className="top-header">
            <div className="logo-and-text">
            <img className="header-logo" src={logo} alt="meme logo" />
            <h2 className="header-logo-text">Meme Generator</h2>
            </div>

            <ul className="btn-links">
            <li> <a className="mail link" href="mailto:olitech1010@gmail.com">Mail</a></li>
            <li><a className="phone link" href="mailto:olitech1010@gmail.com">Contact</a></li>
            <li><a className="address link" href="mailto:olitech1010@gmail.com">LinkedIn</a></li>
            </ul>
            
        </header>
    )
}

export default Header;