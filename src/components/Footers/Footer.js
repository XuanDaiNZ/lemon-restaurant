import React from 'react';
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
      <li><a href="/home">Home</a></li>        
      <li><a href="/about">About Us</a></li>
      <li><a href="/blog">Menu</a></li>  
      <li><a href="/reservation">Reservations</a></li>        
      <li><a href="/order">Order online</a></li>
      <li><a href="/login">Login</a></li>
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