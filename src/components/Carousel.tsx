import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const images = [
    './stars.jpg',
    './shoes.jpg',
    './table.jpg',
    './coster.jpg',
    './frogs.jpg',
    './bunny.jpg',
    './christmas.jpg',
    './image1.jpg',
    './french_berret1.jpeg',
    './french_berret2.jpeg',
    './french_berret3.jpeg',
    './french_berret4.jpeg',
    './french_berret5.jpg',
    './flower.jpg',
    './ornament.jpg',
    './hair_pin.jpg',
    './bouquet.jpg',
    './bell.jpg',
    './purse.jpg',
  ];

  const showSlide = (i: number) => {
    setIndex((i + images.length) % images.length);
  };

  const nextSlide = () => {
    showSlide(index + 1);
  };

  const prevSlide = () => {
    showSlide(index - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="carousel-container">
      <div 
        className="carousel-images" 
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Slide ${i + 1}`} />
        ))}
      </div>
      <div className="carousel-buttons">
        <button onClick={prevSlide}>&#10094;</button>
        <button onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default Carousel; 