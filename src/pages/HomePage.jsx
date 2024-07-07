import React from 'react';
import Headers from '../components/Headers/Headers';
import Footer from '../components/Footers/Footer';
import Main from '../components/Mains/Main';
import './../App.css';

function HomePage() {
  return (
    <div className='app-container'>
      <Headers />
      <Main />
      <Footer />
    </div>
  );
}

export default HomePage;
