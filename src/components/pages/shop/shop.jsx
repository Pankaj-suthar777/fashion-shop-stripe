import React from "react";
import Layout from "../../shared/layout";
import "./shop.styles.scss";
import SHOP_DATA from "../../../shop";
import FeaturedProduct from "../../shared/featured-product";

const Shop = () => {
  const allProduct = SHOP_DATA.map((product) => (
    <FeaturedProduct product={product} key={product.id} />
  ));
  return (
    <Layout>
      <div className="product-list-container">
        <h2 className="product-list-title">Shop</h2>
        <div className="product-list">{allProduct}</div>
      </div>
    </Layout>
  );
};

export default Shop;
