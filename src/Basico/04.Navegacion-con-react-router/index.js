import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import BlogPage from "./Page/BlogPage";
import BlogPost from "./Page/BlogPost";
import HomePage from "./Page/HomePage";
import Menu from "./Page/Menu";
import ProfilePage from "./Page/ProfilePage";

/*
    /#/
    /#/blog
    /#/profile
    /#/dasdasdadsa


*/

const index = () => {
    return (
        <React.Fragment>
            <HashRouter>
                <Menu />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blog" element={<BlogPage />}>
                        <Route path=":slug" element={<BlogPost />} />
                    </Route>

                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="*" element={<p> Not Found </p>} />
                </Routes>
            </HashRouter>
        </React.Fragment>
    );
};

export default index;
