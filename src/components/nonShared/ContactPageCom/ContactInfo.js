import React from "react";
import {
    AiOutlineGoogle,
    AiOutlinePhone,
    AiOutlineWhatsApp,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const ContactInfo = () => {
    return (
        <div className="">
            <h3 className="uppercase text-green-100 mb-2 underline text-base sm:text-lg tracking-wide">
                connect with us
            </h3>
            <ul className="mt-2">
                <li className="text-black flex justify-start items-center text-xs xs:text-sm mb-[6px] xs:mb-2 ">
                    <span className="capitalize font-semibold mr-1">
                        <GoLocation />
                    </span>
                    20/A ABCD Plaza, Dhanmondi, Dhaka
                </li>
                <li className="text-black flex justify-start items-center text-xs xs:text-sm mb-[6px] xs:mb-2">
                    <span className="capitalize font-semibold mr-1">
                        <AiOutlineWhatsApp />
                    </span>
                    01000000000
                </li>
                <li className="text-black flex justify-start items-center text-xs xs:text-sm mb-[6px] xs:mb-2">
                    <span className="capitalize font-semibold mr-1">
                        <AiOutlinePhone />
                    </span>
                    01000000000
                </li>
                <li className="text-black flex justify-start items-center text-xs xs:text-sm ">
                    <span className="capitalize font-semibold mr-1">
                        <AiOutlineGoogle />
                    </span>
                    demomail@gmail.com
                </li>
            </ul>
        </div>
    );
};

export default ContactInfo;
