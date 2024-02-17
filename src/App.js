import React from 'react';
import Navbar from './components/Navbar';
import Video from './components/Video';
import Crousal from './components/Corousel';
import Sectors from './components/Sectors';
import Page4 from './components/Page4';
import Crousal2 from './components/Corousel2';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import NewsPart from './components/NewsPart';
import Business from './components/Business';
import Services from './components/Services';
import FeedbackData from './components/FeedbackData';

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Video />
      <Crousal />
      <Sectors />
      <Page4 />
      <Crousal2 />
      <Business/>
      <Services/>
      <FeedbackData/>
      <NewsPart/>
      <Footer />
      <BackToTopButton /> 
    </div>
  );
}

export default App;
