import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../provider/auth";

const ProfilePage = () => {
    const values = useAuth();
    if (!values.user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>Wellcome {values.user?.username}</p>
        </div>
    );
};

export default ProfilePage;
