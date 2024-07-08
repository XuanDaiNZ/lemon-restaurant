import React, { useState } from "react";
import { Link } from 'react-router-dom';
import hamberger from './../../source/icons_assets/hamburger.svg';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="hamburger" onClick={toggleMenu}>
        <img src={hamberger} alt="Hamburger menu icon" />
      </div>
      <ul className={isOpen ? "nav-menu open" : "nav-menu"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/updating">Order</Link></li>
        <li><Link to="/updating">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;