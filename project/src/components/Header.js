import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to={`${process.env.PUBLIC_URL}/`}>Home</Link></li>
        <li><Link to={`${process.env.PUBLIC_URL}/about`}>About Us</Link></li>
        <li><Link to={`${process.env.PUBLIC_URL}/gallery`}>Gallery</Link></li>
        <li><Link to={`${process.env.PUBLIC_URL}/profile`}>Player Profile</Link></li>
        <li><Link to={`${process.env.PUBLIC_URL}/schedule`}>Schedule</Link></li>
        <li><Link to={`${process.env.PUBLIC_URL}/comments`}>Comments</Link></li>
        <li><Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
