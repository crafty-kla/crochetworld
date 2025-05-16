import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-body">
        <Introduction />
        <Carousel />
        <a
          href="https://www.paypal.com/paypalme/craftykla24"
          className="shop-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop Now
        </a>
      </main>
      <Footer />
    </div>
  );
}

export default App;
