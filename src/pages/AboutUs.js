import React from 'react';
import AboutSection from '../components/Mains/MainsComponents/AboutSection';
import Headers from '../components/Headers/Headers';
import Footer from '../components/Footers/Footer';
import './../App.css';

function AboutUs() {
  return (
    <div className='app-container'>
        <Headers />
        <AboutSection />
        <Footer />
    </div>
  );
}

export default AboutUs;