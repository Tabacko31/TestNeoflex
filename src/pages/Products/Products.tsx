import React from "react";
import './styles.css';
import {ReactComponent as StarSvg} from '../../assets/images/icons/Star.svg';
import AppleImg from '../../assets/images/Image.png';
import AppleImg1 from '../../assets/images/AppleEarPods.png';
import AppleImg2 from '../../assets/images/AppleEarPodsAux.png';


const products = [
    {id: 1, name: "Headphones", price: 2327, image: AppleImg, rating: 4.5},
    {id: 2, name: "Speakers", price: 2327, image:AppleImg, rating: 4.5},
    {id: 3, name: "Microphone", price: 2327, image: AppleImg1, rating: 4.7},
    {id: 4, name: "Headphones", price: 2327, image: AppleImg1, rating: 4.5},
    {id: 5, name: "Speakers", price: 2327, image: AppleImg2, rating: 4.5},
    {id: 6, name: "Microphone", price: 2327, image: AppleImg2, rating: 4.7},
];
const wirelessHeadphones = [
    {id: 4, name: "Wireless Headphones 1", price: 120, image: "./image/Apple.png", rating: 4.5},
    {id: 5, name: "Wireless Headphones 2", price: 150, image: "./image/Apple.png", rating: 4.5},
    {id: 6, name: "Wireless Headphones 3", price: 100, image: "./image/Apple.png", rating: 4.6}
];

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
}

export const Products = () => {

    const addToCart = (product: Product) => {
        const cartItems = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
        const updatedCartItems = [...cartItems, product];
        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }

    return (
        <div className="products-wrapper">
            <div className="product-wrapper">
                <h2 className="product-category">Наушники</h2>

                <div className="product-items">
                    {products.map(product => (
                        <div key={product.id} className="product-card">

                            <div className="product-img-wrapper">
                                <img className="product-img" src={product.image} alt={product.name}/>
                            </div>

                            <div className="product-info">
                                <div className="product-info-row">
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className={"product-price"}>{product.price}₽</p>
                                </div>

                                <div className="product-info-row">
                                    <p className={"product-rating"}><StarSvg className="star-icon"></StarSvg> {product.rating}</p>

                                    <button className="product-buy-btn" onClick={() => addToCart(product)}>
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="product-wrapper">
                <h2 className="product-category">Беспроводные наушники</h2>

                <div className="product-items">
                    {wirelessHeadphones.map(product => (
                        <div key={product.id} className="product-card">

                            <div className="product-img-wrapper">
                                <img className="product-img" src={AppleImg} alt={product.name}/>
                            </div>

                            <div className="product-info">
                                <div className="product-info-row">
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className={"product-price"}>{product.price}₽</p>
                                </div>

                                <div className="product-info-row">
                                    <p className={"product-rating"}><StarSvg
                                        className="star-icon"></StarSvg> {product.rating}</p>

                                    <button className="product-buy-btn">Купить</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
