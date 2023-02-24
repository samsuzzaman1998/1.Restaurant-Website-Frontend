import React, { useState } from "react";
import { useForm } from "react-hook-form";
import demo from "../../assets/food.png";

const AddFoodPage = () => {
    const [titleLen, setTitleLen] = useState(0);
    const [desLen, setDesLen] = useState(0);
    const [avatarError, setAvatarError] = useState(false);
    const [thumbLoading, setThumbLoading] = useState(false);
    const [prevThumb, setPrevThumb] = useState(demo);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <section className="py-8 sm:py-12">
            <h3 className="text-center uppercase font-medium text-green-100 opacity-90 mb-6 lg:mb-8 ">
                add new food
            </h3>
            <div className="w-full flex flex-col-reverse sm:flex-row justify-center  sm:gap-y-0 sm:gap-4 md:gap-x-16">
                <form
                    className="xs:mb-8 xs:shadow-lg py-6 sm:p-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* title */}
                    <div className="w-full max-w-md mx-auto mt-4">
                        <div className="flex justify-between items-center">
                            <label
                                htmlFor="title"
                                className="capitalize text-xs  text-black opacity-90 mr-1"
                            >
                                Food title
                            </label>
                            <span className="text-[10px] text-black opacity-70">
                                {titleLen}/30
                            </span>
                        </div>
                        <input
                            type="text"
                            placeholder="Text"
                            id="title"
                            className="w-full px-2 py-1 text-green-500 border border-gray rounded-md outline-none focus:border-green-100 transition-all duration-200 text-[14px] mt-1"
                            {...register("title", {
                                required: "food title is required",
                                minLength: {
                                    value: 5,
                                    message: "title be atleast 5 character",
                                },
                                maxLength: {
                                    value: 30,
                                    message: "title be max 30 character",
                                },
                            })}
                            onChange={(e) => setTitleLen(e.target.value.length)}
                        />
                        {errors.title && (
                            <p className="text-xs mt-[2px] text-red opacity-90 tracking-wide capitalize">
                                {errors.title?.message}
                            </p>
                        )}
                    </div>

                    {/* description */}
                    <div className="w-full max-w-md mx-auto mt-4">
                        <div className="flex justify-between items-center">
                            <label
                                htmlFor="description"
                                className="capitalize text-xs  text-black opacity-90 mr-1"
                            >
                                Food Description
                            </label>
                            <span className="text-[10px] text-black opacity-70">
                                {desLen}/150
                            </span>
                        </div>
                        <textarea
                            name=""
                            id="description"
                            placeholder="Text"
                            className="w-full px-2 py-1 text-green-500 border border-gray rounded-md outline-none focus:border-green-100 transition-all duration-200 text-[14px] mt-1"
                            cols="30"
                            rows="8"
                            {...register("description", {
                                required: "a description is required",
                                minLength: {
                                    value: 5,
                                    message:
                                        "description be atleast 50 characters",
                                },
                                maxLength: {
                                    value: 30,
                                    message: "title be max 150 characters",
                                },
                            })}
                            onChange={(e) => setDesLen(e.target.value.length)}
                        ></textarea>
                        {errors.description && (
                            <p className="text-xs mt-[2px] text-red opacity-90 tracking-wide capitalize">
                                {errors.description?.message}
                            </p>
                        )}
                    </div>

                    {/* Price */}
                    <div className="w-full max-w-md mx-auto mt-4">
                        <div className="flex justify-between items-center">
                            <label
                                htmlFor="price"
                                className="capitalize text-xs  text-black opacity-90 mr-1"
                            >
                                Food Price
                            </label>
                        </div>
                        <input
                            type="text"
                            placeholder="Price"
                            id="price"
                            className="w-full px-2 py-1 text-green-500 border border-gray rounded-md outline-none focus:border-green-100 transition-all duration-200 text-[14px] mt-1"
                            {...register("price", {
                                required: "food price is required",
                                minLength: {
                                    value: 2,
                                    message:
                                        "price value be atleast 5 character",
                                },
                                maxLength: {
                                    value: 4,
                                    message: "price be max 4 character",
                                },
                            })}
                        />
                        {errors.price && (
                            <p className="text-xs mt-[2px] text-red opacity-90 tracking-wide capitalize">
                                {errors.price?.message}
                            </p>
                        )}
                    </div>

                    {/* Avatar */}
                    <div className="w-full max-w-md mx-auto mt-4">
                        <label
                            htmlFor="avatarURL"
                            className="capitalize text-xs  text-black"
                        >
                            food photo
                        </label>
                        <input
                            type="file"
                            placeholder="URL"
                            id="avatarURL"
                            className="w-full px-2 py-1 text-black capitalize border border-gray rounded-md outline-none transition-all duration-200 text-[14px] mt-1"
                            {...register("avatarURL")}
                        />
                        <div className="flex justify-between items-center">
                            <p className="text-center text-xs capitalize mt-2 text-black opacity-70 ">
                                Minimum 20kb
                            </p>
                            <p className="text-center text-xs capitalize mt-2 text-black opacity-70 ">
                                Maximum 2MB
                            </p>
                        </div>
                        {avatarError && (
                            <p className="text-left text-xs capitalize mt-2 text-red opacity-70 font-semibold">
                                Notice: Enter proper sized file
                            </p>
                        )}
                    </div>

                    {/* submit button */}
                    <div className="flex justify-center items-center mt-8">
                        <button
                            className="bg-green-100 border border-green-100 text-white  px-4 md:px-6 rounded-3xl py-1 text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 hover:bg-green-200 "
                            type="submit"
                        >
                            add food
                        </button>
                    </div>
                </form>
                {/* preview */}
                {thumbLoading ? (
                    <div className="w-full max-w-[150px] h-full rounded-full mx-auto text-center text-lg font-semibold text-white">
                        Loading...
                    </div>
                ) : (
                    <div className="text-center">
                        <img
                            src={prevThumb}
                            alt="avatar"
                            className="w-full max-w-[300px]  rounded-md mx-auto border-2 border-gray p-[2px] mt-4"
                        />
                        <span className="text-[10px] font-medium text-black opacity-70 uppercase">
                            Food's Preview Photo
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AddFoodPage;
