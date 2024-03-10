import React from "react";
import { MinusCircleIcon, PlusCircleIcon, TrashIcon } from "../../icons";
import { useNavigate } from "react-router-dom";

const CartItems = ({ product, increase, decrease, removeProduct }) => {
  const navigate = useNavigate();
  return (
    <div className="cart-item">
      <div
        className="item-image"
        onClick={() => navigate(`/shop/${product.id}`)}
      >
        <img src={product.imageurl} alt="" />
      </div>
      <div className="name-price">
        <h4>{product.title}</h4>
        <p>${product.price}</p>
      </div>
      <div className="quantity">
        <p>{`Quantity: ${product.quantity}`}</p>
      </div>
      <div className="btns-container">
        <button className="btn-increase" onClick={() => increase(product)}>
          <PlusCircleIcon width="20px" />
        </button>
        {product.quantity === 1 && (
          <button className="btn-trash" onClick={() => removeProduct(product)}>
            <TrashIcon width="20px" />
          </button>
        )}
        {product.quantity > 1 && (
          <button className="btn-decrease" onClick={() => decrease(product)}>
            <MinusCircleIcon width="20px" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItems;
