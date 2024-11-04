import React from 'react';
import './Schedule.css';

const Schedule = () => {
  const scheduleStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/images/schedulebg.jpeg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: '#0a0742',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={scheduleStyle}>
      <section className="content">
        <h1>Schedule</h1>
        <p>Stay tuned for the latest updates on our match schedule. We look forward to cheering on our team!</p>

        <table className="schedule-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Opponent</th>
              <th>Time</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>October 7, 2024</td>
              <td>Barcelona</td>
              <td>8:00 PM</td>
              <td>Santiago Bernabéu Stadium</td>
            </tr>
            <tr>
              <td>October 14, 2024</td>
              <td>Valencia</td>
              <td>5:00 PM</td>
              <td>Estadio de Mestalla</td>
            </tr>
            <tr>
              <td>October 21, 2024</td>
              <td>Atletico Madrid</td>
              <td>7:00 PM</td>
              <td>Civitas Metropolitano</td>
            </tr>
          </tbody>
        </table>

        <p className="coming-soon">Schedule coming soon!</p>
      </section>
    </div>
  );
};

export default Schedule;
