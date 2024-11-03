import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/profile">Player Profile</a></li>
                    <li><a href="/schedule">Schedule</a></li>
                    <li><a href="/comments">Comments</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
