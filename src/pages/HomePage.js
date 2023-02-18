import React from "react";
import HomeHero from "../components/nonShared/HomePageCom/HomeHero";
import HotDeal from "../components/nonShared/HomePageCom/HotDeal";
import PopularFoods from "../components/nonShared/HomePageCom/PopularFoods";
import Testimonial from "../components/nonShared/HomePageCom/Testimonial";
import WhyChoose from "../components/nonShared/HomePageCom/WhyChoose";

const HomePage = () => {
    return (
        <div>
            <HomeHero />
            <WhyChoose />
            <PopularFoods />
            <HotDeal />
            <Testimonial />
        </div>
    );
};

export default HomePage;
