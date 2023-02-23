import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ChangePassword from "../../components/nonShared/DashboardPageCom/ChangePassword";
import UpdateProfileCard from "../../components/nonShared/DashboardPageCom/UpdateProfileCard";
import UserProfileCard from "../../components/nonShared/DashboardPageCom/UserProfileCard";
import auth from "../../firebase.init";
import { userContext } from "../../Utils/Context/userContext";
import Loading from "../../components/shared/Loading";
import { toast } from "react-toastify";

const UserProfilePage = () => {
    const [gUser, gLoading, gError] = useAuthState(auth); // google user
    const { user, userError, userLoading } = useContext(userContext); // custom user

    // creating object
    const currentUser = {
        avatar: user?.avatar || gUser?.photoURL || "N/A",
        contact: user?.contact || gUser?.contact || "N/A",
        email: user?.email || gUser?.email || "N/A",
        location: user?.location || gUser?.location || "N/A",
        name: user?.name || gUser?.displayName || "N/A",
        role: user?.role || gUser?.role || "User",
        terms: user?.terms || gUser?.terms || "N/A",
    };

    if (gLoading || userLoading) {
        return <Loading />;
    }

    if (gError || userError) {
        toast.info(gError?.message || userError?.message);
    }

    return (
        <>
            <div className="grid grid-cols-1 min-[550px]:grid-cols-2 justify-center items-end gap-x-6 lg:gap-x-8 gap-y-6 min-[550px]:gap-y-0 mb-28">
                <UserProfileCard currentUser={currentUser} />

                <fieldset
                    disabled={gUser?.providerId === "firebase" ? true : false}
                >
                    <ChangePassword currentUser={currentUser} />
                </fieldset>
            </div>
            <fieldset
                disabled={gUser?.providerId === "firebase" ? true : false}
            >
                <UpdateProfileCard currentUser={currentUser} />
            </fieldset>
        </>
    );
};

export default UserProfilePage;
