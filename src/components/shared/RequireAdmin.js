import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import { userContext } from "../../Utils/Context/userContext";
import useCheckAdmin from "../../Utils/Hook/useCheckAdmin";
import Loading from "../shared/Loading";

const RequireAdmin = ({ children }) => {
    let location = useLocation();
    // const [gUser, gLoading, gError] = useAuthState(auth);
    const { user, userLoading } = useContext(userContext);
    const [isAdmin, adminLoading] = useCheckAdmin(user);

    if (adminLoading) {
        return <Loading />;
    }

    if (!isAdmin) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;
