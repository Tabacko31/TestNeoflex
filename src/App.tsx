import React from 'react';
import {Route, Routes} from "react-router-dom";
import {About} from "./pages/About/About";
import {Dashboard} from "./pages/Dashboard";
import {NoMatch} from "./pages/NoMatch";
import {Products} from "./pages/Products/Products";
import {Layout} from "./shared-components/Layout/Layout";
import {Basket} from "./pages/Basket";

const products = [
    { id: 1, name: "Headphones", price: 2327, image: "../image/Apple.png", rating: 4.5 },
    { id: 2, name: "Speakers", price: 2327, image: "../image/Apple.png", rating: 4.5 },
    { id: 3, name: "Microphone", price: 2327, image: "../image/Apple.png", rating: 4.7 },
    { id: 4, name: "Headphones", price: 2327, image: "../image/Apple.png", rating: 4.5 },
    { id: 5, name: "Speakers", price: 2327, image: "./image/Apple.png", rating: 4.5 },
    { id: 6, name: "Microphone", price: 2327, image: "./image/Apple.png", rating: 4.7},
];
function App() {
    return (

        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Products/>}/>
                {/*<Route index element={<About/>}/>*/}
                <Route path="about" element={<About cartItems={products}/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>

                <Route path="*" element={<NoMatch/>}/>
            </Route>
        </Routes>
    );
}

export default App;
