import React from 'react';
import './FanClubCard.css';

function FanClubCard({ href, imgSrc, location }) {
    return (
        <a href={href} className="fan-club-box">
            <img src={imgSrc} alt={location} className="fan-club-image" />
            <span>{location}</span>
        </a>
    );
}

export default FanClubCard;
