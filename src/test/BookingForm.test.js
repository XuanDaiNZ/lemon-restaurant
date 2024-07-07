import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from '../components/Mains/MainsComponents/BookingForm'; // Adjust the import path as per your project structure

test('Renders the BookingForm labels', () => {
            render( < BookingForm availableTimes = {
                    []
                }
                dispatch = {
                    () => {}
                }
                onBooking = {
                    () => {}
                }
                />);

                const dateLabel = screen.getByText('Choose date'); expect(dateLabel).toBeInTheDocument();

                const timeLabel = screen.getByText('Choose time'); expect(timeLabel).toBeInTheDocument();

                const guestsLabel = screen.getByText('Number of guests'); expect(guestsLabel).toBeInTheDocument();

                const occasionLabel = screen.getByText('Occasion'); expect(occasionLabel).toBeInTheDocument();
            });