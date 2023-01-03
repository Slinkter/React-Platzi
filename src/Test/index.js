import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Menu from "./nav/Menu";
import BlogPage from "./Page/BlogPage";
import HomePage from "./Page/HomePage";
import LoginPage from "./Page/LoginPage";
import LogoutPage from "./Page/LogoutPage";
import NotFound from "./Page/NotFound";
import ProfilePage from "./Page/ProfilePage";
import { AuthProvider } from "./provider/auth";

const index = () => {
    return (
        <React.Fragment>
            <HashRouter>
                <AuthProvider>
                    <Menu />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/logout" element={<LogoutPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AuthProvider>
            </HashRouter>
        </React.Fragment>
    );
};

export default index;
