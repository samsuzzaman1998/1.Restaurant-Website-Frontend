import React, { createContext, useState } from "react";

const OrderContext = createContext();

function OrderContextPorvider({ children }) {
    const [cart, setCart] = useState([]);

    // handle add to cart
    const handleAddToCart = (food) => {
        const newCart = [...cart, food];
        console.log(newCart);
        setCart(newCart);
    };

    // Context Passing Object
    const value = { cart, setCart, handleAddToCart };

    return (
        <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
    );
}

export { OrderContextPorvider, OrderContext };
