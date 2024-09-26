
import FrameOne from '../assets/FrameOne.png';
import Frame from '../assets/Frame.jpg';
import React from 'react';
import './LoginPage.css'; 

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Left Column (Login Form) */}
      <div className="login-left">
        <h2>Welcome Back!</h2>
        <p>Build skills for today, tomorrow, and beyond. <span>Education to future-proof your career. </span></p>
        <form>
          <p>Email Address<sup style={{color:"red"}}>*</sup></p>
          <input type="email" placeholder="Email Address" className="input-field" />
          <p>Password<sup style={{color:"red"}}>*</sup></p>
          <input type="password" placeholder="Password" className="input-field" />
          <button className="forgot-password">Forgot Password?</button>
          <button className="login-btn">Log In</button>
        </form>
      </div>

      {/* Right Column (Overlapping Images) */}
      <div className="login-right">
        <img src={FrameOne}alt="Image 1" className="image image1" />
        <img src={Frame} alt="Image 2" className="image image2" />
      </div>
    </div>
  );
};

export default LoginPage;





