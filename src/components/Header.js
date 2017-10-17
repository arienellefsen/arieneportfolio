import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><h3 className="logo">Ariene Ellefsen</h3></span>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/portfolio">Portfolio</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    </ul>    
  </header>
);

export default Header;