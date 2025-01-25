import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SeatBookingForm from '../components_DS/SeatBookingForm';

const SeatBookingPage = () => {
  const { seatId } = useParams();
  const navigate = useNavigate();
  const [seats, setSeats] = useState(JSON.parse(localStorage.getItem('seats')) || Array(20).fill({ booked: false, user: null }));

  const handleBook = (seatId, destination, time) => {
    const updatedSeats = [...seats];
    updatedSeats[seatId] = { booked: true, user: { destination, time } };
    setSeats(updatedSeats);
    localStorage.setItem('seats', JSON.stringify(updatedSeats));
    navigate('/');
  };

  return (
    <div>
      <SeatBookingForm seatId={seatId} onBook={handleBook} />
    </div>
  );
};

export default SeatBookingPage;