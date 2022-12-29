import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
    console.log("authprovider ejecutando");
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = ({ username }) => {
        setUser({ username });
        navigate("/profile");
    };

    const logout = () => {
        setUser(null);
        navigate("/");
    };

    const auth = { user, login, logout };

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
    const auth = useContext(AuthContext);
    return auth;
}

export { AuthProvider, useAuth };
