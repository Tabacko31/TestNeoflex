import {Link} from "react-router-dom";
import React from "react";
import './styles.css';

export const Footer = () => {

    return (
        <footer className="main-footer">
            <Link to="/" className="logo">QPICK</Link>
            <div className={"invisible-box"}>
            <div className={"product-conteiner1"}>
            {/*<div className={"invisible-box"}>*/}
            <div className={"info-card"}>
                <h2>Избранное</h2>
                <h2>Корзина</h2>
                <h2>Контакты</h2>

            </div>
                {/*<div className={"invisible-box2"}>*/}
                    <h2 className={"info-card1"}>Условия сервиса</h2>
                </div>
            </div>
        {/*</div>*/}
        </footer>

    )
}