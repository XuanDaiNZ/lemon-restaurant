import React from 'react';
import HighlightsSection from '../components/Mains/MainsComponents/HighlightsSection';
import './../App.css';
import Headers from '../components/Headers/Headers';
import Footer from '../components/Footers/Footer';


function Specials() {
  return (
    <div className='app-container'>
        <Headers />
        <HighlightsSection />
        <Footer />
    </div>
  );
}

export default Specials;
