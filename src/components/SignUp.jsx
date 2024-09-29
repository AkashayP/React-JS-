import React from 'react';
import './SignUp.css';
import FrameTwo from '../assets/FrameTwo.png';
import Frame from '../assets/Frame.jpg';

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-left">
      <div className='content'>
        <h2>Welcome Back</h2>
        <p>Discover your passions,<br /><span>Be Unstopabble.</span></p>
        </div >
        <form className='signup-for'>
           <div className="form-row">
    <div className="form-group half-width">
      <label>First Name</label>
      <input type="text" placeholder="First Name" className="signup-input" />
    </div>
    <div className="form-group half-width">
      <label>Last Name</label>
      <input type="text" placeholder="Last Name" className="signup-input" />
    </div>
  </div>

  <div className="form-group">
    <label>Email Address</label>
    <input type="email" placeholder="Email Address" className="signup-input" />
  </div>

  <div className="form-group">
    <label>Phone Number</label>
    <div className="phone-container">
      <select className="national-code">
        <option value="+1">+1</option>
        <option value="+91">+91</option>
        <option value="+44">+44</option>
      </select>
      <input type="tel" placeholder="Phone Number" className="signup-input phone-input" />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group half-width">
      <label>Create Password</label>
      <input type="password" placeholder="Create Password" className="signup-input" />
    </div>
    <div className="form-group half-width">
      <label>Confirm Password</label>
      <input type="password" placeholder="Confirm Password" className="signup-input" />
    </div>
  </div>

</form>
<button type="button" className="create-account-btn">Create Account</button>

      </div>

      <div className='signup-right'>
        <img src={FrameTwo} alt="Image 1" className="image image-1" />
        <img src={Frame} alt="Image 2" className="image image-2" />
      </div>
    </div>
  );
};

export default SignUpPage;
