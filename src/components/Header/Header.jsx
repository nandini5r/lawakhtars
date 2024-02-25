import React, { useState } from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import logoImg from "../../utils/logoAL-removebg-preview.png"
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const navToHome =() =>{
    navigate('/')
  }
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`main-header ${showMenu ? 'show-menu' : ''}`}>
      <div className="logo">
     <img src={logoImg} alt ="logo" onClick={navToHome}></img>
      </div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <nav className={`nav-links ${showMenu ? 'show-menu' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact Us</a>
        <a href='/blog'>Blog</a>
      </nav>
    </div>
  );
};

export default Header;
