import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 4;

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % totalSlides);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="carousel-section">
      <div className="carousel">
        <div className="carousel-content">
          {/* Carousel slide content would go here in a real implementation */}
        </div>
        <div className="carousel-controls">
          <div className="dots">
            {[...Array(totalSlides)].map((_, index) => (
              <span 
                key={index} 
                className={`dot ${activeSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Carousel;