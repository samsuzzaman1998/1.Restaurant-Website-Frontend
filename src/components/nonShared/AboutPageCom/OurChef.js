import React from "react";
import Slider from "react-slick";
import { chefData } from "../../../database/AboutPageData";
import Chef from "./Chef.js";

const OurChef = () => {
    // slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplaySpeed: 4000,
        autoplay: true,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section className="w-full max-w-7xl mx-auto px-3 xs:px-5 sm:px-8 md:px-8 xl:px-0 mt-28 mb-24">
            <h2 className="text-green-100 text-lg sm:text-xl md:text-2xl uppercase font-medium tracking-wide text-center mb-6 sm:mb-10">
                our chef's
            </h2>
            <Slider {...settings}>
                {chefData.map((chef) => {
                    return <Chef key={chef._id} chef={chef} />;
                })}
            </Slider>
        </section>
    );
};

export default OurChef;

// Two Controller Button (to hide them)
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}
