import React, { useContext } from "react";
import Card from "../../shared/Card";
import CommonButton from "../../shared/CommonButton";
import SectionTitle from "../../shared/SecTitle";
import { foodData } from "../../../database/HomePageData";

const PopularFoods = () => {
   

    const secData = {
        title: "our popular meals",
        subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, saepe",
    };
    return (
        <section className="w-full max-w-7xl mx-auto px-3 xs:px-5 sm:px-8 md:px-8 xl:px-0 my-16">
            <SectionTitle title={secData.title} subtitle={secData.subtitle} />
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-12">
                {foodData.map((food) => {
                    return <Card food={food} key={food._id} />;
                })}
            </div>
            <div className="flex justify-center mt-8">
                <CommonButton btnName="load more" />
            </div>
        </section>
    );
};

export default PopularFoods;
