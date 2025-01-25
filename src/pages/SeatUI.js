import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Seat from '../components_DS/Seat';

const SeatUI = () => {
  const [seats, setSeats] = useState(JSON.parse(localStorage.getItem('seats')) || Array(20).fill({ booked: false, user: null }));
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('seats', JSON.stringify(seats));
  }, [seats]);

  const handleSeatClick = (seatId) => {
    if (seats[seatId].booked) {
      alert('Seat is already booked.');
    } else {
      navigate(`/book-seat/${seatId}`);
    }
  };

  return (
    <div>
      <h2>Seat UI</h2>
      <div className="seat-grid">
        {seats.map((seat, index) => (
          <Seat
            key={index}
            seat={{ id: index + 1, booked: seat.booked }}
            onClick={() => handleSeatClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SeatUI;