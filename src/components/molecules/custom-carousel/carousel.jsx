import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const CustomCarousel = ({ 
  items = [], 
  autoSlide = false, 
  autoSlideInterval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % items.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // If no items, do nothing
    if (!items || items.length === 0) return;

    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, items.length, nextSlide]);

  // If no items, return a placeholder
  if (!items || items.length === 0) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 text-gray-500">
        No items to display
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-4xl xl:max-w-full mx-auto xl:mx-0">
      {/* Slide Container */}
      <div className="overflow-hidden w-full relative h-[550px] md:h-[300px]"
       style={{
        margin: 0,
        padding: 0,
       }}>
        <div 
          className="flex transition-transform w-full h-full duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              // width: `${items.length * 100}%`
          }}
        >
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center"
              style={{
                minWidth: '100%', // Set lebar berdasarkan viewport
                height: '100%', 
              }}
            >
              <div 
                className="w-full h-full flex items-center justify-center bg-green-200"
                style={{
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}
              >
                {item.element}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {/* <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <button  
          onClick={prevSlide}
          className="bg-white/50 hover:bg-white/75"
        >
          <BsChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="bg-white/50 hover:bg-white/75"
        >
          <BsChevronRight className="h-6 w-6" />
        </button>
      </div> */}

      {/* Dot Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              ${currentIndex === index 
                ? 'text-primary font-extrabold lg:text-[20px]' 
                : 'text-foreground lg:text-[20px]'}
            `}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;