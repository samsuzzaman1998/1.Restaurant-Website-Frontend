import React, { useContext, useState } from "react";
import {
    AiOutlineEye,
    AiOutlineEyeInvisible,
    AiOutlineGoogle,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { userContext } from "../../../Utils/Context/userContext";

const ChangePassword = ({ currentUser }) => {
    const { email } = currentUser;
    const { userLogout } = useContext(userContext); // custom user

    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { newPassword, confirmPassword } = data;
        // {oldPassword: 'Aa@12345', newPassword: 'Aa@12345'}
        if (newPassword !== confirmPassword) {
            toast.warn("Password not matched");
        } else {
            try {
                const token = localStorage.getItem("access-token");
                const config = {
                    headers: { authorization: `Bearer ${token}` },
                };
                const response = await axios.put(
                    "http://localhost:3001/api/v1/user/change-password",
                    { newPassword },
                    config
                );
                if (response?.data.status) {
                    toast.success("Password changed Successfully");
                    userLogout();
                }
            } catch (err) {
                console.log(err);
                toast.warn("something went wrong");
            }
        }
    };
    return (
        <section className=" w-full max-w-[500px] mx-auto">
            <div className="w-full shadow-2xl rounded py-2 px-[8px] sm:pt-1 sm:pb-3 sm:px-4 bg-gradient-to-r from-green-200 to-green-100 relative">
                <label className="capitalize text-[10px] md:text-xs tracking-wide text-white bg-black bg-opacity-90 px-1 sm:px-3 py-[1px] rounded absolute top-[-10px] left-[5px]">
                    change password
                </label>

                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col xl:flex-row justify-between gap-x-3 items-center">
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
                                    className="w-full px-2 py-1 text-green-500 border border-gray rounded-md outline-none focus:border-green-100 transition-all duration-200 sm:text-[14px] text-[11px] mt-1 "
                                    {...register("newPassword", {
                                        required: "enter new password",
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
                            {errors.newPassword && (
                                <p className="text-xs mt-[2px] text-white opacity-90 tracking-wide capitalize">
                                    {errors.newPassword?.message}
                                </p>
                            )}
                        </div>
                        {/* confirm password */}
                        <div className="w-full max-w-md mx-auto mt-4">
                            <label
                                htmlFor="confirmPassword"
                                className="capitalize text-xs  text-white opacity-90"
                            >
                                confirmm password
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    id="confirmPassword"
                                    className="w-full px-2 py-1 text-green-500 border border-gray rounded-md outline-none focus:border-green-100 transition-all duration-200 text-[11px] sm:text-[14px] mt-1 "
                                    {...register("confirmPassword", {
                                        required: "enter confirm password",
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
                            {errors.confirmPassword && (
                                <p className="text-xs mt-[2px] text-white opacity-90 tracking-wide capitalize">
                                    {errors.confirmPassword?.message}
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
