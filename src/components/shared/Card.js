import React, { useContext, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { OrderContext } from "../../Utils/Context/OrderContext";

const Card = ({ food }) => {
    const { handleAddToCart } = useContext(OrderContext);
    const [love, setLove] = useState(false);

    const { _id, title, des, price, photo } = food;
    return (
        <div className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-200 rounded pb-4 relative group">
            {love ? (
                <AiFillHeart
                    className="absolute top-2 right-2 text-green-200 cursor-pointer transition-all duration-200 group-hover:opacity-100 opacity-0"
                    size="1.4rem"
                    onClick={() => setLove(!love)}
                />
            ) : (
                <AiOutlineHeart
                    className="absolute top-2 right-2 text-green-200 cursor-pointer transition-all duration-200 group-hover:opacity-100 opacity-0"
                    size="1.4rem"
                    onClick={() => setLove(!love)}
                />
            )}
            <div className="rounded-tl rounded-tr text-lg">
                <img
                    src={photo}
                    alt="food"
                    className="w-full rounded-tl rounded-tr"
                />
            </div>
            <div className="mt-1 p-4">
                <h4 className="uppercase font-medium tracking-wide text-[16px] sm:text-lg text-green-200">
                    {title}
                </h4>
                <p className="text-[13px] sm:text-sm text-justify  text-black opacity-90 mt-2">
                    {des}
                </p>
            </div>
            <div className="flex justify-between items-center mt-4 px-4">
                <div className="text-[13px] sm:text-sm uppercase border-[1px] border-green-100 inline-block py-[1px] px-4 rounded-3xl ">
                    <span className="font-medium text-green-500">{price}</span>{" "}
                    tk
                </div>
                <button
                    className="text-[13px] sm:text-sm uppercase border-[1px] border-green-100 bg-green-100 inline-block py-[1px] px-4 rounded-3xl transition-all duration-200 text-white hover:bg-green-300 "
                    onClick={() => handleAddToCart(food)}
                >
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default Card;
