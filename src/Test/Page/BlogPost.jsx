import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../provider/auth";

const BlogPost = () => {
    const values = useAuth();
    const navigate = useNavigate();
    const { slug } = useParams();
    

    return <div></div>;
};

export default BlogPost;
