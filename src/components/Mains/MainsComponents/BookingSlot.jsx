import React from 'react';
import './Main.css';

const BookingSlot = ({ booking }) => {
  if (!booking) {
    return null; // Don't render anything if booking is undefined
  }

  return (
    <div className='booking-container'>
    <div className="booking-slot">
      <h3>Booked Slot</h3>
      <p><strong>Date:</strong> {booking.date}</p>
      <p><strong>Time:</strong> {booking.time}</p>
      <p><strong>Guests:</strong> {booking.guests}</p>
      <p><strong>Occasion:</strong> {booking.occasion}</p>
    </div>
    </div>
  );
};

export default BookingSlot;
