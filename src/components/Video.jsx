import React from 'react';
import video from '../assets/video.mp4';

const Video = () => {
  return (
    <div className="relative">
      <video className="w-full aspect-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-shadow whitespace-nowrap">
        Simply the finest
      </div>
    </div>
  );
};

export default Video;
