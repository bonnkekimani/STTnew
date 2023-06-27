import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/Toured Destinations">Toured Destinations</a></li>
        <li><a href="/About">About Us</a></li>
        <li><a href="/Gallery">Gallery</a></li>
        <li><a href="/Contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
