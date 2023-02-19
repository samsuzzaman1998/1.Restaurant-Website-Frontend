import React, { useState } from "react";
import Card from "../../shared/Card";
import SectionTitle from "../../shared/SecTitle";
import { foodData } from "../../../database/HomePageData";
import { AiOutlineSearch } from "react-icons/ai";

const AllFoods = () => {
    const secData = {
        title: "our foods",
        subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, saepe",
    };

    // const [foodData, setFoodData] = useState(foodData);
    return (
        <section className="w-full max-w-7xl mx-auto px-3 xs:px-5 sm:px-8 md:px-8 xl:px-0 my-16">
            <SectionTitle title={secData.title} subtitle={secData.subtitle} />

            <form className="flex justify-center lg:justify-end items-center w-full mb-6">
                <input
                    type="text"
                    name="searchText"
                    id=""
                    placeholder="Enter Food Name"
                    className="outline-none border-[1px] border-green-100 px-2 py-[4px] rounded-tl-md rounded-bl-md text-green-500 text-xs md:text-sm w-full max-w-sm"
                />
                <button
                    className="outline-none border-[1px] border-green-100 px-3 py-[3px] md:py-[4px] rounded-tr-md rounded-br-md text-white bg-green-100 "
                    type="submit"
                >
                    <AiOutlineSearch size="1.24rem" />
                </button>
            </form>

            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-12">
                {foodData.map((food) => {
                    return <Card food={food} key={food._id} />;
                })}
            </div>
            <div className="flex justify-center mt-8 gap-[2px]">
                <button className="outline-none border-none bg-black bg-opacity-10 text-sm text-black px-3 py-1 rounded-md">
                    1
                </button>
                <button className="outline-none border-none bg-green-100 text-sm text-white px-3 py-1 rounded-md">
                    2
                </button>
                <button className="outline-none border-none bg-black bg-opacity-10 text-sm text-black px-3 py-1 rounded-md">
                    3
                </button>
            </div>
        </section>
    );
};

export default AllFoods;
