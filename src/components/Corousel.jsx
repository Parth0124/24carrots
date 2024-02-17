import React, { useState } from 'react';
import img1 from "../assets/1.1-Lorely-Meza-1.jpg";
import img2 from "../assets/1.2-Holly-Sigafoos-Photo.jpg";
import img3 from "../assets/1.3-Holly-Sigafoos-Photo.jpg";
import img4 from "../assets/1.4-Lorely-Meza.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const data =[
    {
        id:1,
        image:img1,
    },
    {
        id:2,
        image:img2,
    },
    {
        id:3,
        image:img3,
    },
    {
        id:4,
        image:img4,
    },
];

const Corousal = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className='h-[100vh] flex justify-between items-end mt-20'> {/* Added 'items-end' to align items to the bottom */}
      <div className='flex flex-col justify-center items-center max-w-[45vw] px-20' >
        <h3 className='text-[20px] text-center'>WELCOME TO 24 CARROTS</h3>
        <h1 className='text-[75px] text-center font-serif text-green-900'>Remarkable Catering & Events</h1>
        <p className='text-[15px] font-futura-pt font-thin text-center font-mono'>24 Carrots is the premier catering and events company of choice in Southern California. We create remarkable experiences by offering the finest quality foods and providing unsurpassed personalized service, driven by our passion for life’s special occasions.</p>
        <button className='font-sans w-1/2 border text-[#C15627] border-[#C15627] text-center uppercase px-3 py-2 hover:border-[#b8562c] rounded-3xl'>GET IN TOUCH  <FontAwesomeIcon icon={faArrowRight} /> </button>
      </div>

      <div className='flex justify-center max-w-[55vw] items-center'>
        <Splide options={{ perPage: 1, gap:"0.5rem", garg:'free', arrows: false}}>
          {data.map((item, index) => {
            return (
              <SplideSlide key={item.id}>
                <img 
                  className={`h-[80vh] w-[55vw] object-cover rounded-tl-[20rem] cursor-pointer ease-out duration-300 transform transition-transform ${selectedImage === index ? 'scale-110' : ''}`} 
                  src={item.image}
                  alt={item.id} 
                  onClick={() => handleImageClick(index)}
                />
              </SplideSlide>
            )
          })}
        </Splide>
      </div>
    </div>
  )
}

export default Corousal;
