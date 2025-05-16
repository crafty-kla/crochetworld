import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        &copy; 2024 Crafty Kla. All rights reserved. |{' '}
        <a href="https://www.paypal.me/craftykla24" target="_blank" rel="noopener noreferrer">
          Donate
        </a>
      </p>
    </footer>
  );
};

export default Footer; 