import React from 'react';
import './SignUp.css';
import FrameTwo from '../assets/FrameTwo.png';
import Frame from '../assets/Frame.jpg';

const SignUpPage = () => {
  return (
    <div className="signup-page">
      {/* Left Column: Sign-Up Form */}
      <div className="signup-left">
        <h2>Join the millions learning to code with StudyNotion for free</h2>
        {/* <p className='heading'>Join the millions learning to code with StudyNotion for free</p> */}
        <p className='heading2'>Build skills for today, tomorrow, and beyond.<span>Education to future -proof your career.</span></p>

        <form className="signup-form">
          {/* First Name */}
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="First Name" className="signup-input" />
          </div>
          
          {/* Last Name */}
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" className="signup-input" />
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Email Address" className="signup-input" />
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label>Phone Number</label>
            <div className="phone-container">
              <select className="national-code">
                <option value="+1">+1</option>
                <option value="+91">+91</option>
                <option value="+44">+44</option>
                {/* Add more country codes as needed */}
              </select>
              <input type="tel" placeholder="Phone Number" className="signup-input phone-input" />
            </div>
          </div>

          {/* Create Password */}
          <div className="form-group">
            <label>Create Password</label>
            <input type="password" placeholder="Create Password" className="signup-input" />
          </div>
          
          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" className="signup-input" />
          </div>

          {/* Create Account Button */}
          <button type="button" className="create-account-btn">Create Account</button>
        </form>
      </div>

      {/* Right Column: Overlapping Images */}
      <div className="signup-right">
        <img src={FrameTwo} alt="Image 1" className="image image-1" />
        <img src={Frame} alt="Image 2" className="image image-2" />
      </div>
    </div>
  );
};

export default SignUpPage;
