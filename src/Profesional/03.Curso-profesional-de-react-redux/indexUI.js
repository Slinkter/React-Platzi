import React from "react";
import App from "./App";

import { pokemonsReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import {
    applyMiddleware,
    compose,
    legacy_createStore as createStore,
} from "redux";

import thunk from "redux-thunk";
import { logger } from "./middlewares";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const componsedEnhacers = composeAlt(applyMiddleware(thunk, logger));
const store = createStore(pokemonsReducer, componsedEnhacers);

const ProviderStore = (
    <Provider store={store}>
        <App />
    </Provider>
);

export default ProviderStore;
