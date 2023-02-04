import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
//
import reducer from "./reducers";
import initialState from "./data/initialState";
import App from "./App";
//
const store = createStore(reducer, initialState);
const componentProvider = (
    <Provider store={store}>
        <App />
    </Provider>
);

export default componentProvider;
