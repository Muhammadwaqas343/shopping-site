import React from "react";
import "./Header.css"
import logo from "../../assets/logo.png"

const Header = () => {

    return (
        <header className="header">
            < a href=""><img src={logo} /></a>
            <nav className="navbar">
            < a href="/">Home</a>
            < a href="/">Men's</a>
            < a href="/">Women's</a>
            < a href="/">Kid's</a>
            < a href="/">Pages</a>
            < a href="/">Features</a>
            < a href="/">Explore</a>
            </nav>
        </header>
    )
}
export default Header;