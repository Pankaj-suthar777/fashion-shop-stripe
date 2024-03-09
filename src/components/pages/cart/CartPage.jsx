import React, { useContext } from "react";
import "./cart-page.scss";
import { CartContext } from "../../../context/cart-context";
import Layout from "../../shared/layout";
import CartItems from "./CartItems";
import Total from "./total";

const CartPage = () => {
  const {
    cartItems,
    itemCount,
    total,
    increase,
    decrease,
    removeProduct,
    clearCart,
  } = useContext(CartContext);
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
                  <CartItems
                    product={item}
                    key={item.id}
                    increase={increase}
                    decrease={decrease}
                    removeProduct={removeProduct}
                  />
                ))}
              </div>
              <Total
                itemCount={itemCount}
                total={total}
                clearCart={clearCart}
              />
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default CartPage;
