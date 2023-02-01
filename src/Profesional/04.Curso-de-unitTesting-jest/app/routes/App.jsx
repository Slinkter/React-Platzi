import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Checkout from "../containers/Checkout";

import NotFound from "../containers/NotFound";

const App = () => (
    <HashRouter>
        <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
        </Routes>
    </HashRouter>
);

export default App;
