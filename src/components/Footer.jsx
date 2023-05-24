import React from "react";
import logo from "../assets/images/logo_footer.svg";
import "../styles/Footer.scss";

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;