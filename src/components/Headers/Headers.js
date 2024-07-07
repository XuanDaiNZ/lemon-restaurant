import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../source/icons_assets/Logo.svg';
import Nav from './Nav';
import './Header.css';

function Headers() {
    return ( <
        header className = 'header' >
        <
        div className = 'logo' >
        <
        Link to = '/' >
        <
        img src = { Logo }
        alt = 'logo' / >
        <
        /Link> <
        /div> <
        Nav / >
        <
        /header>

    )
}

export default Headers