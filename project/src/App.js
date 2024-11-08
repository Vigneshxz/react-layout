import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FanClubs from './components/FanClubs';
import News from './components/News';
import Footer from './components/Footer';
import About from './components/About';
import Gallery from './components/Gallery';
import PlayerProfile from './components/PlayerProfile';
import Schedule from './components/Schedule';
import Comments from './components/Comments';
import Contact from './components/Contact';
import './App.css';

function App() {
  const appStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/index.jpeg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: '#0a0742'
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <div className="App" style={appStyle}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <FanClubs />
                <News />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/profile" element={<PlayerProfile />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
