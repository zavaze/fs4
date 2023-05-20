import React, { useState } from 'react';
import '../styles/Cart.css';
import { ImBin } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart-container">
      <h1>CART</h1>
      <div className="bar"></div>
      {cart.products.map((product, c) => (
        <div key={c} className="cart-card">
          <div className="cart-left">
            <img src="/images/sm1.png" alt="" />
          </div>
          <div className="cart-right">
            <Link to={`/Product/${product._id}`}>
              <h2>{product.title}</h2>
            </Link>

            <p>{product.price * product.quantity} Bath</p>
            <div className="qty">
              <button className="">-</button>
              <span className="">{product.quantity}</span>
              <button className="">+</button>
            </div>
          </div>
          <div className="delete-item">
            <ImBin />
          </div>
        </div>
      ))}

      <div className="total">
        <h2>TOTAL</h2>
        <h2>{cart.total} Bath</h2>
      </div>
      <Link to={'Checkout'}>
        <button className="complete-order">Complete Order</button>
      </Link>
    </div>
  );
};

export default CartScreen;
