import React from "react";
import pic from "../../assets/user.png";
const UserProfilePage = () => {
    return (
        <section className="flex justify-center">
            <div className="w-full max-w-[400px] shadow-2xl rounded mt-16 p-3 sm:p-8 bg-gradient-to-r from-green-200 to-green-100">
                <div className=" flex justify-center mt-[-40px] sm:mt-[-80px] mb-4 sm:mb-8">
                    <img
                        src={pic}
                        alt="avatar"
                        className="w-full max-w-[60px] max-h-[60px] sm:max-w-[100px] sm:max-h-[100px] rounded-full border border-green-100 pt-1"
                    />
                </div>
                <div className="text-white tracking-wide">
                    <h4 className="text-sm sm:text-base md:text-lg capitalize ">
                        <span className="mr-[2px] text-gray">name:</span>
                        <span className="text-white">customer name</span>
                    </h4>
                    <h6 className="text-sm sm:text-base md:text-lg capitalize">
                        <span className="mr-[2px] text-gray ">role:</span>
                        <span className="">general user</span>
                    </h6>
                    <h5 className="text-sm sm:text-base md:text-lg">
                        <span className="mr-[2px] text-gray capitalize">
                            email:
                        </span>
                        demoemail@gmail.com
                    </h5>
                </div>
            </div>
        </section>
    );
};

export default UserProfilePage;
