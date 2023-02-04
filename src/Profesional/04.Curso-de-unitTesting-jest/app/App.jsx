import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";

// http://localhost:3000/#/new
// http://localhost:3000/#/profile
const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<p>new</p>} />
                <Route path="/profile" element={<p>profile</p>} />
                <Route path="/edit/:id" element={<p>edit</p>} />
                <Route path="/*" element={<p>Not found</p>} />
            </Routes>
        </HashRouter>
    );
};

export default App;
