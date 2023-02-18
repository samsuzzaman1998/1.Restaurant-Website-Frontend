import React from "react";
import hero from "../../../assets/hero.png";
import { BsArrowRight } from "react-icons/bs";

const HomeHero = () => {
    return (
        <section className=" flex justify-between items-center">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full max-w-7xl mx-auto px-3 xs:px-5 sm:px-8 md:px-8 xl:px-0 gap-12 py-12 md:py-24 ">
                <div className="">
                    <h3 className="uppercase font-semibold text-green-100 text-[10px]  xs:text-sm border-y-2 border-solid px-1 py-[1px] inline-block">
                        want food ?
                    </h3>
                    <h2 className="font-bold uppercase text-lg xs:text-2xl md:text-3xl lg:text-5xl text-green-500 tracking-wide leading-tight mt-6">
                        take a sit, <br /> and place your order
                    </h2>
                    <p className="text-[13px] sm:text-base mt-6 w-full max-w-md">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eius mollitia eveniet omnis autem nulla
                        aspernatur.
                    </p>
                    <div className="flex flex-col xs:flex-row items-center gap-[8px] md:gap-4 mt-8 md:mt-10">
                        <button className="flex justify-between items-center uppercase font-medium text-xs md:text-sm tracking-wider rounded-2xl border-[1px] px-5 py-[6px] hover:text-green-500 hover:bg-white group transition-all duration-300 bg-green-100 text-white ">
                            order now
                            <BsArrowRight className="ml-[2px] font-extrabold group-hover:ml-[5px] text-lg transition-all duration-300" />
                        </button>
                        <button className="flex justify-between items-center uppercase font-medium text-xs md:text-sm tracking-wider rounded-2xl border-[1px] px-5 py-[6px] text-green-500 group transition-all duration-300 hover:bg-green-100 hover:text-white">
                            book table{" "}
                            <BsArrowRight className="ml-[2px] font-extrabold group-hover:ml-[5px] text-lg transition-all duration-300" />
                        </button>
                    </div>
                </div>
                <div className="w-full  xs:max-w-[300px] lg:max-w-xl mx-auto">
                    <img src={hero} alt="hero" className="w-full " />
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
