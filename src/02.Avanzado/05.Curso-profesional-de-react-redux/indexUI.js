// librerias
import React from "react";
import { Provider } from "react-redux";
import { compose, applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
// Desarrollo
import { pokemonsReducer } from "./tools/reducer";
import { logger } from "./tools/middlewares";
// componente
import App from "./App";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // redux
const componsedEnhacers = composeAlt(applyMiddleware(thunk, logger)); //redux
const store = legacy_createStore(pokemonsReducer, componsedEnhacers); // redux
//
const ProviderStore = (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ProviderStore;
