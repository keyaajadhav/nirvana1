import React from "react";
import "../styles/SignIn.css";
export default function SignIn() {
  return (
    <div className="signin-container">
      
      {/* Left Side - Sign-In Form */}
      <div className="signin-form">
        <img src="/logo.png" className="logo" alt="Nirvana Logo" />
        <h2>Log in or sign up</h2>
        <p>Use your email or other service to continue with us</p>

        <form>
          <input type="text" placeholder="Enter your profile name" required />
          <input type="email" placeholder="Enter your Email" required />
          <input type="password" placeholder="Enter your Password" required />
          <button type="submit" className="signin-btn">Sign In</button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" width="20" alt="Google Icon" />
          Continue with Google
        </button>
      </div>

      {/* Right Side - Image Wrapper */}
      <div className="signin-image-wrapper">
        <div className="signin-image-box">
          <img src="/loginpg.png" alt="Namaste Art" />
        </div>
      </div>

    </div>
  );
}
