import React from 'react';
import './Navbar1.css';
import Button from '@mui/material/Button';  
// import BiLogIn from '@mui/material//'

const Navbar1 = () => {
  return (
    <nav className="navbar1">
      <div className="navbar-logo1">
        <a href="/">Logo</a>
      </div>
      <ul className="navbar-links1">
        <li><a href="/">Home</a></li>
        <li><a href="/Toured Destinations">Toured Destinations</a></li>
        <li><a href="/About">About Us</a></li>
        <li><a href="/Gallery">Gallery</a></li>
        <li><a href="/Contact">Contact Us</a></li>
        <Button variant='contained'>Login</Button>
      </ul>
    </nav>
  );
};

export default Navbar1;
