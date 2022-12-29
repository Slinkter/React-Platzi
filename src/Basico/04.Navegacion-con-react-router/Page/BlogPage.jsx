import React from "react";
import { Link } from "react-router-dom";
import blogdata from "../db/datablog";

const BlogPage = () => {
    return (
        <div>
            <h1>Lista de blog</h1>
            {blogdata.map((post) => (
                <BlogLink key={post.slug} post={post} />
            ))}
        </div>
    );
};

export default BlogPage;

const BlogLink = ({ post }) => {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    );
};
