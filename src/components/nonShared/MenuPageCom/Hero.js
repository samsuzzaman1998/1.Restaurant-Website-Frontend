import React from "react";
import heroBG from "../../../assets/MenuPageBG.jpg";
import CommonHero from "../../shared/CommonHero";

const Hero = () => {
    const heroData = {
        heroBG: heroBG,
        heroText: "restaurant's food list",
    };
    return <CommonHero heroData={heroData} />;
};

export default Hero;
