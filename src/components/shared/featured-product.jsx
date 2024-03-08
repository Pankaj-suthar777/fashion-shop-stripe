import React from "react";
import "./featured-product-style.scss";
import { useNavigate } from "react-router-dom";

const FeaturedProduct = ({ product }) => {
  const { title, imageurl, price, id } = product;
  const navigate = useNavigate();
  return (
    <div className="featured-product">
      <div className="featured-image" onClick={() => navigate(`/shop/${id}`)}>
        <img src={imageurl} alt="" style={{ cursor: "pointer" }} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>$ {price}</p>
        <button className="button is-black nomad-btn" style={{ width: "100%" }}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
