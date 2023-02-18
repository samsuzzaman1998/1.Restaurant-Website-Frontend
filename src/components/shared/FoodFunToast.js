import React from "react";
import { ToastContainer } from "react-toastify";

const FoodFunToast = () => {
    return (
        <ToastContainer
            position="bottom-left"
            autoClose={3000}
            limit={1}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="light"
        />
    );
};

export default FoodFunToast;
