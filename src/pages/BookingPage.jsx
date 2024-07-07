import React, { useReducer, useState } from 'react';
import BookingForm from '../components/Mains/MainsComponents/BookingForm';
import BookingSlot from '../components/Mains/MainsComponents/BookingSlot';
import Headers from '../components/Headers/Headers';
import Footer from '../components/Footers/Footer';
import ConfirmedBooking from '../pages/ConfirmedBooking';
import { fetchAPI, submitAPI } from './api'; // Import fetchAPI and submitAPI

const initializeTimes = (date = new Date()) => {
  return fetchAPI(date);
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return fetchAPI(new Date(action.date)); // Fetch times based on selected date
    default:
      return state;
  }
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [bookings, setBookings] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  const submitForm = async (formData) => {
    try {
      const isSubmitted = await submitAPI(formData); // Ensure submitAPI is awaited
      if (isSubmitted) {
        setBookingConfirmed(true);
      } else {
        alert('Failed to submit booking.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className='app-container'>
      <Headers />
      <div className='main-content'>
        {!bookingConfirmed && (
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            onBooking={handleBooking}
            submitForm={submitForm}
          />
        )}
        <div className='bookings'>
          {bookings.map((booking, index) => (
            <BookingSlot key={index} booking={booking} />
          ))}
        </div>
      </div>
      <Footer />
      {bookingConfirmed && <ConfirmedBooking />}
    </div>
  );
}

export default BookingPage;
