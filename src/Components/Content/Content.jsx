import React from "react";
import './Content.scss'

const Content = () => {

    const StickyNav = () => {
        // const nav = document.getElementById('nav');
        // nav.style.backgroundColor = 'black';
        // nav.style.position = 'sticky';
        // console.log('scroll');
    };



    return (
        <div id="content" onScroll={StickyNav()}>

        </div>
    )
}

export default Content;