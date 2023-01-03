// uso de react router dom
import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import dataAdmin from "../db/dataAdmin";

// hook

const AuthContext = createContext(); // provider que encansula los component (nav y rutas)
// component provider a toda las components
// nav y rutas (children)
function AuthProvider({ children }) {
    const navigate = useNavigate();
    //
    const [user, setUser] = useState(null);
    //
    const login = ({ username }) => {
        const isAdmin = dataAdmin.find((admin) => admin === username);
        setUser({ username, isAdmin });
        navigate("/profile");
    };
    //
    const logout = () => {
        setUser(null);
        navigate("/");
    };
    //
    const values = { user, login, logout };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
}
// acceso a usuario logeados
function AuthRouter({ children }) {
    const auth = useContext(AuthContext);
    if (!auth.user) {
        return <Navigate to="/login" />;
    }
}
// atajo de usecontext
function useAuth() {
    const auth = useContext(AuthContext);
    return auth;
}
//
export { AuthProvider, AuthRouter, useAuth };
