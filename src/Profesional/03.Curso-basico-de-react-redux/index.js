import React from "react";
import ReactDom from "react-dom";
import App from "./routes/App";

//
import { Provider } from "react-redux";
import { legacy_createStore, compose } from "redux";
//
import { reducer } from "./reducer/index";
//
import { initialState } from "./dbLocal/initialState";
//
const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()) ||
    compose;
const store = legacy_createStore(reducer, initialState, composeEnhancers);

const PAPP = (
    <Provider store={store}>
        <App />
    </Provider>
);

export default PAPP;
