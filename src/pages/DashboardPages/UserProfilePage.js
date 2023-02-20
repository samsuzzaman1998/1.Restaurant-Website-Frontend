import React from "react";
import ChangePassword from "../../components/nonShared/DashboardPageCom/ChangePassword";
import UpdateProfileCard from "../../components/nonShared/DashboardPageCom/UpdateProfileCard";
import UserProfileCard from "../../components/nonShared/DashboardPageCom/UserProfileCard";
const UserProfilePage = () => {
    return (
        <>
            <div className="grid grid-cols-1 min-[550px]:grid-cols-2 justify-center items-end gap-x-6 lg:gap-x-8 gap-y-6 min-[550px]:gap-y-0">
                <UserProfileCard />
                <ChangePassword />
            </div>
            <UpdateProfileCard />
        </>
    );
};

export default UserProfilePage;
