import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import { userContext } from "../../Utils/Context/userContext";
import Loading from "../shared/Loading";

const RequireAuth = ({ children }) => {
    let location = useLocation();
    const [gUser, gLoading, gError] = useAuthState(auth);
    const { user, userLoading } = useContext(userContext);

    if (gLoading || userLoading) {
        return <Loading />;
    }

    if (!gUser && !user?.status) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;
