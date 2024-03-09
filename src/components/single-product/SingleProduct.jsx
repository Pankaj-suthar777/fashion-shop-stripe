import React, { useContext } from "react";
import SHOP_DATA from "../../shop";
import { useParams } from "react-router-dom";
import Layout from "../shared/layout";
import "./SingleProduct.scss";
import { isInCart } from "../../helper";
import { CartContext } from "../../context/cart-context";

const SingleProduct = () => {
  const { id } = useParams();
  const product = SHOP_DATA.find((product) => product.id === Number(id));
  const { addProduct, cartItems, increase } = useContext(CartContext);
  return (
    <Layout>
      <div className="single-product-conatainer">
        <div className="product-image">
          <img src={product?.imageurl} alt="" />
        </div>
        <div className="product-details">
          <div className="name-price">
            <h3>{product?.title}</h3>
            <p>$ {product?.price}</p>
          </div>
          <div className="add-to-cart-btns">
            {!isInCart(product, cartItems) ? (
              <button
                className="button is-white nomad-btn"
                id="btn-white-outline"
                style={{ width: "100%" }}
                onClick={() => addProduct(product)}
              >
                ADD TO CART
              </button>
            ) : (
              <button
                className="button is-white nomad-btn"
                id="btn-white-outline"
                style={{ width: "100%" }}
                onClick={() => {
                  increase(product);
                }}
              >
                ADD MORE
              </button>
            )}

            <button
              className="button is-black nomad-btn"
              id="btn-white-outline"
              style={{ width: "100%" }}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="product-description">
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
