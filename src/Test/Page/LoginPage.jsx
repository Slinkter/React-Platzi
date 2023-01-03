import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../provider/auth";

const LoginPage = () => {
    const values = useAuth();
    const [username, setUsername] = useState("");
    const login = (e) => {
        e.preventDefault();
        values.login({ username });
    };

    if (values.user) {
        return <Navigate to="/profile" />;
    }

    console.log("values : ", values);

    return (
        <React.Fragment>
            <h1>Login</h1>
            <form onSubmit={login}>
                <label>Escribe tu nombre para inicial session</label>
                <br />
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <button type="submit">Entrar</button>
            </form>
        </React.Fragment>
    );
};

export default LoginPage;
