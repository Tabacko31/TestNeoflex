import {Link} from "react-router-dom";
import React from "react";
import './styles.css';
import {ReactComponent as RuSvg} from '../../../assets/images/icons/RU.svg';
import {ReactComponent as SocialSvg} from '../../../assets/images/icons/Social.svg';

export const Footer = () => {

    return (
        <footer className="main-footer">
            <div className={"logo"}>
                <Link to="/" className="logo">QPICK</Link>


            <div className={"invisible-box"}>
                <div className={"product-conteiner1"}>

                    <div className={"info-card"}>
                        <h2>Избранное</h2>
                        <h2>Корзина</h2>
                        <h2>Контакты</h2>

                    </div>
                    <div>
                        <h2 className={"info-card1"}>Условия сервиса</h2>
                        <div className={"conteiner-dottom"}>
                            <RuSvg className="ru-icon"></RuSvg>
                            <button className={"language-button"}>Рус</button>
                            <button className={"language-button"}>Eng</button>
                        </div>
                    </div>
                </div>
            </div>
                <SocialSvg className="social-icon"></SocialSvg>
        </div>
        </footer>

    )
}