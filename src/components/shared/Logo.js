import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link
            to="/"
            className="uppercase font-bold text-white xs:text-xl text-lg tracking-wide"
        >
            <span className="xs:text-3xl md:text-4xl text-xl">f</span>
            ood <span className="xs:text-3xl md:text-4xl text-xl">f</span>
            un
        </Link>
    );
};

export default Logo;
