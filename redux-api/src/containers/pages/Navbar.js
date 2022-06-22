import React from 'react';
import "./Navbar.css";
import search from "../assets/search.svg";
import signin from "../assets/user.svg";
import shoppingbag from "../assets/shopping-bag.svg";
function Navbar() {
    return (
        <div className="container">
            <div className="navabar-content">
                <div className="logo-title">
                    <h1>VENIA</h1>
                </div>
                <div className="navlist">
                    <ul>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Smart Gear</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>
                </div>
                <div className="nav-search-icons">
                    <ul>
                        <li><a href="#"><img className="small-icons" src={search} alt="no-image" />Search</a></li>
                        <li><a href="#"><img className="small-icons" src={signin} alt="no-image" />Sign in</a></li>
                        <li><a href="#"><img className="small-icons" src={shoppingbag} alt="no-image" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;