import React from 'react';
import Navbar from './components/Navbar';
import Video from './components/Video';
import Crousal from './components/Corousel';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Crousal2 from './components/Corousel2';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import NewsPart from './components/NewsPart';
import Business from './components/Business';
import Services from './components/Services';
import Feedback from './components/Feedback';
import FeedbackData from './components/FeedbackData';

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Video />
      <Crousal />
      <Page3 />
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
