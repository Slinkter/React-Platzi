import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <ul>
                {routes.map((route) => (
                    <li>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "blue",
                            })}
                            to={route.to}
                        >
                            {route.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const routes = [];
routes.push({
    to: "/",
    text: "Home",
});
routes.push({
    to: "/blog",
    text: "Blog",
});
routes.push({
    to: "/profile",
    text: "Profile",
});

export default Menu;

/*     <nav>
        <ul>
            <li>
                <NavLink
                    style={({ isActive }) => ({
                        color: isActive ? "red" : "blue",
                    })}
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
                <NavLink to="/profile">Profile</NavLink>
            </li>
        </ul>
    </nav>; 
    */
