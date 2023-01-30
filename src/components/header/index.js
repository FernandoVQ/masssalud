import React from "react";
import Logosss from "../../images/logosalud.jpg";

export const Header = () => {
    return (
        <header>
            <a href=".">
                <div className="logo">
                    <img src={Logosss} alt="" width="130"/>
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">INICIO</a>
                </li>
                <li>
                    <a href="#">PRODUCTOS</a>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item_total">0</span>
            </div>
        </header>
    )
}
