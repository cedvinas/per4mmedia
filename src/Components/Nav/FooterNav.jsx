import React from "react";
import './FooterNav.scss';
import FooterNavWidget from "./FooterNavWidget";

const FooterNav = () => {


    return (
        <div className="footer-nav">
            <div className="widgets">
                <FooterNavWidget icon='fa-solid fa-truck-fast' text='Worldwide Delivery' />
                <FooterNavWidget icon='fa-solid fa-radar' text='Order Tracking' />
                <FooterNavWidget icon='fa-solid fa-badge-percent' text='Regular Discounts' />
            </div>
            <div className="container">

                <div className="footer-logo">
                    <img src="https://per4mmedia.com/wp-content/uploads/2021/03/per4mmedia.com-white.png" alt="footer-logo" />

                </div>

                <div className="footer-section">
                    <h4 className="footer-header-text">Information</h4>
                    <ul className="footer-nav-links">
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Payment Methods</a></li>
                        <li><a href="#">Delivery</a></li>
                        <li><a href="#">Products Return</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-header-text">Help</h4>
                    <ul className="footer-nav-links">
                        <li><a href="#">My account</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Checkout</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-header-text">Shop</h4>
                    <ul className="footer-nav-links">
                        <li><a href="#">Shop all</a></li>
                        <li><a href="#">Posters</a></li>
                        <li><a href="#">Apparel</a></li>
                        <li><a href="#">Stickers</a></li>
                        <li><a href="#">Cups</a></li>
                        <li><a href="#">Calendars</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterNav;