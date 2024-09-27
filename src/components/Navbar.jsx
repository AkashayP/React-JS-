import React, { useState } from 'react';
import './Navbar.css';
import Subtract from '../assets/Subtract.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Subtract} alt="Logo" className="logo" />
        <span>StudyNotion</span>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link className='home' to="/home">Home</Link>
        <Link className='catalog' to="/catalog">Catalog</Link>
        <Link className='about' to="/about-us">About Us</Link>
        <Link className='contact' to="/contact">Contact Us</Link>
      </div>

      {/* Login & Signup Buttons */}
      <div className={`navbar-buttons ${isOpen ? 'active' : ''}`}>
        <button className="btn"><Link className='login' to="/">Log in</Link></button>
        <button className="btn"><Link className='login' to="/signup">Sign up</Link></button>
      </div>
    
    </nav>
  );
};

export default Navbar;
