import React from "react";
import SHOP_DATA from "../../shop";
import { useParams } from "react-router-dom";
import Layout from "../shared/layout";
import "./SingleProduct.scss";

const SingleProduct = () => {
  const { id } = useParams();
  const product = SHOP_DATA.find((product) => product.id === Number(id));
  console.log(product);
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
            <button
              className="button is-white nomad-btn"
              id="btn-white-outline"
              style={{ width: "100%" }}
            >
              ADD TO CART
            </button>
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
