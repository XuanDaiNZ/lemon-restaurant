import React from 'react';
import './Main.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { submitAPI } from './../../../pages/api';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  date: Yup.date().required('Please choose a date for your reservation'),
  time: Yup.string().required('Please select a time for your reservation'),
  guests: Yup.number().min(2, 'Number of guests must be at least 2 for reservation').required('Please specify number of guests'),
  occasion: Yup.string().required('Please select an occasion'),
});

const BookingForm = ({ availableTimes = [], dispatch, onBooking }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const success = await submitAPI(values);
      if (success) {
        onBooking(values);
        navigate('/confirmed', { state: values });
        console.log('Form submitted:', values);
      } else {
        console.error('Failed to submit the reservation.');
        // Handle submission failure
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle submission error
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          date: '',
          time: '',
          guests: 1,
          occasion: 'Birthday',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form className="booking-form">
            <label htmlFor="date">Choose date</label>
            <Field type="date" id="date" name="date" />
            <ErrorMessage name="date" component="div" className="error-message" />

            <label htmlFor="time">Choose time</label>
            <Field as="select" id="time" name="time">
              <option value="" disabled>Select a time</option>
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </Field>
            <ErrorMessage name="time" component="div" className="error-message" />

            <label htmlFor="guests">Number of guests</label>
            <Field type="number" id="guests" name="guests" min="1" max="10" />
            <ErrorMessage name="guests" component="div" className="error-message" />

            <label htmlFor="occasion">Occasion</label>
            <Field as="select" id="occasion" name="occasion">
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </Field>
            <ErrorMessage name="occasion" component="div" className="error-message" />

            <button type="submit" disabled={isSubmitting || !isValid}>
              Make Your Reservation
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
