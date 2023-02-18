import React from "react";
import SectionTitle from "../../shared/SecTitle";
import ChooseCard from "./ChooseCard";
import { chooseData } from "../../../database/HomePageData";

const WhyChoose = () => {
    // section title data
    const secTitleData = {
        title: "we focused on",
        subtitle:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, debitis",
    };
    return (
        <section className="px-3 xs:px-5 sm:px-8 md:px-8 xl:px-0 my-16 w-full max-w-7xl mx-auto">
            <SectionTitle
                title={secTitleData.title}
                subtitle={secTitleData.subtitle}
            />
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 justify-between items-center">
                {chooseData.map((choose) => {
                    return <ChooseCard choose={choose} />;
                })}
            </div>
        </section>
    );
};

export default WhyChoose;
