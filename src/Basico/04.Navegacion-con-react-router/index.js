import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import BlogPage from "./Page/BlogPage";
import BlogPost from "./Page/BlogPost";
import HomePage from "./Page/HomePage";
import LoginPage from "./Page/LoginPage";
import LogoutPage from "./Page/LogoutPage";
import Menu from "./Page/Menu";
import ProfilePage from "./Page/ProfilePage";
import { AuthProvider } from "./provider/auth";

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
                <AuthProvider>
                    <Menu />

                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/blog" element={<BlogPage />}>
                            <Route path=":slug" element={<BlogPost />} />
                        </Route>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/logout" element={<LogoutPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="*" element={<p> Not Found </p>} />
                    </Routes>
                </AuthProvider>
            </HashRouter>
        </React.Fragment>
    );
};

export default index;
