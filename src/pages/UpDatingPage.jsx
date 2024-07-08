import React from 'react';
import UnderConstruction from '../components/Mains/MainsComponents/UnderConstruction';
import Headers from '../components/Headers/Headers';
import Footer from '../components/Footers/Footer';
import './../App.css';

function UpDating() {
  return (
    <div className='app-container'>
      <Headers />
      <UnderConstruction />
      <Footer />
    </div>
  );
}

export default UpDating;