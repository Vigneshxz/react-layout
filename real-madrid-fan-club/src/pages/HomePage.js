import React from 'react';
import Hero from '../components/Hero';
import FanClubCard from '../components/FanClubCard';
import './HomePage.css';

function HomePage() {
    return (
        <div>
            <Hero />
            <section className="info">
                <h2>Fan Clubs in USA</h2>
                <div className="fan-club-list">
                    <FanClubCard href="https://example.com/boston" imgSrc="images/boston.jpeg" location="Boston" />
                    <FanClubCard href="https://example.com/la" imgSrc="images/LA.jpeg" location="Los Angeles" />
                    <FanClubCard href="https://example.com/dc" imgSrc="images/DC.jpeg" location="Washington DC" />
                </div>
            </section>
        </div>
    );
}

export default HomePage;
