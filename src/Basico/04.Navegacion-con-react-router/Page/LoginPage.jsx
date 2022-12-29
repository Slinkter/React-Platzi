import React from "react";
import { useAuth } from "../provider/auth";

const LoginPage = () => {
    const auth = useAuth();
    const [username, setUsername] = React.useState("");

    const login = () => {
        setUsername({});
    };

    return (
        <React.Fragment>
            <h1>Login</h1>
            <form onSubmit={login}>
                <label> Escribe tu nombre de usuario</label>

                <input
                    value={username}
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </React.Fragment>
    );
};

export default LoginPage;
