import React from "react";
import HomeHero from "../components/nonShared/HomePageCom/HomeHero";
import PopularFoods from "../components/nonShared/HomePageCom/PopularFoods";
import WhyChoose from "../components/nonShared/HomePageCom/WhyChoose";

const HomePage = () => {
    return (
        <div>
            <HomeHero />
            <WhyChoose />
            <PopularFoods />
        </div>
    );
};

export default HomePage;
