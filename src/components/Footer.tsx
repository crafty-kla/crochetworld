import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <div className="contact-info">
            <h3>Where to find us:</h3>
            <p>408-940-6039</p>
          </div>
          <div className="location-info">
            <h3>Based in:</h3>
            <p>Sunnyvale, CA</p>
          </div>
          <div className="hours-info">
            <h3>Call Hours:</h3>
            <p>Sat & Sun: 9am - 3pm</p>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            &copy; 2024 Crafty Kla. All rights reserved. |{' '}
            <a href="https://www.paypal.me/craftykla24" target="_blank" rel="noopener noreferrer">
              Donate
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 