import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {Basket} from "./pages/Basket";
import {Features} from "./pages/Features";
import {NoMatch} from "./pages/NoMatch";
import {Products} from "./pages/Products";
import {Layout} from "./shared-components/Layout/Layout";
import {CartItem} from "./types";

export const StoreContext = React.createContext<{
    cartItems: CartItem[]
    loadCartItems: () => void
    clearCartItems: () => void
} | null>(null)

function App() {
    const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

    const loadCartItemsFromSessionStorage = () => {
        const sessionCartItems = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
        setCartItems(sessionCartItems);
    }

    const clearCartItems = () => {
        sessionStorage.removeItem('cartItems');
        loadCartItemsFromSessionStorage()
    }

    const store = {
        cartItems,
        loadCartItems: loadCartItemsFromSessionStorage,
        clearCartItems
    }

    React.useEffect(() => {
        // Получение данных из sessionStorage при монтировании компонента
        loadCartItemsFromSessionStorage()
    }, []);

    return (
        <StoreContext.Provider value={store}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Products/>}/>
                    <Route path="basket" element={<Basket />} />
                    <Route path="dashboard" element={<Features/>}/>

                    <Route path="*" element={<NoMatch/>}/>
                </Route>
            </Routes>
        </StoreContext.Provider>

    );
}

export default App;
