import React, { useContext } from "react";
import shoppingBag from "../../assets/shopping-bag.png";
import "./cart-icon-styles.scss";
import { CartContext } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const { itemCount, cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div className="cart-container" onClick={() => navigate("/cart")}>
      <img src={shoppingBag} alt="shoopin-cart-img" className="img" />
      {itemCount > 0 ? <span className="cart-count">{itemCount}</span> : null}
    </div>
  );
};

export default CartIcon;
