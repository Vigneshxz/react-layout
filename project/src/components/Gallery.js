import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/images/gallery.jpeg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: '#0a0742',
    padding: '50px 20px',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div style={galleryStyle}>
      <section className="content">
        <h1>Gallery</h1>

        {/* YouTube Video */}
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0nJLL6KOR_Y?si=dZ-358zDaHShOU9M"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
