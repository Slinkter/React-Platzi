import React from "react";
import { useAuth } from "../provider/auth";

const ProfilePage = () => {
    const auth = useAuth();

    return (
        <>
            <h1>Perfile</h1>
            <p>welcome {auth.user.username}</p>
        </>
    );
};

export default ProfilePage;
