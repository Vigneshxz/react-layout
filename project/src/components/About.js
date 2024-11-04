import React from 'react';
import './About.css';

const About = () => {
  const aboutStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/images/fan1.jpeg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: '#0a0742',
    padding: '50px 20px',
  };

  return (
    <div style={aboutStyle}>
      <section className="content">
        <h1>About Us</h1>
        <p>
          Welcome to the Real Madrid Fan Club! We are a passionate community of fans dedicated to supporting our beloved team, Real Madrid. Our club brings together Madridistas from all walks of life, providing a space for camaraderie, discussions, and celebrations of our team's successes.
        </p>
        <p>
          Founded in 2024, we have grown significantly, hosting various events, watch parties, and charity initiatives. Whether you're a lifelong fan or just getting started, our club is the perfect place for you. Join us as we share our love for football and celebrate the rich history of Real Madrid.
        </p>
        <div className="images">
          <img src={`${process.env.PUBLIC_URL}/images/fan1.jpeg`} alt="Real Madrid Team" className="about-image" />
          <img src={`${process.env.PUBLIC_URL}/images/fans.jpeg`} alt="Real Madrid Fans" className="about-image" />
        </div>
        <p>
          We organize regular meetups and engage in various activities, from game days to community service. Our members benefit from exclusive merchandise, tickets to matches, and insider news about the club. The fan club is not just about football; it's about building friendships and creating unforgettable memories together.
        </p>

        <h1>About the Club</h1>
        <p>
          Real Madrid Club de Fútbol, commonly known as Real Madrid, is one of the most illustrious football clubs in the world. Established in 1902, the club has a storied history marked by numerous titles, legendary players, and a passionate fanbase.
        </p>
        <div className="images">
          <img src={`${process.env.PUBLIC_URL}/images/aboutclub.jpeg`} alt="Club Event" className="about-image" />
          <img src={`${process.env.PUBLIC_URL}/images/aboutclub1.jpeg`} alt="Charity Event" className="about-image" />
        </div>
        <p>
          Real Madrid's list of honors is staggering. The club has won the La Liga title 36 times, making it the most successful team in the history of the Spanish top division. Additionally, Real Madrid has an unparalleled record in the UEFA Champions League, having lifted the trophy 15 times, including five consecutive victories from 1956 to 1960. This record is a testament to the club's dominance in European football.
        </p>
        <p>
          Real Madrid is more than just a football club; it is a cultural phenomenon that transcends sports. The club's rich history and commitment to excellence resonate with millions of fans around the globe. The "Galácticos" era in the early 2000s, marked by the signing of star players like Ronaldo, David Beckham, and Zinedine Zidane, further amplified the club's global appeal.
        </p>
        <p>
          Real Madrid Club de Fútbol is not merely a football club; it is a symbol of excellence, passion, and resilience. With a rich history filled with remarkable achievements and legendary players, the club continues to captivate fans worldwide. Its cultural significance, marked by intense rivalries and global outreach, underscores its status as a footballing giant.
        </p>
        <p>
          Join us as we continue to grow and strengthen our community of Madridistas. Together, we can create unforgettable memories and foster a lifelong love for Real Madrid.
        </p>

        <h2>Club Anthem</h2>
        <audio controls>
          <source src={`${process.env.PUBLIC_URL}/anthem/Hala Madrid...y nada más (feat. RedOne).mp3`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </section>
    </div>
  );
};

export default About;
