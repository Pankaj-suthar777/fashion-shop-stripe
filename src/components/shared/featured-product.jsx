import React from "react";
import "./featured-product-style.scss";

const FeaturedProduct = ({ product }) => {
  const { title, imageurl, price } = product;
  return (
    <div className="featured-product">
      <div className="featured-image">
        <img src={imageurl} alt="" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>$ {price}</p>
        <button className="button is-black nomad-btn">ADD TO CART</button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
