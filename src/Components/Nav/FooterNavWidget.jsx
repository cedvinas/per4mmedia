import React from "react";
import './Widget.scss';

const FooterNavWidget = (props) => {


    return (
        <div className="footer-widget">
            <i className={props.icon}></i>
            <span>{props.text}</span>
        </div>
    )
}

export default FooterNavWidget;