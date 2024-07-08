import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import CallToAction from './pages/CallToAction';
import Specials from './pages/Specials';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/call-to-action" element={<CallToAction />} />
      <Route path="/menu" element={<Specials />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
      <Route path="/test" element={<div>Test Route</div>} /> {/* Route thử nghiệm */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;

