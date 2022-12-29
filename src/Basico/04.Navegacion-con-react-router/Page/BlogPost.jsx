import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import blogdata from "../db/datablog";

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const blogpost = blogdata.find((post) => post.slug === slug);

    const handleBtnReturnToBlog = () => {
        /* navigate("/blog"); */
        navigate(-1);
    };

    return (
        <div>
            <h2>{blogpost.title}</h2>
            <button onClick={handleBtnReturnToBlog}> Volver al blog</button>
            <p>Content:{blogpost.content}</p>
            <p>author: {blogpost.author}</p>
        </div>
    );
};

export default BlogPost;
