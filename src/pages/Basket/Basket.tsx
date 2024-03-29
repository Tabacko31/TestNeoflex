import React from "react";
import './styles.css';
import {ReactComponent as DeleteSvg} from '../../assets/images/icons/Delete.svg';
import {useStore} from "../../hooks/useStore";
import {CartItem} from "../../types";

export const Basket = () => {
    const store = useStore();

    const clearCart = () => {
        store?.clearCartItems();
    }

    return (
        <div className={"product-wrapper"}>
            {/*todo переименовать названия классов. сделать, чтобы название класса соответствовало содержимому. */}
            <h2 className={"product-category"}>Корзина</h2>
            <div className="cart-container">
                {/* Левый блок с товарами */}

                <div className="items-container">
                    <button
                        className={"clean-button"}
                        onClick={() => clearCart()}
                    >
                        <DeleteSvg className="star-icon" />
                    </button>
                    {store?.cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img className={"img"} src={item.image} alt=""/>
                            <div className={"information"}>
                                <p className={"info-name"}>{item.name}</p>
                                <p className={"info-price"}>{item.price}P</p>
                            </div>

                            <h1 style={{color: 'red', fontSize: 40}}>{item.count}</h1>

                        </div>
                    ))}
                </div>
                {/* Правый блок с итоговой суммой и кнопкой */}
                <div className="total-container">
                    <div className={"product-conteiner"}>
                        <h2 className={"product-design"}>Итого:</h2>
                        <p className={"product-design"}>₽ {store?.cartItems.reduce((total, item: CartItem) => total + item.price * item.count, 0)}</p>
                    </div>
                    <button className={"product-button"}>Перейти к оформлению</button>
                </div>
            </div>
        </div>
    );
}