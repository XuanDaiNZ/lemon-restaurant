import React from 'react';
import { useLocation } from 'react-router-dom';
import Headers from '../components/Headers/Headers';
import Footer from '../components/Footers/Footer';

const ConfirmedBooking = () => {
  const location = useLocation();
  const { date, time, guests, occasion } = location.state || {};

  return (

    <div className='app-container'>
      <Headers />
      <div className="notification">
        <h1>Booking Confirmed!</h1>
        <p>Your reservation has been successfully booked.</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Guests:</strong> {guests}</p>
        <p><strong>Occasion:</strong> {occasion}</p>
      </div>
      <Footer />
    </div>
  );
};

export default ConfirmedBooking;
