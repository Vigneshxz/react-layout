import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FanClubs from './components/FanClubs';
import News from './components/News';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FanClubs />
      <News />
      <Footer />
    </div>
  );
}

export default App;
