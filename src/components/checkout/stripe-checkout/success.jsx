import React, { useContext, useEffect } from "react";
import { CartContext } from "../../../context/cart-context";
import { useNavigate } from "react-router-dom";
import Layout from "../../shared/layout";

const Success = () => {
  const navigate = useNavigate();
  const { clearCart, cartItems } = useContext(CartContext);
  useEffect(() => {
    if (cartItems.length !== 0) {
      clearCart();
    }
  }, [clearCart, cartItems]);
  return (
    <Layout>
      <div className="checkout">
        <h1>Thank you for your order</h1>
        <p>
          We are currently processing your order and will send you a
          confirmation email shortyly
        </p>
        <div onClick={() => navigate("/shop")}>
          <button className="button is-black nomad-btn submit">
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
