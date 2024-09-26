import React, { useState } from 'react';
import './Navbar.css';
import Subtract from '../assets/Subtract.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo and Brand Name */}
      <div className="navbar-logo">
        <img src={Subtract} alt="Logo" className="logo" />
        <span>StudyNotion</span>
      </div>

      {/* Hamburger Menu (shown on smaller screens) */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Links Section */}
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
      <Link style={{textDecoration:"none"}} to="/home">Home</Link>
        <a style={{color:"yellow"}} href="/catalog">Catalog</a>
        <a href="/about-us">About Us</a>
        <a href="/contact">Contact Us</a>
      </div>

      {/* Login & Signup Buttons */}
      <div className={`navbar-buttons ${isOpen ? 'active' : ''}`}>
        <button className="btn btn-login"><Link style={{textDecoration:"none"}} to="/">Log In</Link></button>
        <button className="btn btn-signup"><Link style={{textDecoration:"none"}} to="/signup">Sign Up</Link></button>
      </div>
    
    </nav>
  );
};

export default Navbar;
