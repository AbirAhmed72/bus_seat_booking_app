import React, { useState } from 'react';

const SeatBookingForm = ({ seatId, onBook }) => {
  const [destination, setDestination] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (destination && time) {
      onBook(seatId, destination, time);
      alert('Seat booked successfully!');
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Seat {seatId}</h2>
      <label>
        Destination:
        <select value={destination} onChange={(e) => setDestination(e.target.value)}>
          <option value="">Select Destination</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
        </select>
      </label>
      <label>
        Time:
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="">Select Time</option>
          <option value="8:00 am">8:00 am</option>
          <option value="9:00 am">9:00 am</option>
          <option value="5:00 pm">5:00 pm</option>
          <option value="6:00 pm">6:00 pm</option>
        </select>
      </label>
      <button type="submit">Book Seat</button>
    </form>
  );
};

export default SeatBookingForm;