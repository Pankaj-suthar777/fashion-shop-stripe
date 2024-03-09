import React, { useContext } from "react";
import "./cart-page.scss";
import { CartContext } from "../../../context/cart-context";
import Layout from "../../shared/layout";
import CartItems from "./CartItems";
import Total from "./total";

const CartPage = () => {
  const { cartItems, itemCount, total } = useContext(CartContext);
  return (
    <Layout>
      <>
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <div className="empty-cart">Your Cart is empty</div>
        ) : (
          <>
            <div className="cart-page">
              <div className="cart-item-container">
                {cartItems.map((item) => (
                  <CartItems product={item} key={item.id} />
                ))}
              </div>
              <Total itemCount={itemCount} total={total} />
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default CartPage;
