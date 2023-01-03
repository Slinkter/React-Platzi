import React from "react";
import { useAuth } from "../provider/auth";

const LogoutPage = () => {
    const values = useAuth();
    const login = (e) => {
        e.preventDefault();
        values.logout();
    };

    console.log("values : ", values);

    return (
        <React.Fragment>
            <h1>Logout</h1>
            <form onSubmit={login}>
                <label>Desea salir?</label>
                <br />

                <button type="submit">Salir</button>
            </form>
        </React.Fragment>
    );
};

export default LogoutPage;
