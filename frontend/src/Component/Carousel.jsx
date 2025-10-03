import React, { useEffect, useState } from "react";

const Carousel = ({ children, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = React.Children.count(children);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === count - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer); 
  }, [count, interval]);

  // Navigation
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? count - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === count - 1 ? 0 : prev + 1));
  };

  return (
  
    <div className="relative w-80 md:w-80 h-90 overflow-hidden   ">
      {/* Slides */}
      {React.Children.map(children, (child, index) => (
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {child}
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        
      </button>
    </div>
  );
};

export default Carousel;
