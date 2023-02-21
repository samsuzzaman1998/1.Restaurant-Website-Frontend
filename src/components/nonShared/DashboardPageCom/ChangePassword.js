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

const ChangePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
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
        <section className=" w-full max-w-[500px] mx-auto">
            <div className="w-full shadow-2xl rounded py-2 px-[8px] sm:pt-1 sm:pb-3 sm:px-4 bg-gradient-to-r from-green-200 to-green-100 relative">
                <label className="capitalize text-[10px] md:text-xs tracking-wide text-white bg-black bg-opacity-90 px-1 sm:px-3 py-[1px] rounded absolute top-[-10px] left-[5px]">
                    change password
                </label>

                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col xl:flex-row justify-between gap-x-3 items-center">
                        {/* old password */}
                        <div className="w-full max-w-md mx-auto mt-4">
                            <label
                                htmlFor="oldPassword"
                                className="capitalize text-xs  text-white opacity-90"
                            >
                                old password
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Old Password"
                                    id="oldPassword"
                                    className="w-full px-2 py-1 text-green-500 border border-gray rounded-md outline-none focus:border-green-100 transition-all duration-200 sm:text-[14px] text-[11px] mt-1 "
                                    {...register("oldPassword", {
                                        required: "enter old password",
                                        minLength: {
                                            value: 8,
                                            message: "enter valid password",
                                        },
                                    })}
                                />
                                {showPassword ? (
                                    <AiOutlineEyeInvisible
                                        className="absolute top-[10px] right-[4px] text-black opacity-60 z-10"
                                        size="1.2rem"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    />
                                ) : (
                                    <AiOutlineEye
                                        className="absolute top-[10px] right-[4px] text-black opacity-60 z-10"
                                        size="1.2rem"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    />
                                )}
                            </div>
                            {errors.oldPassword && (
                                <p className="text-xs mt-[2px] text-white opacity-90 tracking-wide capitalize">
                                    {errors.oldPassword?.message}
                                </p>
                            )}
                        </div>
                        {/* new password */}
                        <div className="w-full max-w-md mx-auto mt-4">
                            <label
                                htmlFor="newPassword"
                                className="capitalize text-xs  text-white opacity-90"
                            >
                                new password
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="New Password"
                                    id="newPassword"
                                    className="w-full px-2 py-1 text-green-500 border border-gray rounded-md outline-none focus:border-green-100 transition-all duration-200 text-[11px] sm:text-[14px] mt-1 "
                                    {...register("newPassword", {
                                        required: "enter a new password",
                                        minLength: {
                                            value: 8,
                                            message:
                                                "password at least 8 characters",
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Z])(?=.*\d)(?=.*\W)[a-zA-Z\d\W]{8,}$/,
                                            message:
                                                "password must contains a uppercase letter, a digit, a special character",
                                        },
                                    })}
                                />
                                {showPassword ? (
                                    <AiOutlineEyeInvisible
                                        className="absolute top-[10px] right-[4px] text-black opacity-60 z-10"
                                        size="1.2rem"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    />
                                ) : (
                                    <AiOutlineEye
                                        className="absolute top-[10px] right-[4px] text-black opacity-60 z-10"
                                        size="1.2rem"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    />
                                )}
                            </div>
                            {errors.newPassword && (
                                <p className="text-xs mt-[2px] text-white opacity-90 tracking-wide capitalize">
                                    {errors.newPassword?.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <button
                        className="bg-red text-white px-4 rounded-3xl py-1 text-xs sm:text-sm uppercase tracking-wide font-medium transition-all duration-200 hover:bg-opacity-90 mt-2"
                        type="submit"
                    >
                        reset
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ChangePassword;
