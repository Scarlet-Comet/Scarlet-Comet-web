import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <h1>Welcome to Scarlet Comet Web</h1>
        <p>Your one-stop shop for quality clothing and accessories.</p>
        <Link to="/catalog" className="button primary">
          Shop the Catalog
        </Link>
      </div>

      <div className="home-features">
        <div className="home-feature">
          <h3>🛍️ Wide Selection</h3>
          <p>Browse hundreds of products across all categories.</p>
        </div>
        <div className="home-feature">
          <h3>🚚 Fast Shipping</h3>
          <p>Get your orders delivered quickly and reliably.</p>
        </div>
        <div className="home-feature">
          <h3>🔒 Secure Checkout</h3>
          <p>Shop with confidence using our secure payment system.</p>
        </div>
      </div>

      <div className="home-links">
        <h2>Explore</h2>
        <ul>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/orders">My Orders</Link></li>
          <li><Link to="/cart">My Cart</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
