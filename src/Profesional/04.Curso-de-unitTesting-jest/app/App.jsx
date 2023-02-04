import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Checkout from "./containers/Checkout";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

// http://localhost:3000/#/new
// http://localhost:3000/#/profile
const App = () => {
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route exact path="/checkout" component={Checkout} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
};

export default App;
