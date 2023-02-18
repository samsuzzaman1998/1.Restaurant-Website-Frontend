import React from "react";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const TestimonialCard = ({ review }) => {
    const { _id, customerName, customerPhoto, comment, rating } = review;
    return (
        <div className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-200 rounded pb-4 relative group">
            <div className="rounded-tl rounded-tr text-lg w-full max-w-[100px] mx-auto">
                <img
                    src={customerPhoto}
                    alt="food"
                    className="w-full rounded-tl rounded-tr"
                />
            </div>

            <div className="mt-1 p-4">
                <h4 className="uppercase font-medium tracking-wide text-[16px] sm:text-lg text-green-200 text-center">
                    {customerName}
                </h4>
                <div className="flex justify-center mt-1">
                    <Rating
                        initialRating={rating}
                        emptySymbol={<AiOutlineStar />}
                        fullSymbol={<AiFillStar style={{ color: "#00B769" }} />}
                        readonly
                    ></Rating>
                </div>
                <p className="text-[13px] sm:text-sm text-justify  text-black opacity-90 mt-2">
                    {comment}
                </p>
            </div>
        </div>
    );
};

export default TestimonialCard;
