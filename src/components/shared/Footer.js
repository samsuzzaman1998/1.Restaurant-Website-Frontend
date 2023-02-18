import React from "react";
import Logo from "./Logo";
import {
    AiOutlineWhatsApp,
    AiOutlinePhone,
    AiOutlineGoogle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";

// footer data
import { footerSocialLinks } from "../../database/FooterData";

const Footer = () => {
    return (
        <footer className="bg-green-500">
            <div className="w-full max-w-7xl mx-auto px-3 xs:px-5 sm:px-8 md:px-8 xl:px-0 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-8 lg:gap-4">
                {/* 1st column */}
                <div className="">
                    <Logo />
                    <p className="text-white text-xs xs:text-sm md:text-base w-full max-w-[200px] mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi nihil unde
                    </p>
                    <ul className="flex flex-row justify-start items-center mt-4 lg:mt-6">
                        {footerSocialLinks.map((link) => {
                            return (
                                <li
                                    className="p-[5px] border-[1px] border-green-100 hover:bg-green-100 transition-all duration-200 rounded-full mx-[3px]"
                                    key={link._id}
                                >
                                    <a
                                        href={link.link}
                                        className="text-white text-sm"
                                    >
                                        {link.linkName}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* 2nd column */}
                <div className="">
                    <h4 className="uppercase font-semibold text-white tracking-wider">
                        contact
                    </h4>
                    <ul className="mt-2">
                        <li className="text-white flex justify-start items-center text-xs xs:text-sm mb-[6px] xs:mb-2 w-full max-w-[200px]">
                            <span className="capitalize font-semibold mr-1">
                                <GoLocation />
                            </span>
                            20/A ABCD Plaza, Dhanmondi, Dhaka
                        </li>
                        <li className="text-white flex justify-start items-center text-xs xs:text-sm mb-[6px] xs:mb-2">
                            <span className="capitalize font-semibold mr-1">
                                <AiOutlineWhatsApp />
                            </span>
                            01000000000
                        </li>
                        <li className="text-white flex justify-start items-center text-xs xs:text-sm mb-[6px] xs:mb-2">
                            <span className="capitalize font-semibold mr-1">
                                <AiOutlinePhone />
                            </span>
                            01000000000
                        </li>
                        <li className="text-white flex justify-start items-center text-xs xs:text-sm ">
                            <span className="capitalize font-semibold mr-1">
                                <AiOutlineGoogle />
                            </span>
                            demomail@gmail.com
                        </li>
                    </ul>
                </div>

                {/* 3rd column */}
                <div className="">
                    <h4 className="uppercase font-semibold text-white tracking-wider">
                        booking table
                    </h4>
                    <ul className="mt-2">
                        <li className="text-white text-xs xs:text-sm mb-[6px] xs:mb-2 w-full max-w-[200px]">
                            Contact anytime during office hours for booking
                        </li>
                        <li className="text-white flex justify-start items-center text-xs xs:text-sm mb-[6px] xs:mb-2">
                            <span className="capitalize font-semibold mr-1">
                                <AiOutlinePhone />
                            </span>
                            01000000000
                        </li>
                        <li className="text-white flex justify-start items-center text-xs xs:text-sm mb-[6px] xs:mb-2">
                            <span className="capitalize font-semibold mr-1">
                                <AiOutlinePhone />
                            </span>
                            01000000000
                        </li>
                        <li className="text-white flex justify-start items-center text-xs xs:text-sm ">
                            <span className="capitalize font-semibold mr-1">
                                <AiOutlineGoogle />
                            </span>
                            demomail@gmail.com
                        </li>
                    </ul>
                </div>

                {/* 4th column */}
                <div className="">
                    <h4 className="uppercase font-semibold text-white tracking-wider">
                        Open hours
                    </h4>
                    <ul className="mt-2">
                        <li className="text-white text-xs xs:text-sm mb-[6px] xs:mb-2">
                            Saturday - Friday
                            <br />
                            9.00am - 10.00pm
                        </li>
                        <li className="text-white text-xs xs:text-sm mb-[6px] xs:mb-2 mt-4">
                            <h6 className="capitalize font-semibold mb-2">
                                to get offers:
                            </h6>
                            <form className="flex flex-col xs:flex-row gap-3 xs:gap-0 justify-start items-center">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="enter your email"
                                    className="text-white text-opacity-90 capitalize px-2 py-1 bg-green-500 outline-none border-2 border-green-400 rounded xs:rounded-tr-none xs:rounded-br-none w-full max-w-[200px]"
                                />
                                <button
                                    type="submit"
                                    className="capitalize outline-none bg-white text-green-200 font-semibold px-2 py-1 rounded xs:rounded-tl-none xs:rounded-bl-none border-2 border-white hover:text-black transition-all duration-200"
                                >
                                    subscribe
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
