import React from 'react';
import Logo from '../../source/icons_assets/Logo.svg';
import Nav from './Nav';
import './Header.css';

function Headers() {
  return (
    <header className='header'>
      <div className='logo'>
        <a href='/image'>
          <img src={Logo} alt='logo'/>
        </a>
      </div>
      <Nav />
    </header>
    
  )
}

export default Headers