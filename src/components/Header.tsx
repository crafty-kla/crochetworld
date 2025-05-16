import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src="/Logo_top.jpeg" alt="Logo" />
      <h1 id="main-heading">Welcome to Lav's Crochet World</h1>
    </header>
  );
};

export default Header; 