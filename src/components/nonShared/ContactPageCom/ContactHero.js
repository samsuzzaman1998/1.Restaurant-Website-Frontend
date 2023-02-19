import React from "react";
import CommonHero from "../../shared/CommonHero";
import contactBG from "../../../assets/contactBG.jpg";

const ContactHero = () => {
    const heroData = { heroBG: contactBG, heroText: "contact us" };
    return <CommonHero heroData={heroData} />;
};

export default ContactHero;
