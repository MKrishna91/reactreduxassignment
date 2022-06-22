import React from 'react';
import "./Footer.css";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";

const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <div className="footer-content">
                    <div>
                        <h5>Account</h5>
                        <ul>
                            <li><a href="#">Sign in</a></li>
                            <li><a href="#">Register</a></li>
                            <li><a href="#">Order status</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5>About Us</h5>
                        <ul>
                            <li><a href="#">Our stay</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Help</h5>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Order Status</a></li>
                            <li><a href="#">Returns</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Follow Us!</h5>
                        <p>Lorem ipsum dolor sit amet, consectetu
                            incididunt ut labore et dolore magna aliqua.</p>
                        <ul class="social-icons">
                            <li><a href="#"><img src={instagram} alt="no-image" /></a></li>
                            <li><a href="#"><img src={facebook} alt="no-image" /></a></li>
                            <li><a href="#"><img src={twitter} alt="no-image" /></a></li>
                        </ul>
                    </div>
                </div>
                <hr class="underline-horizon" />
                <div className="footer-content1">
                    <div>
                        <h2>VENIA</h2>
                    </div>
                    <div>
                        <p>A Compaany new Address and state zip</p>
                    </div>
                    <div>

                        <ul>
                            <li><a href="#">Term of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;