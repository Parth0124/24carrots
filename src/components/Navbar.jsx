import React from 'react';
import logo from '../assets/Screenshot 2024-02-16 183437.png';

const Navbar = () => {
  return (
    <div className='flex justify-around p-10 gap-4' id="nav">
      <ul className='flex gap-14'>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>EVENTS</li>
      </ul>

      <ul>
        <li><img className='h-[70px]' src={logo} alt="Logo" /></li>
      </ul>

      <ul className='flex gap-14'>
        <li>VENUES</li>
        <li>CAREERS</li>
        <li>
          <button className='font-sans w-auto border text-[#C15627] border-[#C15627] text-center uppercase px-3 py-2 hover:border-[#b8562c] rounded-3xl whitespace-normal'>
            GET IN TOUCH
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
