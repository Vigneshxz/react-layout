import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
//import AboutPage from './pages/AboutPage';
//import GalleryPage from './pages/GalleryPage';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/about" element={<AboutPage />} /> */}

                {/*<Route path="/gallery" element={<GalleryPage />} />}
                {/* Add routes for other pages */}
            </Routes>
        </Router>
    );
}

export default App;

