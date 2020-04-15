import React from "react";
import Counter from "./Counter";

function Header () {
    return (
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <a className="navbar-brand navRight" href="#">Monster Clicker: World</a>
            <a className="navbar-brand navCenter" href="#">Click an image to begin!</a>
            <a className="navbar-brand navLeft" href="#"><Counter /></a>
        </nav>
    )
}

export default Header;