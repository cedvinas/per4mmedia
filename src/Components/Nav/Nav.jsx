import React from "react";
import './Nav.scss'

const Nav = () => {


    return (
        <nav id="nav">
            <div className="container">
                <div>
                    <img src="https://per4mmedia.com/wp-content/uploads/2021/03/per4mmedia.com-black-250x59.png" alt="logo" />
                </div>

                <div className="nav-links">
                    <ul>
                        <a href="#"><li>shop all</li></a>
                        <a href="#"><li>design</li></a>
                        <a href="#"><li>photography</li></a>
                        <a href="#"><li>about us</li></a>
                        <a href="#"><li>contact us</li></a>
                        <a href="#"><li>cart</li></a>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;