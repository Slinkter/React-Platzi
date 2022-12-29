import React from "react";

const LogoutPage = () => {
    const logout = () => {};
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
