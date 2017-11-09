import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
  <div className="container" id="3">
  <div className="row">
    <div className="col-md-12">
      <div className="icn-logo"><h3 className="logo text-center">Ariene Ellefsen</h3></div>
        <ul className="main-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#1">Portfolio</a></li>
          <li><a href="#2">About</a></li>
        </ul>   
      </div>
    </div> 
    </div> 
  </header>
);

export default Header;