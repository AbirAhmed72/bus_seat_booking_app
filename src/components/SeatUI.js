import React, { useEffect, useState } from "react";
import SeatBookingForm from "./SeatBookingForm";
import AdminDetailsModal from "./AdminDetailsModal";

const SeatUI = ({ busNumber, setCurrentBus, isAdmin }) => {
  const [seatStates, setSeatStates] = useState({});
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const seatLayout = [
    { row: "A", seats: ["A1", "A2", "A3"] },
    { row: "B", seats: ["B1", "B2", "B3"] },
    { row: "C", seats: ["C1", "C2", "C3"] },
    { row: "D", seats: ["D1", "D2", "D3"] },
    { row: "E", seats: ["E1", "E2", "E3"] },
  ];

  const getSeatClass = (seat) => {
    if (seatStates[seat]?.booked) {
      return isAdmin ? "admin-booked" : "booked";
    }
    return "available";
  };

  useEffect(() => {
    const storedSeats = JSON.parse(localStorage.getItem(busNumber)) || {};
    setSeatStates(storedSeats);
  }, [busNumber]);

  const handleSeatClick = (seat) => {
    const seatData = seatStates[seat];
    
    if (!isAdmin && seatData?.booked) {
      alert("This seat is already booked!");
      return;
    }

    if (isAdmin && seatData?.booked) {
      setSelectedBooking({ ...seatData, seat });
    } else {
      setSelectedSeat(seat);
    }
  };

  const handleBookingSuccess = (seat, bookingData) => {
    const updatedSeatStates = { 
      ...seatStates, 
      [seat]: { 
        booked: true,
        name: bookingData.name,
        destination: bookingData.destination,
        time: bookingData.time
      } 
    };
    setSeatStates(updatedSeatStates);
    localStorage.setItem(busNumber, JSON.stringify(updatedSeatStates));
    setSelectedSeat(null);
  };

  const handleCancelBooking = (seat) => {
    const updated = {...seatStates};
    delete updated[seat];
    setSeatStates(updated);
    localStorage.setItem(busNumber, JSON.stringify(updated));
    setSelectedBooking(null);
  };

  return (
    <div className="bus-layout-container">
        <div className="bus-header">
            <div className="entrance-door">🚪 Entrance</div>
            <h2 className="bus-number">BUS NO. {busNumber}</h2>
            <div className="driver-seat">🚌 Driver</div>
        </div>
      <div className="bus-seat-layout">
        {seatLayout.map((row) => (
          <div key={row.row} className="bus-row">
            <div
              className={`seat single ${getSeatClass(row.seats[0])}`}
              onClick={() => handleSeatClick(row.seats[0])}
            >
              {row.seats[0]}
              {isAdmin && seatStates[row.seats[0]]?.booked}
            </div>

            <div className="aisle"></div>

            <div className="double">
              {row.seats.slice(1).map((seat) => (
                <div
                  key={seat}
                  className={`seat ${getSeatClass(seat)}`}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat}
                  {isAdmin && seatStates[seat]?.booked}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => setCurrentBus(null)}>
        Back to {isAdmin ? "Admin Panel" : "Selection"}
      </button>

      {selectedSeat && (
        <div className="booking-form-inline">
          <SeatBookingForm
            seat={selectedSeat}
            busNumber={busNumber}
            onClose={() => setSelectedSeat(null)}
            onBookingSuccess={(data) => handleBookingSuccess(selectedSeat, data)}
          />
        </div>
      )}

      {selectedBooking && (
        <AdminDetailsModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
          onCancel={() => handleCancelBooking(selectedBooking.seat)}
        />
      )}
    </div>
  );
};

export default SeatUI;