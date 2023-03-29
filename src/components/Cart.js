import React, { createContext, useContext } from 'react'
import { CartContext } from '../Global/CartContext'

export default function Cart() {
  const {shoppingCart , totalPrice , qty , dispatch}= useContext(CartContext);

  
  return (
    <div className="cart-container">
      <div className="cart-details" style={{ marginTop: "100px" }}>
        {shoppingCart.length > 0
          ? shoppingCart.map((cart) => (
              <div className="cart" key={cart.id}>
                <span className="cart-image">
                  <img src={cart.image} alt="not found" />
                </span>
                <span className="cart-product-name">{cart.name}</span>
                <span className="cart-product-price">${cart.price}.00</span>
                <span className="inc">
                  <i class="fa-solid fa-plus"></i>
                </span>
                <span className="product-quantity">{cart.qty}</span>
                <span className="dec">
                  <i class="fa-solid fa-minus"></i>
                </span>
                <span className="product-total-price">500.00</span>
                <span className="delete-product">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </div>
            ))
          : "Sorry your cart is empty"}
      </div>
    </div>
  );
}
