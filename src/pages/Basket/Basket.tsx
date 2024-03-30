import React from "react";
import './styles.css';
import {ReactComponent as DeleteSvg} from '../../assets/images/icons/Delete.svg';
import {useStore} from "../../hooks/useStore";
import {CartItem, Item} from "../../types";

export const Basket = () => {
    const store = useStore();

    const clearCart = () => {
        store?.clearCartItems();
    }

    const decrementCartItem = (itemId: number) => {
        const updatedCartItems = store?.cartItems.map(item => {
            if (item.id === itemId  && item.count > 0) {
                return {
                    ...item,
                    count: item.count - 1
                };
            }
            return item;
        });
        store?.setCartItems(updatedCartItems || []);
    }

    const incrementCartItem = (itemId: number) => {
        const updatedCartItems = store?.cartItems.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    count: item.count + 1
                };
            }
            return item;
        });
        store?.setCartItems(updatedCartItems || []);
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
                        <DeleteSvg className="star-icon"/>
                    </button>
                    {store?.cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div>
                                <img className={"img"} src={item.image} alt=""/>
                                <div className={"increment-button-count"}>
                                    <button className={"button-count"} onClick={() => decrementCartItem(item.id)}>-
                                    </button>
                                    <h1 className={"number-count"}>{item.count}</h1>
                                    <button className={"button-count"} onClick={() => incrementCartItem(item.id)}>+
                                    </button>
                                </div>

                            </div>

                            <div className={"information"}>
                                <p className={"info-name"}>{item.name}</p>
                                <p className={"info-price"}>{item.price}P</p>
                            </div>

                        </div>
                    ))}
                    <div className={"total-price-basket"}>
                    <p className={"product-design"}>₽ {store?.cartItems.reduce((total, item: CartItem) => total + item.price * item.count, 0)}</p>
                   </div>
                </div>
                {/* Правый блок с итоговой суммой и кнопкой */}
                <div className="total-container">
                <div className={"product-conteiner"}>
                        <h2 className={"product-design"}>Итого:</h2>
                        <p className={"product-design"}>₽ {store?.cartItems.reduce((total, item: CartItem) => total + item.price * item.count, 0)}</p>
                    </div>
                    <button className={"product-button-design"}>Перейти к оформлению</button>
                </div>
            </div>
        </div>
    );
}