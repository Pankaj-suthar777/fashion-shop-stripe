import React, { useContext } from "react";
import "./featured-product-style.scss";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart-context";
import { isInCart } from "../../helper";

const FeaturedProduct = ({ product }) => {
  const { title, imageurl, price, id } = product;
  const navigate = useNavigate();
  const { addProduct, cartItems, increase } = useContext(CartContext);

  return (
    <div className="featured-product">
      <div className="featured-image" onClick={() => navigate(`/shop/${id}`)}>
        <img src={imageurl} alt="" style={{ cursor: "pointer" }} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>$ {price}</p>
        {!isInCart(product, cartItems) && (
          <button
            className="button is-black nomad-btn"
            style={{ width: "100%" }}
            onClick={() => addProduct(product)}
          >
            ADD TO CART
          </button>
        )}
        {isInCart(product, cartItems) && (
          <button
            className="button is-white nomad-btn"
            style={{ width: "100%" }}
            onClick={() => increase(product)}
          >
            ADD MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;
