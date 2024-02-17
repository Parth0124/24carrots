import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-custom-color text-white px-4 py-2 rounded-t-full rounded-b-lg transition-opacity duration-500 ${showButton ? 'opacity-100' : 'opacity-0'} hover:bg-hover-#E1F0DA`}
      onClick={scrollToTop}
      style={{ backgroundColor: '#99BC85' }}
    >
      <div className="flex items-center">
        <IoIosArrowUp className="mr-1" />
        <span className="text-black">Back to Top</span>
      </div>
    </button>
  );
};

export default BackToTopButton;
