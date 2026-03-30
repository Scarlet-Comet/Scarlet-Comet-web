import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="content">
      <h1>Shopping Cart</h1>
      <div className="form">
        <ul className="form-container">
          <li>
            <h2>Your Cart</h2>
          </li>
          <li>
            <p>Your cart is currently empty.</p>
          </li>
          <li>
            <Link to="/catalog" className="button primary">
              Continue Shopping
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cart;
