import React from "react";

const ContactForm = () => {
    return (
        <div>
            <h3 className="uppercase text-green-100 mb-2 underline text-base sm:text-lg tracking-wide">
                send a message
            </h3>
            <form>
                <div className="w-full max-w-md mx-auto mt-4">
                    <label
                        htmlFor="name"
                        className="capitalize text-xs  text-black opacity-90"
                    >
                        your name
                    </label>
                    <input
                        type="text"
                        placeholder="name"
                        id="name"
                        className="w-full px-2 py-1 text-green-500 capitalize border border-gray rounded-md outline-none focus:border-green-100 transition-all duration-200 text-[14px] mt-1"
                    />
                    <p className="text-xs mt-[2px] text-red opacity-90 tracking-wide capitalize">
                        error message goes here
                    </p>
                </div>
                <div className="w-full max-w-md mx-auto mt-4">
                    <label
                        htmlFor="email"
                        className="capitalize text-xs  text-black opacity-90"
                    >
                        your email
                    </label>
                    <input
                        type="text"
                        placeholder="email"
                        id="email"
                        className="w-full px-2 py-1 text-green-500 capitalize border border-gray rounded-md outline-none focus:border-green-100 transition-all duration-200 text-[14px] mt-1"
                    />
                    <p className="text-xs mt-[2px] text-red opacity-90 tracking-wide capitalize">
                        error message goes here
                    </p>
                </div>
                <div className="w-full max-w-md mx-auto mt-4">
                    <label
                        htmlFor="message"
                        className="capitalize text-xs  text-black opacity-90"
                    >
                        your message
                    </label>
                    <textarea
                        placeholder="email"
                        id="message"
                        cols="30"
                        rows="10"
                        className="w-full px-2 py-1 text-green-500 capitalize border border-gray rounded-md outline-none focus:border-green-100 transition-all duration-200 text-[14px] mt-1"
                    ></textarea>
                    <p className="text-xs mt-[2px] text-red opacity-90 tracking-wide capitalize">
                        error message goes here
                    </p>
                </div>
                <div className="flex justify-center mt-6">
                    <button
                        className="bg-green-100 border border-green-100 text-white px-[40px] rounded-3xl py-2 text-xs sm:text-sm uppercase tracking-wide font-medium transition-all duration-200 hover:bg-green-200"
                        type="submit"
                    >
                        submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
