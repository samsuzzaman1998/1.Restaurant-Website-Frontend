import React, { useState } from "react";
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
import axios from "axios";

const UpdateProfileCard = ({ currentUser }) => {
    const { name, email, contact, location, avatar, role } = currentUser;
    const [avatarError, setAvatarError] = useState(false);
    const [prevAvatar, setPrevAvatar] = useState(avatar);
    const [avatarLoading, setAvatarLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        const { location, contact, username, avatarURL } = data;

        // file size and updoading
        const avatarFile = avatarURL[0];
        if (avatarFile?.name) {
            if (avatarFile.size > 20 && avatarFile.size < 200000) {
                setAvatarError(false);
                setAvatarLoading(true);
                const data = new FormData();
                data.append("file", avatarFile);
                data.append("upload_preset", "jt5livno");

                // sending image
                const res = await fetch(
                    "https://api.cloudinary.com/v1_1/ddaum19rz/image/upload",
                    {
                        method: "POST",
                        body: data,
                    }
                );
                const result = await res.json();
                setPrevAvatar(result?.secure_url);
                setAvatarLoading(false);
            } else {
                setAvatarError(true);
            }
        }

        // final update user
        const updateInfo = {
            name: username || name,
            email,
            contact: contact,
            location: location,
            avatar: prevAvatar,
            role,
        };

        try {
            const token = localStorage.getItem("access-token");
            const config = {
                headers: { authorization: `Bearer ${token}` },
            };
            const response = await axios.put(
                "http://localhost:3001/api/v1/user/update-user",
                updateInfo,
                config
            );
            if (response?.data?.status) {
                toast.success("Profile Updated");
            }
            reset();
        } catch (error) {
            console.log(error);
            !error?.response?.data?.success && toast.error("Failed to update");
        }
    };
    return (
        <section className="flex justify-center mb-20 w-full max-w-[700px] mx-auto">
            <div className="w-full shadow-2xl rounded mt-16 py-3 px-[8px] sm:py-8 sm:px-4 bg-gradient-to-r from-green-200 to-green-100 relative">
                <label className="capitalize text-[10px] md:text-xs tracking-wide text-white bg-black bg-opacity-90 px-1 sm:px-3 py-[1px] rounded absolute top-[-10px] left-[5px]">
                    update profile
                </label>

                <div className="">
                    {/* preview */}
                    {avatarLoading ? (
                        <div className="w-full max-w-[150px] h-full rounded-full mx-auto text-center text-lg font-semibold text-white">
                            Loading...
                        </div>
                    ) : (
                        <img
                            src={prevAvatar}
                            alt="avatar"
                            className="w-full max-w-[150px] h-full rounded-full mx-auto"
                        />
                    )}

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
                            {avatarError && (
                                <p className="text-left text-xs capitalize mt-2 text-gray font-semibold">
                                    Notice: Enter proper sized file
                                </p>
                            )}
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
                                defaultValue={name}
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
                                className="w-full px-2 py-1  border border-gray rounded-md outline-none  transition-all duration-200 text-[14px] mt-1 "
                                {...register("email")}
                                disabled
                                defaultValue={email}
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
                                defaultValue={role}
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
                                defaultValue={contact}
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
                                defaultValue={location}
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
