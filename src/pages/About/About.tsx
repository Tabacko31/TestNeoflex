import React,{useEffect, useState} from "react";
import './Style.css';
import {ReactComponent as DeleteSvg} from '../../assets/images/icons/Delete.svg';
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface AboutProps {
    cartItems: Product[];
}

export const About = ({}: AboutProps) =>  {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Получение данных из sessionStorage при монтировании компонента
        const sessionCartItems = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
        setCartItems(sessionCartItems);
    }, []);


    const clearCart = () => {
        sessionStorage.removeItem('cartItems');
    }

    return (
        <div className={"product-wrapper"}>
            <h2 className={"product-category"}>Корзина</h2>
            <div className="cart-container">
                {/* Левый блок с товарами */}

                <div className="items-container">
                    <div>
                    <button className={"clean-button"} onClick={() => clearCart()}><DeleteSvg className="star-icon"></DeleteSvg></button>
                    {cartItems.map((item: any) => (
                        <div key={item.id} className="cart-item">
                            <img className={"img"} src={item.image} alt=""/>
                            <div className={"information"}>
                            <p className={"info-name"}>{item.name}</p>
                            <p className={"info-price"}>{item.price}P</p>
                             </div>
                        </div>
                    ))}
                </div>

                </div>
                {/* Правый блок с итоговой суммой и кнопкой */}
                <div className="total-container">
                    <div className={"product-conteiner"}>
                        <h2 className={"product-design"}>Итого:</h2>
                        <p className={"product-design"}>₽ {cartItems.reduce((total, item: any) => total + item.price, 0)}</p>
                    </div>
                    <button className={"product-button"}>Перейти к оформлению</button>
                </div>
            </div>
        </div>
    );
}