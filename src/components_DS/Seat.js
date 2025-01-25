import React from 'react';

const Seat = ({ seat, onClick }) => {
  return (
    <div
      className={`seat ${seat.booked ? 'booked' : 'available'}`}
      onClick={onClick}
    >
      {seat.id}
    </div>
  );
};

export default Seat;