import {Link} from "react-router-dom";
import React from "react";
import { ReactComponent as CartSvg } from '../../../assets/images/icons/Vector.svg';
import { ReactComponent as HeartSvg } from '../../../assets/images/icons/Heart.svg';
import './styles.css';

export const Header = () => {

    return (
        <header className="main-header">
            <Link to="/" className="logo">QPICK</Link>

            <nav>
                <ul className={'links'}>
                    <li className={`link`}>
                        <Link to="/about" className={`cart`}><CartSvg/></Link>
                    </li>
                    <li className={`link`}>
                        <Link to="/dashboard"><HeartSvg/></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}