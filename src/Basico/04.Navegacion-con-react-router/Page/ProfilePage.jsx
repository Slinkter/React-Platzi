import React from "react";
import { useAuth } from "../provider/auth";
import { Navigate } from "react-router-dom";

const ProfilePage = () => {
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <h1>Perfile</h1>
            <p>welcome {auth.user?.username}</p>
        </>
    );
};

export default ProfilePage;
