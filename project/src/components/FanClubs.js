import React from 'react';
import './FanClubs.css';

const FanClubs = () => (
  <section className="info">
    <h2>Fan Clubs in USA</h2>
    <p>Find and join official Real Madrid fan clubs near you.</p>
    <div className="fan-club-list">
      <a href="https://www.realmadrid.com/en-US/the-club/fan-clubs/united-states-of-americas-massachusetts-boston" className="fan-club-box">
        <img src="/images/boston.jpeg" alt="Boston" className="fan-club-image" />
        <span>Boston</span>
      </a>
      {/* Repeat similar structure for other fan clubs */}
    </div>
  </section>
);

export default FanClubs;
