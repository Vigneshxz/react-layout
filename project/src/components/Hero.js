import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <img src={`${process.env.PUBLIC_URL}/images/madridlogo.jpeg`} alt="Real Madrid Stadium" className="hero-image" />
    <h1>Welcome to Real Madrid Fan Club</h1>
    <p>Join the community of passionate Madridistas!</p>
  </section>
);

export default Hero;
