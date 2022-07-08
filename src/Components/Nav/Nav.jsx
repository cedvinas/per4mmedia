import { logDOM } from "@testing-library/react";
import React from "react";
import './Nav.scss'

const Nav = () => {

    const StickyNav = () => {
        window.addEventListener('scroll', (e) => {
            const nav = document.getElementById('nav');
            const logo = document.getElementById('logo')
            if (window.scrollY > 0) {
                nav.classList.add('nav-sticky')
                logo.src = 'https://per4mmedia.com/wp-content/uploads/2021/03/per4mmedia.com-white-200x48.png'
            } else {
                nav.classList.remove('nav-sticky')
                logo.src = 'https://per4mmedia.com/wp-content/uploads/2021/03/per4mmedia.com-black-250x59.png'
            }
        })
    };

    StickyNav();

    return (
        <nav id="nav">
            <div className="container">
                <div>
                    <img id="logo" src="https://per4mmedia.com/wp-content/uploads/2021/03/per4mmedia.com-black-250x59.png" alt="logo" />
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