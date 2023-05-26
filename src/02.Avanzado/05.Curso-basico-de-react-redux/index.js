import React from "react";
import App from "./routes/App";
//
import { Provider } from "react-redux";
import { legacy_createStore, compose } from "redux";
import { reducer } from "./reducer/index";
import { initialState } from "./dbLocal/initialState";
const wx = window.__REDUX_DEVTOOLS_EXTENSION__;
const wy = window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = (wx && wy) || compose;
const store = legacy_createStore(reducer, initialState, composeEnhancers);

const PAPP = (
    <Provider store={store}>
        <App />
    </Provider>
);

export default PAPP;
