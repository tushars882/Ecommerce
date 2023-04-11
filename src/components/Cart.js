import React, { createContext, useContext } from 'react'
import { CartContext } from '../Global/CartContext';
import StripeCheckout from "react-stripe-checkout";


export default function Cart() {
  const {shoppingCart , totalPrice , qty , dispatch}= useContext(CartContext);
  const handleToken = (token) =>{

  }

  
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
                <span
                  className="inc"
                  onClick={() =>
                    dispatch({ type: "INC", id: cart.id, cart: cart })
                  }
                >
                  <i class="fa-solid fa-plus"></i>
                </span>
                <span className="product-quantity">{cart.qty}</span>
                <span
                  className="dec"
                  onClick={() => dispatch({ type: "DEC", id: cart.id, cart })}
                >
                  <i class="fa-solid fa-minus"></i>
                </span>
                <span className="product-total-price">
                  ${cart.price * cart.qty}.00
                </span>
                <span
                  className="delete-product"
                  onClick={() => dispatch({ type: "DEL", id: cart.id, cart })}
                >
                  <i class="fa-solid fa-trash"></i>
                </span>
              </div>
            ))
          : "Sorry your cart is empty"}
      </div>
      {shoppingCart.length > 0 ? (
        <div className="cart-summary">
          <div className="summary">
            <h3>Cart Summary</h3>
            <div className="total-items">
              <div className="items">Total Items</div>
              <div className="items-count">{qty}</div>
            </div>
            <div className="total-price-section">
              <div className="just-title">Total price</div>
              <div className="items-price">${totalPrice}.00</div>
            </div>
            <div className="stripe-section">
              {/* stripe button */}
              <StripeCheckout stripeKey="pk_test_51MvoJdSI5Lkz6TCVG2IbKtzdl2XUSq9c8aXRsfJL8yrUpWnvS32AbxjWMgOUZtQ8V25Q8lq6qbyxFA5nu8HfYB6C00g7dF7moW"
              token={handleToken}
              billingAddress 
              shippingAddress
              amount={totalPrice *100}
              name='All products'
              >

              </StripeCheckout>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
