import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../provider/auth";

const LoginPage = () => {
    const auth = useAuth();
    const [username, setUsername] = React.useState("");
    //
    const login = (e) => {
        e.preventDefault();
        auth.login({ username });
    };
    // si ya esta logeado re-direccionar
    if (auth.user) {
        return <Navigate to="/profile" />;
    }

    return (
        <React.Fragment>
            <h1>Login</h1>
            <form onSubmit={login}>
                <label> Escribe tu nombre de usuario</label>
                <br />
                <input
                    value={username}
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <button type="submit">Entrar</button>
            </form>
        </React.Fragment>
    );
};

export default LoginPage;
