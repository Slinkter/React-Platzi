import React from "react";

const Products = (props) => {
    const { products } = props;
    const handleAddToCart = (product) => () => {
        props.addToCart(product);
    };

    return <div></div>;
};

export default Products;
