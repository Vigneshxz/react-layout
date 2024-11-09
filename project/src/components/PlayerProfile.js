import React, { useState, useEffect } from 'react';
import './PlayerProfile.css';

const PlayerProfile = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // Fetch player data from your server
  useEffect(() => {
    fetch('https://real-madrid-api.onrender.com/api/players')
      .then(response => response.json())
      .then(data => setPlayers(data))
      .catch(error => console.error('Error fetching players:', error));
  }, []);

  // Function to show player details in popup
  const showPlayerInfo = (player) => {
    setSelectedPlayer(player); // Set the player details in state
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedPlayer(null); // Clear the selected player
  };

  // Helper function to get full image URL
  const getImageUrl = (imgName) => `https://real-madrid-api.onrender.com${imgName}`;

  return (
    <div className="player-profile">
      <section className="content">
        <h1>Player Profile</h1>

        {/* Display players grouped by position */}
        <h2>Goalkeepers</h2>
        <div className="player-section">
          {players
            .filter(player => player.position === 'Goalkeeper')
            .map(player => (
              <div key={player._id} className="player-box" onClick={() => showPlayerInfo(player)}>
                <img src={getImageUrl(player.img_name)} alt={player.name} />
                <p>{player.name}</p>
              </div>
            ))}
        </div>

        <h2>Defenders</h2>
        <div className="player-section">
          {players
            .filter(player => player.position === 'Defender')
            .map(player => (
              <div key={player._id} className="player-box" onClick={() => showPlayerInfo(player)}>
                <img src={getImageUrl(player.img_name)} alt={player.name} />
                <p>{player.name}</p>
              </div>
            ))}
        </div>

        <h2>Midfielders</h2>
        <div className="player-section">
          {players
            .filter(player => player.position === 'Midfielder')
            .map(player => (
              <div key={player._id} className="player-box" onClick={() => showPlayerInfo(player)}>
                <img src={getImageUrl(player.img_name)} alt={player.name} />
                <p>{player.name}</p>
              </div>
            ))}
        </div>

        <h2>Forwards</h2>
        <div className="player-section">
          {players
            .filter(player => player.position === 'Forward')
            .map(player => (
              <div key={player._id} className="player-box" onClick={() => showPlayerInfo(player)}>
                <img src={getImageUrl(player.img_name)} alt={player.name} />
                <p>{player.name}</p>
              </div>
            ))}
        </div>

        {/* Popup for displaying player details */}
        {selectedPlayer && (
          <div className="popup" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <h2>{selectedPlayer.name}</h2>
              <p><strong>Position:</strong> {selectedPlayer.position}</p>
              <p><strong>Nationality:</strong> {selectedPlayer.nationality}</p>
              <img src={getImageUrl(selectedPlayer.img_name)} alt={selectedPlayer.name} />
              <button className="close-btn" onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default PlayerProfile;
