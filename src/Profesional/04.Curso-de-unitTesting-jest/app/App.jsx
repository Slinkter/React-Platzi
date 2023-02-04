import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./containers/Home";

// http://localhost:3000/#/new
// http://localhost:3000/#/profile
const App = () => {
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new" element={<p>new</p>} />
                    <Route path="/profile" element={<p>profile</p>} />
                    <Route path="/edit/:id" element={<p>edit</p>} />
                    <Route path="/*" element={<p>Not found</p>} />
                </Routes>
            </Layout>
        </HashRouter>
    );
};

export default App;
