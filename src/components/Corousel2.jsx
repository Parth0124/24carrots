import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from '../assets/8.jpg';

const data = [
  { id: 6, image: img6 },
  { id: 5, image: img5 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 8, image: img8 },
  { id: 7, image: img7 }
];

const Corousel2 = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Splide options={{ perPage: 2, gap: 10, arrows: false, drag: true, pagination: 'bottom' }}>
        {data.map(item => (
          <SplideSlide key={item.id}>
            <img
              className='h-full w-full object-cover cursor-pointer'
              src={item.image}
              alt={`Slide ${item.id}`}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Corousel2;
