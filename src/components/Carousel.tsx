import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const images = [
    { src: '/stars.jpg', name: 'Item 1' },
    { src: '/shoes.jpg', name: 'Item 2' },
    { src: '/table.jpg', name: 'Item 3' },
    { src: '/coster.jpg', name: 'Item 4' },
    { src: '/frogs.jpg', name: 'Item 5' },
    { src: '/bunny.jpg', name: 'Item 6' },
    { src: '/christmas.jpg', name: 'Item 7' },
    { src: '/image1.jpg', name: 'Item 8' },
    { src: '/french_berret1.jpeg', name: 'Item 9' },
    { src: '/french_berret2.jpeg', name: 'Item 10' },
    { src: '/french_berret3.jpeg', name: 'Item 11' },
    { src: '/french_berret4.jpeg', name: 'Item 12' },
    { src: '/french_berret5.jpg', name: 'Item 13' },
    { src: '/flower.jpg', name: 'Item 14' },
    { src: '/ornament.jpg', name: 'Item 15' },
    { src: '/hair_pin.jpg', name: 'Item 16' },
    { src: '/bouquet.jpg', name: 'Item 17' },
    { src: '/bell.jpg', name: 'Item 18' },
    { src: '/purse.jpg', name: 'Item 19' }
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
        {images.map((image, i) => (
          <div key={i} className="carousel-slide">
            <img src={image.src} alt={image.name} />
            <div className="image-caption">{image.name}</div>
          </div>
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