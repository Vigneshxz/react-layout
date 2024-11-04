import React from 'react';
import './News.css';

const News = () => (
  <section className="news">
    <h2>Latest News</h2>
    <div className="news-container"> {/* Translucent container for all cards */}
      <div className="news-cards">
        {/* Card 1 */}
        <a href="https://www.realmadrid.com/en-US/news/football/first-team/trainings/el-equipo-se-esta-entrenando-08-10-2024" className="news-card">
          <img src={`${process.env.PUBLIC_URL}/images/training.jpeg`} alt="Training Session" className="news-image" />
          <div className="news-info">
            <h3>Another session at Real Madrid City</h3>
          </div>
        </a>

        {/* Card 2 */}
        <a href="https://www.realmadrid.com/en-US/news/football/first-team/latest-news/madridistas-convocados-con-sus-selecciones-octubre-07-10-2024" className="news-card">
          <img src={`${process.env.PUBLIC_URL}/images/national.jpeg`} alt="National Teams" className="news-image" />
          <div className="news-info">
            <h3>Fixtures for the madridistas called up to represent their national teams</h3>
          </div>
        </a>

        {/* Card 3 */}
        <a href="https://www.realmadrid.com/en-US/news/football/first-team/latest-news/el-real-madrid-osasuna-se-jugara-el-sabado-9-de-noviembre-a-las-14-00-h-07-10-2024" className="news-card">
          <img src={`${process.env.PUBLIC_URL}/images/osasuna.jpeg`} alt="Madrid Osasuna" className="news-image" />
          <div className="news-info">
            <h3>Real Madrid-Osasuna will take place on Saturday, 9 November at 2pm</h3>
          </div>
        </a>

        {/* Card 4 */}
        <a href="https://www.realmadrid.com/en-US/news/football/first-team/reports/cronica-del-real-madrid-villarreal-05-10-2024" className="news-card">
          <img src={`${process.env.PUBLIC_URL}/images/villarreal.jpeg`} alt="Villarreal Victory" className="news-image" />
          <div className="news-info">
            <h3>2-0: Valverde and Vini Jr. strike to earn Madrid victory over Villarreal</h3>
          </div>
        </a>

        {/* Card 5 */}
        <a href="https://www.realmadrid.com/en-US/news/club/latest-news/c-06-10-2024" className="news-card">
          <img src={`${process.env.PUBLIC_URL}/images/logo.jpeg`} alt="Carvajal Renewal" className="news-image" />
          <div className="news-info">
            <h3>Official Announcement: Dani Carvajal signs contract renewal</h3>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default News;
