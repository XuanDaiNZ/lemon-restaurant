import { fetchAPI } from '../pages/api';
import { initializeTimes, updateTimes } from './../pages/BookingPage';

jest.mock('./../pages/api', () => ({
    fetchAPI: jest.fn(),
}));

describe('BookingPage reducer functions', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('initializeTimes', () => {
        it('should return the correct value from fetchAPI', () => {
            const mockDate = new Date();
            const mockTimes = ['12:00', '13:00', '14:00'];
            fetchAPI.mockReturnValueOnce(mockTimes);

            const result = initializeTimes(mockDate);
            expect(fetchAPI).toHaveBeenCalledWith(mockDate);
            expect(result).toEqual(mockTimes);
        });
    });

    describe('updateTimes', () => {
        it('should return the same state if action type is not UPDATE', () => {
            const state = ['12:00', '13:00', '14:00'];
            const action = { type: 'OTHER_ACTION' };

            const result = updateTimes(state, action);
            expect(result).toEqual(state);
        });

        it('should return the updated times from fetchAPI if action type is UPDATE', () => {
            const state = ['12:00', '13:00', '14:00'];
            const action = { type: 'UPDATE', date: '2024-07-10' };
            const mockUpdatedTimes = ['15:00', '16:00', '17:00'];
            fetchAPI.mockReturnValueOnce(mockUpdatedTimes);

            const result = updateTimes(state, action);
            expect(fetchAPI).toHaveBeenCalledWith(new Date(action.date));
            expect(result).toEqual(mockUpdatedTimes);
        });
    });
});