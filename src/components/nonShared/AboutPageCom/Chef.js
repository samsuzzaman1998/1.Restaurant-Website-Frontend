import React from "react";

const Chef = ({ chef }) => {
    const { name, role, des, photo } = chef;

    return (
        <div className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-200 rounded pb-4 relative group xs:mx-[10px] h-full">
            <div className="rounded-tl rounded-tr text-lg">
                <img
                    src={photo}
                    alt="food"
                    className="w-full rounded-tl max-w-[100px] mx-auto rounded-tr"
                />
            </div>
            <div className="mt-1 p-4">
                <h4 className="uppercase text-center font-medium tracking-wide text-[16px] sm:text-lg text-green-200">
                    {name}
                </h4>
                <p className="text-[13px] text-xs uppercase font-medium  text-green-100 text-center opacity-90">
                    {role}
                </p>
                <p className="text-[13px] sm:text-sm text-justify  text-black opacity-90 mt-2">
                    {des}
                </p>
            </div>
        </div>
    );
};

export default Chef;
