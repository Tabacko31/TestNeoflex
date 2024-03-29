import {Link} from "react-router-dom";
import React, {useContext} from "react";
import { ReactComponent as CartSvg } from '../../../assets/images/icons/Vector.svg';
import { ReactComponent as HeartSvg } from '../../../assets/images/icons/Heart.svg';
import './styles.css';
import {useStore} from "../../../hooks/useStore";
import {CartItem} from "../../../types";

export const Header = () => {
    const store = useStore()

    return (
        <header className="main-header">
            <Link to="/" className="logo">QPICK</Link>

            <nav>
                <ul className={'links'}>
                    <li className={`link`}>
                        <Link to="/basket" >
                            <div className={`cart-icon-wrapper`}>
                                <span className='cart-items-count'>{store?.cartItems.reduce((total, item: CartItem) => total + item.count, 0)}</span>
                                <CartSvg/>
                            </div>
                            </Link>
                    </li>
                    <li className={`link`}>
                        <Link to="/dashboard">
                            <HeartSvg/></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}