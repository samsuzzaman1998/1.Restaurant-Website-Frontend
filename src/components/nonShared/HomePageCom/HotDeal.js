import React from "react";
import hotDealBG from "../../../assets/hotDealBG.jpg";
import CommonButton from "../../shared/CommonButton";
import { foodData } from "../../../database/HomePageData";

const HotDeal = () => {
    const { _id, title, des, photo } = foodData[0];
    return (
        <section
            className="px-3 xs:px-5 sm:px-8 md:px-8 xl:px-0 my-16  py-8 lg:py-10"
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${hotDealBG})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="w-full max-w-7xl mx-auto flex flex-col-reverse sm:flex-row  justify-center items-center gap-y-10 sm:gap-y-0 sm:gap-x-10">
                <div className="">
                    <h3 className="uppercase border-2 border-green-100 inline-block px-4 rounded-2xl  text-white text-xs tracking-wide">
                        hot deal !!!
                    </h3>
                    <h2 className="uppercase text-lg sm:text-2xl md:text-3xl font-medium text-white mt-5 sm:mt-8">
                        {title}
                    </h2>
                    <p className="w-full max-w-[500px] text-xs sm:text-sm md:text-base text-white mt-1 mb-5">
                        {des}
                    </p>
                    <CommonButton btnName="order now" />
                </div>
                <div className="w-full max-w-[300px] rounded">
                    <img src={photo} alt="food" className="w-full rounded" />
                </div>
            </div>
        </section>
    );
};

export default HotDeal;
