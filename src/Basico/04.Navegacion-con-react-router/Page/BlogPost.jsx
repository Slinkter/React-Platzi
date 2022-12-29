import React from "react";
import { useParams } from "react-router-dom";
import blogdata from "../db/datablog";

const BlogPost = () => {
    const { slug } = useParams();

    const blogpost = blogdata.find((post) => post.slug === slug);

    return (
        <div>
            <h2>{blogpost.title}</h2>
            <p>Content:{blogpost.content}</p>
            <p>author: {blogpost.author}</p>
        </div>
    );
};

export default BlogPost;
