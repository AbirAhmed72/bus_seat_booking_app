// AdminDetailsModal.jsx
import React from "react";

const AdminDetailsModal = ({ booking, seat, onClose, onCancel }) => {
    return (
      <div className="admin-modal-overlay">
        <div className="admin-modal-content">
          <h2>Booking Details for Seat {seat}</h2>
          <p><strong>Passenger Name:</strong> {booking?.name || 'N/A'}</p>
          <p><strong>Destination:</strong> {booking?.destination || 'N/A'}</p>
          <p><strong>Departure Time:</strong> {booking?.time || 'N/A'}</p>
          
          <div className="admin-modal-buttons">
            <button 
              className="admin-cancel-button"
              onClick={() => {
                onCancel(seat);
                onClose();
              }}
            >
              Cancel Booking
            </button>
            <button className="admin-close-button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

export default AdminDetailsModal;