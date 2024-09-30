import React from "react";
import "./SignUp.css";
import "./LoginPage.css";
import FrameTwo from "../assets/FrameTwo.png";
import Frame from "../assets/Frame.jpg";

const SignUpPage = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="content">
          <h2>Welcome Back</h2>
          <p>
            Discover your passions,
            <br />
            <span>Be Unstopabble.</span>
          </p>
        </div>
        <form className="form">
          <div className="form-row">
            <div className="form-group half-width">
              <p className="upperText">First Name</p>
              <input
                type="text"
                placeholder="First Name"
                className="input-field"
              />
            </div>
            <div className="form-group half-width">
              <p className="upperText">Last Name</p>
              <input
                type="text"
                placeholder="Last Name"
                className="input-field"
              />
            </div>
          </div>

          <div className="form-group">
            <p className="upperText">Email Address</p>
            <input
              type="email"
              placeholder="Email Address"
              className="input-field"
            />
          </div>

          <div className="form-group">
            <p className="upperText">Phone Number</p>
            <div className="phone-container">
              <select className="national-code">
                <option value="+1">+1</option>
                <option value="+91">+91</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                className="input-field phone-input"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <p className="upperText">Create Password</p>
              <input
                type="password"
                placeholder="Create Password"
                className="input-field"
              />
            </div>
            <div className="form-group half-width">
              <p className="upperText">Confirm Password</p>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input-field"
              />
            </div>
          </div>
          <button type="button" className="login-btn">
            Create Account
          </button>
        </form>
      </div>

      <div className="login-right">
        <img src={FrameTwo} alt="Image 1" className="image image1" />
        <img src={Frame} alt="Image 2" className="image image2" />
      </div>
    </div>
  );
};

export default SignUpPage;
