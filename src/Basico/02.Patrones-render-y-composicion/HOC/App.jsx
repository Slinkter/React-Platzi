import React from "react";

const App = (props) => {
    return (
        <h1>
            {props.saludos} , {props.nombre}
        </h1>
    );
};

function HOCwithSaludos(externalComponent) {
    return function Component(props) {
        return (
            <div>
                <externalComponent {...props} />
                <p> parrafo que comparte con el externalComponent</p>
            </div>
        );
    };
}

const AppwithWhatEver = HOCwithSaludos(App);

export default AppwithWhatEver;
