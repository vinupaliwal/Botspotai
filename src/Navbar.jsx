import React from 'react';
import './index.css';

const Navbar=()=>{
    const botspot = {
        color: '#FFFFFF'
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-expand navbar-light">
        <a className="navbar-brand" href="#" style={botspot} >BOTSPOT AI</a>
        <ul className="nav ml-auto navbar-nav">
        <li className="nav-item"><a href="#" className="nav-link"><img src="./images/phone.png" alt=""/> </a></li>
        <li className="nav-item"><a href="#" className="nav-link"> <img src="./images/searchbar.png" alt=""/></a></li>
        <li className="nav-item"><a href="#" className="nav-link"> <span className="navbar-toggler-icon" ></span></a></li>
        </ul>
        </nav>
    );
}

export default Navbar;

