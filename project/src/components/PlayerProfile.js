import React from 'react';
import './PlayerProfile.css';

const PlayerProfile = () => {
  const profileStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${process.env.PUBLIC_URL}/images/madridlogo.jpeg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'white',
    padding: '50px 20px',
  };

  return (
    <div style={profileStyle}>
      <section className="content">
        <h1>Player Profile</h1>

        {/* Goalkeepers */}
        <h2>Goalkeepers</h2>
        <div className="player-section">
          <div className="player-box">
            <img src={`${process.env.PUBLIC_URL}/players/Thibaut-Courtois.jpeg`} alt="Thibaut Courtois" />
            <p>Thibaut Courtois</p>
          </div>
        </div>

        {/* Defenders */}
        <h2>Defenders</h2>
        <div className="player-section">
          <div className="player-box">
            <img src={`${process.env.PUBLIC_URL}/players/danicarv.jpeg`} alt="Dani Carvajal" />
            <p>Dani Carvajal</p>
          </div>
          <div className="player-box">
            <img src={`${process.env.PUBLIC_URL}/players/rudiger.jpeg`} alt="Antonio Rüdiger" />
            <p>Antonio Rüdiger</p>
          </div>
          <div className="player-box">
            <img src={`${process.env.PUBLIC_URL}/players/alaba.jpeg`} alt="David Alaba" />
            <p>David Alaba</p>
          </div>
        </div>

        {/* Midfielders */}
        <h2>Midfielders</h2>
        <div className="player-section">
          <div className="player-box">
            <img src={`${process.env.PUBLIC_URL}/players/cama.jpeg`} alt="Eduardo Camavinga" />
            <p>Eduardo Camavinga</p>
          </div>
          <div className="player-box">
            <img src={`${process.env.PUBLIC_URL}/players/modric.jpeg`} alt="Luka Modrić" />
            <p>Luka Modrić</p>
          </div>
        </div>

        {/* Forwards */}
        <h2>Forwards</h2>
        <div className="player-section">
          <div className="player-box">
            <img src={`${process.env.PUBLIC_URL}/players/vini.jpeg`} alt="Vinícius Júnior" />
            <p>Vinícius Júnior</p>
          </div>
          <div className="player-box">
            <img src={`${process.env.PUBLIC_URL}/players/diaz.jpeg`} alt="Diaz" />
            <p>Diaz</p>
          </div>
        </div>

        {/* Placeholder Popup */}
        <div className="popup" id="popup">
          <div className="popup-content">
            <h2 id="popup-title">Player Name</h2>
            <p id="popup-stats">Player stats will appear here.</p>
            <button className="close-btn" onClick={() => document.getElementById('popup').style.display = 'none'}>
              Close
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerProfile;
