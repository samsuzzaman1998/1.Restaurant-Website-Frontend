import React from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "../../../database/HomePageData";
import Slider from "react-slick";
import SectionTitle from "../../shared/SecTitle";

const Testimonial = () => {
    // section data
    const secTitleData = {
        title: "our inspirations",
        subtitle:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, debitis",
    };
    // Slider Settings
    const settings = {
        dots: true,
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
        <section className="px-3 xs:px-5 sm:px-8 md:px-8 xl:px-0 my-16 w-full max-w-7xl mx-auto">
            <SectionTitle
                title={secTitleData.title}
                subtitle={secTitleData.subtitle}
            />
            <Slider {...settings}>
                {testimonialData.map((review) => {
                    return <TestimonialCard key={review._id} review={review} />;
                })}
            </Slider>
        </section>
    );
};

export default Testimonial;

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
