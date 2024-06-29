import React from "react";

function Nav() {
  return (
  <nav className="nav">    
    <ul className="">
      <li><a href="/home">Home</a></li>        
      <li><a href="/about">About Us</a></li>
      <li><a href="/blog">Menu</a></li>  
      <li><a href="/reservation">Reservations</a></li>        
      <li><a href="/order">Order online</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
  )
}

export default Nav