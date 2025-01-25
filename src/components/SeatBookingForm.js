import React, { useState } from "react";

const SeatBookingForm = ({ seat, busNumber, onClose, onBookingSuccess }) => {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("Mirpur 11");
  const [time, setTime] = useState("8:00 AM");

  const times = ["8:00 AM", "9:00 AM", "5:00 PM", "6:00 PM"];

  const handleBooking = () => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }
  
    const bookingData = {
      booked: true,
      name,
      destination,
      time
    };
  
    const bookedSeats = JSON.parse(localStorage.getItem(busNumber)) || {};
    bookedSeats[seat] = bookingData;
    localStorage.setItem(busNumber, JSON.stringify(bookedSeats));
  
    alert(`Seat ${seat} booked successfully!`);
    onBookingSuccess(bookingData); // Pass the full booking data
    onClose();
  };

  return (
    <div className="booking-form-inline">
      <h2 className="booking-title">Seat Booking Form</h2>

      <input
        type="text"
        className="input-box"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p><strong>Bus No:</strong> {busNumber}</p>
      <p><strong>Seat No:</strong> {seat}</p>

      <select className="select-box" value={destination} onChange={(e) => setDestination(e.target.value)}>
        <option value="Mirpur 11">Mirpur 11</option>
        <option value="Gulshan">Gulshan</option>
        <option value="Dhanmondi">Dhanmondi</option>
      </select>

      <select className="select-box" value={time} onChange={(e) => setTime(e.target.value)}>
        {times.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <div className="button-group">
        <button className="book-button" onClick={handleBooking}>Book Seat</button>
        <button className="cancel-button" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default SeatBookingForm;