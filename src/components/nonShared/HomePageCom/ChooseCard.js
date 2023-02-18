import React from "react";

const ChooseCard = ({ choose }) => {
    const { title, des, icon } = choose;
    return (
        <div className="shadow-lg p-6 rounded group transition-all duration-700 hover:bg-gradient-to-r from-green-400 to-green-100 h-full">
            <p className="text-4xl sm:text-5xl lg:text-6xl text-green-500 transition-all duration-300 group-hover:text-white">
                {icon}
            </p>
            <h4 className="font-medium text-green-500 text-[16px] xs:text-lg sm:text-xl lg:text-2xl uppercase mt-3 xs:mt-4 transition-all duration-300 group-hover:text-white">
                {title}
            </h4>
            <p className="text-[13px] sm:font-normal sm:text-sm lg:text-base text-justify text-black opacity-95 mt-2 transition-all duration-300 group-hover:text-white">
                {des}
            </p>
        </div>
    );
};

export default ChooseCard;
