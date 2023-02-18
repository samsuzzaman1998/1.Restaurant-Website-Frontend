import React from "react";

const SecTitle = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-16 lg:mb-20">
            <h3 className="uppercase font-bold text-xl xs:text-2xl md:text-3xl lg:text-4xl text-green-500 tracking-wide mb-2">
                {title}
            </h3>
            <p className="capitalize text-xs md:text-base lg:text-base font-medium md:font-normal text-black text-opacity-70 w-full max-w-[300px] mx-auto">
                {subtitle}
            </p>
        </div>
    );
};

export default SecTitle;
