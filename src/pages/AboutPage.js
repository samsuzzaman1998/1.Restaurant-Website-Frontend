import React from "react";
import AboutHero from "../components/nonShared/AboutPageCom/AboutHero";
import OurMission from "../components/nonShared/AboutPageCom/OurMission";
import OurVision from "../components/nonShared/AboutPageCom/OurVision";

const AboutPage = () => {
    return (
        <div>
            <AboutHero />
            <OurMission />
            <OurVision />
        </div>
    );
};

export default AboutPage;
