import React from "react";
import { useAuth } from "../provider/auth";

const LogoutPage = () => {
    const auth = useAuth();

    const logout = (e) => {
        e.preventDefault();
        auth.logout();
    };
    return (
        <React.Fragment>
            <h1>Logout </h1>
            <form onSubmit={logout}>
                <label> Deseas salir ? </label>
                <button type="submit">Entrar</button>
            </form>
        </React.Fragment>
    );
};

export default LogoutPage;
