import React from 'react';
import Navbar from './components/Navbar';
import Video from './components/Video';
import Crousal from './components/Corousel';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Crousal2 from './components/Corousel2';
import Page5 from './components/Page5';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton'; // Import the BackToTopButton component

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Video />
      <Crousal />
      <Page3 />
      <Page4 />
      <Crousal2 />
      <Page5 />
      <Footer />
      <BackToTopButton /> {/* Render the BackToTopButton component */}
    </div>
  );
}

export default App;
