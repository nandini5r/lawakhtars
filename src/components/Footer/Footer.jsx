import React, { useState } from 'react';
import './Footer.scss';

const Footer = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const hideSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div className={`main-footer ${showSidebar ? 'show-sidebar' : ''}`}>
      <div className="newsletter-section">
        <div className="newsletter-container">
          <h1>Subscribe to Our Newsletter</h1>
          <form action="#" method="post">
            <input type="email" name="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-section about-us">
          <h3>About Us</h3>
          <p>Litigation | Consultancy | Due-Diligence</p>
          
        </div>
        <div className={`footer-section navigation ${showSidebar ? 'show-sidebar' : ''}`}>
          <div className="menu-toggle" onClick={toggleSidebar}>
            <div className={`bar ${showSidebar ? 'open' : ''}`}></div>
            <div className={`bar ${showSidebar ? 'open' : ''}`}></div>
            <div className={`bar ${showSidebar ? 'open' : ''}`}></div>
          </div>
          <ul onClick={hideSidebar}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section address-location">
          <h3>Address Location</h3>
          <p>Visit us at:</p>
          <p>C-31, LGF, Nizamuddin East, New Delhi-110013</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
