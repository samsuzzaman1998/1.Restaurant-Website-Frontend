import React from "react";
import pic from "../../../assets/user.png";

const UserProfileCard = ({ currentUser }) => {
    const { name, email, contact, location, avatar, role } = currentUser;
    return (
        <section className=" w-full max-w-[550px] mx-auto">
            <div className="flex flex-col min-[1024px]:flex-row gap-y-4 min-[1024px]:gap-y-0 min-[1024px]:gap-x-3 items-center shadow-2xl rounded mt-16 p-3 sm:p-4 bg-gradient-to-r from-green-200 to-green-100 ">
                <img
                    src={avatar}
                    alt="avatar"
                    className=" rounded-sm w-full h-full max-w-[100px]  max-h-[100px] "
                />

                <div className="text-white tracking-wide ">
                    <h4 className="text-sm sm:text-base capitalize ">
                        <span className="mr-[2px] text-gray">name:</span>
                        <span className="text-white">{name}</span>
                    </h4>
                    <h6 className="text-sm sm:text-base capitalize">
                        <span className="mr-[2px] text-gray ">role:</span>
                        <span className=""> {role}</span>
                    </h6>
                    <h5 className="text-sm sm:text-base">
                        <span className="mr-[2px] text-gray capitalize">
                            email:
                        </span>
                        {email}
                    </h5>
                    <h5 className="text-sm sm:text-base">
                        <span className="mr-[2px] text-gray capitalize">
                            contact:
                        </span>
                        {contact}
                    </h5>
                    <h5 className="text-sm sm:text-base capitalize">
                        <span className="mr-[2px] text-gray capitalize">
                            location:
                        </span>
                        {location}
                    </h5>
                </div>
            </div>
        </section>
    );
};

export default UserProfileCard;
