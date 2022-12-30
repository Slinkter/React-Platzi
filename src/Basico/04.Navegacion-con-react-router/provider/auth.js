import React, { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const adminList = ["Liam", "Jhonny"];

const AuthContext = createContext();

function AuthProvider({ children }) {
    console.log("authprovider ejecutando");
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = ({ username }) => {
        const isAdmin = adminList.find((admin) => admin === username);

        setUser({ username, isAdmin });
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

function AuthRoute(props) {
    const auth = useContext(AuthContext);
    if (!auth.user) {
        return <Navigate to="/login" />;
    }
    return props.children;
}

export { AuthProvider, AuthRoute, useAuth };
