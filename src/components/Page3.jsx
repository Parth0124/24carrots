import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img16 from '../assets/16.jpg';
import img11 from '../assets/11.jpg';
import img17 from '../assets/17.jpg';
import img18 from '../assets/18.jpg';

const Page3 = () => {
  const categoryData = {
    Weddings: {
      image: img16,
      text: "The most important day of your life, is ours too. Your wedding should be the ultimate celebration of your relationship, and our team of experts guide you through the process, offering peace of mind and a remarkable experience."
    },
    Social: {
      image: img11,
      text: "Social events are all about creating unforgettable memories with your loved ones. Let us take care of the details while you enjoy every moment of your special occasion."
    },
    Corporate: {
      image: img17,
      text: "Corporate events are opportunities to impress clients, motivate teams, and showcase your brand. We ensure that your event reflects professionalism and leaves a lasting impression."
    },
    Venues: {
      image: img18,
      text: "Our venues provide the perfect backdrop for any occasion. From elegant weddings to corporate conferences, our spaces are designed to accommodate your needs and exceed your expectations."
    }
  };

  const [selectedCategory, setSelectedCategory] = useState('Weddings');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className='h-[150vh] flex justify-between'>

        <div className='flex m-auto justify-center items-center'>
          <img src={categoryData[selectedCategory].image} className={`h-[90vh] w-[30vw] m-auto rounded-t-full object-cover transition-all duration-500 ${selectedCategory === 'Weddings' ? 'slide-in-left' : 'slide-in-right'}`} alt={selectedCategory} />
        </div>

        <div className='flex flex-col justify-center items-center max-w-[50vw] px-20'>

          <h1 className={`text-[72px] text-left font-serif text-green-800 transition-opacity duration-500 ${selectedCategory ? 'opacity-100' : 'opacity-0'}`}>Making Every Experience Magical</h1>
          <div className={`flex justify-end gap-8 mt-10 transition-opacity duration-500 ${selectedCategory ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid grid-rows-4 grid-flow-col gap-4 text-xl font-mono">
              {Object.keys(categoryData).map(category => (
                <div
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`cursor-pointer ${selectedCategory === category ? 'text-black' : 'text-gray-400'}`}
                >
                  {category}
                </div>
              ))}
            </div>
            <div>
              <div className='mt-4'>{categoryData[selectedCategory].text}</div>
            </div>
          </div>

          <button className='bg-orange-700 justify-center text-white text-sm font-semibold rounded-full px-4 py-1 mt-5 hover:bg-orange-800 transition-colors duration-300'>LEARN MORE <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>

      </div>
    </div>
  );
};

export default Page3;
