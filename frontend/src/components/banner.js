import React from 'react';
import './Banner.css'; // Import custom styles

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="banner-left">
          <span className="live-badge">LIVE</span>
          <img src="lic-logo.png" alt="LIC Logo" className="lic-logo" />
          <div className="banner-text">
            <h2>Buy New Jeevan Amar</h2>
            <p>Secure your Family's Future</p>
          </div>
        </div>
        <div className="banner-right">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
      <div className="banner-indicator">
        <span className="active-dot"></span>
      </div>
    </div>
  );
};

export default Banner;