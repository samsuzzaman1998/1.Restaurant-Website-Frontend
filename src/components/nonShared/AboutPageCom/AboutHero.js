import React from "react";
import CommonHero from "../../shared/CommonHero";
import aboutBG from "../../../assets/aboutBG.jpg";

const AboutHero = () => {
    const heroData = { heroBG: aboutBG, heroText: "about us" };
    return <CommonHero heroData={heroData} />;
};

export default AboutHero;
