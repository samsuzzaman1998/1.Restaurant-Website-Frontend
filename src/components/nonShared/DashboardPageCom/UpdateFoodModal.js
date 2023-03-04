import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateFoodModal = ({ food, setShowUpdateFoodModal, refetch }) => {
    const [titleLen, setTitleLen] = useState(0);
    const [desLen, setDesLen] = useState(0);
    const [thumbError, setThumbError] = useState(false);
    const [thumbLoading, setThumbLoading] = useState(false);
    const [prevThumb, setPrevThumb] = useState(food?.thumbnail);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { title, description, price } = data;
        let updateFood;

        // file size and updoading
        const thumbFile = data?.thumbURL[0];
        if (thumbFile?.name) {
            if (thumbFile.size > 2 && thumbFile.size < 4000000) {
                setThumbError(false);
                setThumbLoading(true);
                const data = new FormData();
                data.append("file", thumbFile);
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
                setPrevThumb(result?.secure_url);
                setThumbLoading(false);

                // Posting Food Object
                updateFood = {
                    title,
                    description,
                    price: +price,
                    thumbnail: result?.secure_url,
                };
            } else {
                setThumbError(true);
            }
        } else {
            // Posting Food Object
            updateFood = {
                title,
                description,
                price: +price,
            };
        }
        // Finally posting  data
        try {
            const token = localStorage.getItem("access-token");
            const config = {
                headers: { authorization: `Bearer ${token}` },
            };
            const response = await axios.put(
                `http://localhost:3001/api/v1/food/update-food/${food?._id}`,
                updateFood,
                config
            );
            if (response?.data?.status) {
                refetch();
                toast.success(response?.data?.message);
            }
        } catch (error) {
            console.log(error);
            toast.warn("something went wrong");
        }
        setShowUpdateFoodModal(false);
    };

    return (
        <div>
            <input
                type="checkbox"
                id="update_food_modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle bg-black bg-opacity-50">
                <div className="modal-box sm:max-w-[800px] max-h-[500px] overflow-y-auto">
                    <h3 className="text-center uppercase font-medium text-green-400 opacity-90 mb-6 lg:mb-8 ">
                        Update: {food?.title}
                    </h3>
                    <div className="modal-action flex justify-center items-center mt-3">
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
                                        defaultValue={food?.title}
                                        {...register("title", {
                                            minLength: {
                                                value: 5,
                                                message:
                                                    "title be atleast 5 character",
                                            },
                                            maxLength: {
                                                value: 30,
                                                message:
                                                    "title be max 30 character",
                                            },
                                        })}
                                        onChange={(e) =>
                                            setTitleLen(e.target.value.length)
                                        }
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
                                        defaultValue={food?.description}
                                        {...register("description", {
                                            minLength: {
                                                value: 50,
                                                message:
                                                    "description be atleast 50 characters",
                                            },
                                            maxLength: {
                                                value: 150,
                                                message:
                                                    "description be max 150 characters",
                                            },
                                        })}
                                        onChange={(e) =>
                                            setDesLen(e.target.value.length)
                                        }
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
                                        defaultValue={food?.price}
                                        {...register("price", {
                                            minLength: {
                                                value: 2,
                                                message:
                                                    "price value be atleast 5 character",
                                            },
                                            maxLength: {
                                                value: 10,
                                                message:
                                                    "price be max 10 character",
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
                                        {...register("thumbURL")}
                                    />
                                    <div className="flex justify-between items-center">
                                        <p className="text-center text-xs capitalize mt-2 text-black opacity-70 ">
                                            Minimum 20kb
                                        </p>
                                        <p className="text-center text-xs capitalize mt-2 text-black opacity-70 ">
                                            Maximum 4MB
                                        </p>
                                    </div>
                                    {thumbError && (
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
                                        update
                                    </button>
                                </div>
                            </form>
                            {/* preview */}
                            {thumbLoading ? (
                                <div className="w-full max-w-[300px] mx-auto text-center text-lg font-semibold text-green-200">
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
                                        Food's Photo
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateFoodModal;
