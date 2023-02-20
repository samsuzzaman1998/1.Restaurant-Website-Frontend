import React from "react";
import {
    AiOutlineEye,
    AiOutlineEyeInvisible,
    AiOutlineGoogle,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import profile from "../../../assets/M1.png";

const UpdateProfileCard = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;

        console.log(data);
        //{email: 'demo@gmail.com', password: 'asdghjkvA@1'}
    };
    return (
        <section className="flex justify-center mb-20 w-full max-w-[700px] mx-auto">
            <div className="w-full shadow-2xl rounded mt-16 py-3 px-[8px] sm:py-8 sm:px-4 bg-gradient-to-r from-green-200 to-green-100 relative">
                <label className="capitalize text-[10px] md:text-xs tracking-wide text-white bg-black bg-opacity-90 px-1 sm:px-3 py-[1px] rounded absolute top-[-10px] left-[5px]">
                    update profile
                </label>

                <div className="">
                    <img
                        src={profile}
                        alt="avatar"
                        className="w-full max-w-[200px] h-full rounded-sm mx-auto"
                    />

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
                        {/* Avatar */}
                        <div className="w-full max-w-md mx-auto mt-4">
                            <label
                                htmlFor="avatarURL"
                                className="capitalize text-xs  text-white opacity-90"
                            >
                                your photo
                            </label>
                            <input
                                type="file"
                                placeholder="URL"
                                id="avatarURL"
                                className="w-full px-2 py-1 text-white capitalize border border-white rounded-md outline-none transition-all duration-200 text-[14px] mt-1"
                                {...register("avatarURL")}
                            />
                            <div className="flex justify-between items-center">
                                <p className="text-center text-xs capitalize mt-2 text-gray">
                                    Minimum 20kb
                                </p>
                                <p className="text-center text-xs capitalize mt-2 text-gray">
                                    Maximum 2MB
                                </p>
                            </div>
                        </div>
                        {/* Name */}
                        <div className="w-full max-w-md mx-auto mt-4">
                            <label
                                htmlFor="username"
                                className="capitalize text-xs  text-white opacity-90"
                            >
                                your name
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                id="username"
                                className="w-full px-2 py-1 text-green-500 capitalize border border-gray rounded-md outline-none  transition-all duration-200 text-[14px] mt-1"
                                {...register("username")}
                            />
                        </div>
                        {/* Email */}
                        <div className="w-full max-w-md mx-auto mt-4">
                            <label
                                htmlFor="email"
                                className="capitalize text-xs  text-white opacity-90"
                            >
                                your email
                            </label>
                            <input
                                type="text"
                                placeholder="Your email"
                                id="email"
                                className="w-full px-2 py-1  capitalize border border-gray rounded-md outline-none  transition-all duration-200 text-[14px] mt-1 "
                                {...register("email")}
                                disabled
                                value="demo value"
                            />
                        </div>
                        {/* Role */}
                        <div className="w-full max-w-md mx-auto mt-4">
                            <label
                                htmlFor="role"
                                className="capitalize text-xs  text-white opacity-90"
                            >
                                your role
                            </label>
                            <input
                                type="text"
                                placeholder="Your role"
                                id="role"
                                className="w-full px-2 py-1 text-green-500 capitalize border border-gray rounded-md outline-none  transition-all duration-200 text-[14px] mt-1"
                                {...register("role")}
                                disabled
                                value="demo value"
                            />
                        </div>
                        {/* Contact */}
                        <div className="w-full max-w-md mx-auto mt-4">
                            <label
                                htmlFor="contact"
                                className="capitalize text-xs  text-white opacity-90"
                            >
                                contact number
                            </label>
                            <input
                                type="text"
                                placeholder="+880"
                                id="contact"
                                className="w-full px-2 py-1 text-green-500 capitalize border border-gray rounded-md outline-none  transition-all duration-200 text-[14px] mt-1"
                                {...register("contact")}
                            />
                        </div>
                        {/* Location */}
                        <div className="w-full max-w-md mx-auto mt-4">
                            <label
                                htmlFor="location"
                                className="capitalize text-xs  text-white opacity-90"
                            >
                                Your Location
                            </label>
                            <input
                                type="text"
                                placeholder="location"
                                id="contact"
                                className="w-full px-2 py-1 text-green-500 capitalize border border-gray rounded-md outline-none  transition-all duration-200 text-[14px] mt-1"
                                {...register("location")}
                            />
                        </div>
                        <div className="flex justify-center mt-3">
                            <button
                                className="bg-red  text-white px-4 rounded-3xl py-1 text-xs sm:text-sm uppercase tracking-wide font-medium transition-all duration-200  hover:bg-opacity-90 mt-2"
                                type="submit"
                            >
                                update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UpdateProfileCard;
