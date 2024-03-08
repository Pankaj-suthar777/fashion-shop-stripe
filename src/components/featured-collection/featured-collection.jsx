import React from "react";
import SHOP_DATA from "../../shop/index";
import FeaturedProduct from "../shared/featured-product";

const FeaturedCollection = () => {
  const productItems = SHOP_DATA.filter((product, i) => i < 4).map(
    (product) => <FeaturedProduct product={product} key={product.id} />
  );
  return (
    <div className="featured-collection container">
      <h2 className="featured-section-title">Featured Collections</h2>
      <div className="products">{productItems}</div>
    </div>
  );
};

export default FeaturedCollection;
