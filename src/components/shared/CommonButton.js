import React from "react";
import { BsArrowRight } from "react-icons/bs";

const CommonButton = ({ btnName }) => {
    return (
        <button className="flex justify-between items-center uppercase border-[1px] border-green-100 rounded-2xl px-5 py-1 text-white bg-green-100 hover:bg-green-300 transition-all duration-200 group text-xs sm:text-base">
            {btnName}{" "}
            <BsArrowRight
                size="1.3rem"
                className="ml-1 group-hover:ml-3 transition-all duration-300"
            />
        </button>
    );
};

export default CommonButton;
