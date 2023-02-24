import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

const OrderContext = createContext();

function OrderContextPorvider({ children }) {
    const [cart, setCart] = useState([]);

    // handle add to cart
    const handleAddToCart = (food) => {
        let isFoodAlreadyExist = cart.filter((item) => item?._id === food._id);
        if (isFoodAlreadyExist?.length) {
            toast.info("Food alreday in Cart");
        } else {
            setCart([...cart, food]);
        }
    };

    // To update order quantity by food
    const updateOrderQuantityHandler = (value, foodID) => {
        console.log("value:", value, "foodID:", foodID);
    };

    // Context Passing Object
    const value = {
        cart,
        setCart,
        handleAddToCart,
        updateOrderQuantityHandler,
    };

    return (
        <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
    );
}

export { OrderContextPorvider, OrderContext };
