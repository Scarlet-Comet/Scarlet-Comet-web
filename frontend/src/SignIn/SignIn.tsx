import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="content">
      <h1>Sign In</h1>
      <div className="form">
        <ul className="form-container">
          <li>
            <h2>Sign In to Your Account</h2>
          </li>
          <li>
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </li>
          <li>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </li>
          <li>
            <button className="button primary">Sign In</button>
          </li>
          <li>
            New customer? <Link to="/">Create an account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SignIn;
