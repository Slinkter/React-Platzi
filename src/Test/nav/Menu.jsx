import React from "react";
import { useAuth } from "../provider/auth";

const router = [];
const r1 = {
    to: "/",
    text: "Home",
    private: false,
};
const r2 = {
    to: "/blog",
    text: "Blog",
    private: false,
};
const r3 = {
    to: "/login",
    text: "Login",
    private: false,
};
const r4 = {
    to: "/logout",
    text: "Logout",
    private: true,
};
const r5 = {
    to: "/profile",
    text: "Profile",
    private: true,
};

router.push(r1);
router.push(r2);
router.push(r3);
router.push(r4);
router.push(r5);

const Menu = () => {
    const auth = useAuth();
    console.log("Menu");
    console.log(auth);

    return (
        <nav>
            <ul></ul>
        </nav>
    );
};

export default Menu;
