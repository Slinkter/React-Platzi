import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
    console.log("authprovider ejecutando");
    const [user, setUser] = useState(null);

    const login = ({ username }) => {
        setUser({ username });
    };

    const logout = () => {
        setUser(null);
    };

    const auth = { user, login, logout };

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
    const auth = useContext(AuthContext);
    return auth;
}

export { AuthProvider, useAuth };
