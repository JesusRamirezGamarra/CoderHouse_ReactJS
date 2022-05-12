import { createContext } from "react";
import { swalSuccess,swalWarning,swalEmpty,swalDeleteSucces,} from "../helpers/swalModals";
import { useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {  
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
        const { title, count } = item;
        swalSuccess(title , count);
    };

    const removeFromCart = (id, title) => {
        swalDeleteSucces(title);
        return setCart(cart.filter((item) => item.id !== id));
    };

    const isProductInCart = (id) => {
        return cart.some((item) => item.id === id);  
    };

    const addToExistingProd = ({ id, count, title }) => {
        const existingMatch = cart.filter((item) => item.id === id);
        existingMatch[0].count += count;
        let index = cart.indexOf(existingMatch);
        if (index !== -1) cart[index] = existingMatch[0];
        
        setCart([...cart]);
        swalSuccess(title, count);
    };

    const limitStock = async ({ id, count }) => {
        const countInCart = cart.filter((item) => item.id === id)[0].count;
        let stock = 10
        return countInCart + count <= stock  || swalWarning();
    };

    const clearCart = () => {
        swalEmpty();
        return setCart([]);
    };

    const getTotalAmount = () => {
        return cart
            .map((item) => item.count * item.price)
            .reduce((pv, cv) => pv + cv, 0);
    };


    return (
    <CartContext.Provider
        value={{
                cart,
                addToCart,
                isProductInCart,
                removeFromCart,
                addToExistingProd,
                limitStock,
                clearCart,
                getTotalAmount,
        }}
    >
        {children}
    </CartContext.Provider>
    );
};
