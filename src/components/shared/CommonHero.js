import React from "react";

const CommonHero = ({ heroData }) => {
    const { heroBG, heroText } = heroData;

    return (
        <section
            className="px-3 xs:px-5 sm:px-8 md:px-8 xl:px-0 mb-[60px] sm:mb-[100px] py-16 lg:py-28"
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${heroBG})`,
                backgroundPosition: "top",
                backgroundSize: "cover",
            }}
        >
            <div className="w-full max-w-7xl mx-auto">
                <h2 className="text-white text-center uppercase text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide">
                    {heroText}
                </h2>
            </div>
        </section>
    );
};

export default CommonHero;
