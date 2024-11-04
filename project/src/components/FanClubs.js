import React from 'react';
import './FanClubs.css';

const FanClubs = () => (
  <section className="info">
    <h2>Fan Clubs in USA</h2>
    <p>Find and join official Real Madrid fan clubs near you.</p>
    <div className="fan-club-list">
      <a href="https://www.realmadrid.com/en-US/the-club/fan-clubs/united-states-of-americas-massachusetts-boston" className="fan-club-box">
        <img src={`${process.env.PUBLIC_URL}/images/boston.jpeg`} alt="Boston" className="fan-club-image" />
        <span>Boston</span>
      </a>
      <a href="https://www.realmadrid.com/en-US/the-club/fan-clubs/united-states-of-americas-california-los-angeles" className="fan-club-box">
        <img src={`${process.env.PUBLIC_URL}/images/LA.jpeg`} alt="Los Angeles" className="fan-club-image" />
        <span>Los Angeles</span>
      </a>
      <a href="https://www.realmadrid.com/en-US/the-club/fan-clubs/united-states-of-americas--pena-madridista-washington-dc" className="fan-club-box">
        <img src={`${process.env.PUBLIC_URL}/images/DC.jpeg`} alt="Washington DC" className="fan-club-image" />
        <span>Peña Madridista Washington DC</span>
      </a>
    </div>
  </section>
);

export default FanClubs;

