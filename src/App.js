import React from 'react';
import Headers from './components/Headers/Headers';
import Main from './components/Mains/Main';
import Footer from './components/Footers/Footer';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Headers />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
