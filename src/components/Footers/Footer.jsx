import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../source/icons_assets/Logo.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-logo">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <nav className="footer-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/updating">Order</Link></li>
          <li><Link to="/updating">Login</Link></li>
        </ul>
      </nav>
      <address className="footer-contact">
        <p>Contact us at:</p>
        <p>Email: contact@example.com</p>
        <p>Phone: +123 456 7890</p>
      </address>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  )
}

export default Footer