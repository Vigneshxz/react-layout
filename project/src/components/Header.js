import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Header.css';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/profile">Player Profile</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
        <li><Link to="/comments">Comments</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

