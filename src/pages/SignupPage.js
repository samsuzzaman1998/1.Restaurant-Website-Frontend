import React, { useState } from "react";
import {
    AiOutlineGoogle,
    AiOutlineEye,
    AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SignupPage = () => {
    const [terms, setTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { name, email, password, confirmPassword } = data;

        if (password !== confirmPassword) {
            toast.warn("password not matched");
        } else {
            console.log(data);
        }
        //{name: 'sams', email: 'demo@gmail.com', password: 'Aa@12345', confirmPassword: 'Aa@12345'}
    };

    return (
        <section className="w-full max-w-[500px] mx-auto my-10 lg:my-20 pb-6 lg:pb-6 rounded-lg shadow-lg hover:shadow-xl ">
            <h3 className="text-center uppercase font-medium text-green-500 opacity-90 mb-6 lg:mb-8 ">
                create account
            </h3>
            <div className="divide-y divide-double divide-gray">
                <form className="px-4 mb-8" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full max-w-md mx-auto ">
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
                            {...register("name", {
                                required: "your name is required",
                                minLength: {
                                    value: 4,
                                    message: "name is too short (min 4 char)",
                                },
                                maxLength: {
                                    value: 20,
                                    message: "name is too long (max 20 char)",
                                },
                                pattern: {
                                    value: /^[A-Z][a-z]*$/i,
                                    message: "name contains only alphapet",
                                },
                            })}
                        />
                        {errors.name && (
                            <p className="text-xs mt-[2px] text-red opacity-90 tracking-wide capitalize">
                                {errors.name?.message}
                            </p>
                        )}
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
                            {...register("email", {
                                required: "email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "enter a valid gmail",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="text-xs mt-[2px] text-red opacity-90 tracking-wide capitalize">
                                {errors.email?.message}
                            </p>
                        )}
                    </div>
                    <div className="w-full max-w-md mx-auto mt-4">
                        <label
                            htmlFor="password"
                            className="capitalize text-xs  text-black opacity-90"
                        >
                            your password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="password"
                                id="password"
                                className="w-full px-2 py-1 text-green-500 border border-gray rounded-md outline-none focus:border-green-100 transition-all duration-200 text-[14px] mt-1 "
                                {...register("password", {
                                    required: "password is required",
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
                        {errors.password && (
                            <p className="text-xs mt-[2px] text-red opacity-90 tracking-wide capitalize">
                                {errors.password?.message}
                            </p>
                        )}
                    </div>
                    <div className="w-full max-w-md mx-auto mt-4">
                        <label
                            htmlFor="confirmPassword"
                            className="capitalize text-xs  text-black opacity-90"
                        >
                            confirm password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="confirmPassword"
                                id="confirmPassword"
                                className="w-full px-2 py-1 text-green-500 border border-gray rounded-md outline-none focus:border-green-100 transition-all duration-200 text-[14px] mt-1 "
                                {...register("confirmPassword", {
                                    required: "confirm password is required",
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
                            <p className="text-xs mt-[2px] text-red opacity-90 tracking-wide capitalize">
                                {errors.confirmPassword?.message}
                            </p>
                        )}
                    </div>
                    <div className="w-full max-w-md mx-auto mt-4 flex justify-start items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            className="mr-1 border-r-green-100 outline-green-100"
                            checked={terms}
                            onClick={() => setTerms(!terms)}
                        />
                        <label
                            htmlFor="terms"
                            className="capitalize text-xs  text-green-100 opacity-90"
                        >
                            Accept all term's and conditions
                        </label>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button
                            className="bg-green-100 border border-green-100 text-white w-full max-w-[150px] rounded-3xl py-2 text-xs sm:text-sm uppercase tracking-wide font-medium transition-all duration-200 hover:bg-green-200 disabled:bg-gray disabled:text-black disabled:border-gray disabled:opacity-50"
                            type="submit"
                            disabled={!terms}
                        >
                            sign up
                        </button>
                    </div>
                    <p className="text-center text-xs capitalize mt-2">
                        already have an account{" "}
                        <Link
                            to="/login"
                            className="text-red underline hover:text-green-100"
                        >
                            login
                        </Link>
                    </p>
                </form>

                <div className="flex flex-col-reverse sm:flex-row justify-center items-center mb-4 gap-y-3 sm:gap-y-0 sm:gap-x-4 pt-8 px-4">
                    <button
                        className="bg-gray border border-gray text-black px-4 xs:px-8 rounded-3xl py-2 text-xs sm:text-sm uppercase tracking-wide font-medium transition-all duration-200 hover:bg-green-200 hover:text-white flex  items-center"
                        type="submit"
                    >
                        <FaFacebook className="text-lg xs:text-xl font-medium mr-[2px]" />
                        <span className="">with facebook</span>
                    </button>
                    <button className="bg-gray border border-gray text-black px-4 xs:px-8 rounded-3xl py-2 text-xs sm:text-sm uppercase tracking-wide font-medium transition-all duration-200 hover:bg-green-200 hover:text-white flex  items-center">
                        <AiOutlineGoogle className=" text-lg xs:text-xl font-medium mr-[2px]" />
                        <span className=""> with google</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SignupPage;
