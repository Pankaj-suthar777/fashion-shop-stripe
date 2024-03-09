import React, { useContext } from "react";
import "./checkout-style.scss";
import { CartContext } from "../../context/cart-context";
import Layout from "../shared/layout";
import StripeCheckout from "./stripe-checkout/StripeCheckout";

const Checkout = () => {
  const { itemCount, total } = useContext(CartContext);
  return (
    <Layout>
      <div className="checkout">
        <h2>Checkout Summary</h2>
        <h3>{`Total items: ${itemCount}`}</h3>
        <h4>{`Amount to Pay: $${total}`}</h4>
        <StripeCheckout />
      </div>
    </Layout>
  );
};

export default Checkout;
