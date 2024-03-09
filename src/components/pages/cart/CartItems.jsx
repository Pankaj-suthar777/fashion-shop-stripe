import React from "react";
import { MinusCircleIcon, PlusCircleIcon, TrashIcon } from "../../icons";

const CartItems = ({ product }) => {
  return (
    <div className="cart-item">
      <div className="item-image">
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
        <button className="btn-increase">
          <PlusCircleIcon width="20px" />
        </button>
        {product.quantity === 1 && (
          <button className="btn-trash">
            <TrashIcon width="20px" />
          </button>
        )}
        {product.quantity > 1 && (
          <button className="btn-decrease">
            <MinusCircleIcon width="20px" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItems;
