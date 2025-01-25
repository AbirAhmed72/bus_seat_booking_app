// AdminPanel.jsx
import React, { useState } from "react";
import SeatUI from "./SeatUI";

const buses = ["S098", "S099", "S100"];

const AdminPanel = () => {
  const [currentBus, setCurrentBus] = useState(null);
  const [isAdmin, setIsAdmin] = useState(true); // Toggle this for admin/user mode

  return (
    <div className="admin-container">
      {!currentBus ? (
        <>
          <h1 className="admin-title">{isAdmin ? "Admin Panel" : "User Booking"}</h1>
          <select id="bus-select" className="select-box">
            {buses.map((bus) => (
              <option key={bus} value={bus}>
                {bus}
              </option>
            ))}
          </select>
          <button 
            className="admin-button" 
            onClick={() => setCurrentBus(document.getElementById("bus-select").value)}
          >
            {isAdmin ? "Manage Bus" : "Book Seats"}
          </button>
          <button className="role-switch" onClick={() => setIsAdmin(!isAdmin)}>
            Switch to {isAdmin ? "User" : "Admin"}
          </button>
        </>
      ) : (
        <SeatUI 
          busNumber={currentBus} 
          setCurrentBus={setCurrentBus} 
          isAdmin={isAdmin} 
        />
      )}
    </div>
  );
};

export default AdminPanel;