import React, { useState } from 'react';

const AdminPanel = ({ buses, onSelectBus }) => {
  const [selectedBus, setSelectedBus] = useState('');

  const handleBusSelect = (bus) => {
    setSelectedBus(bus);
    onSelectBus(bus);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <label>
        Select Bus:
        <select value={selectedBus} onChange={(e) => handleBusSelect(e.target.value)}>
          <option value="">Select Bus</option>
          {buses.map((bus) => (
            <option key={bus} value={bus}>
              {bus}
            </option>
          ))}
        </select>
      </label>
      {selectedBus && (
        <button onClick={() => window.location.href = `/`}>View Seats for Bus {selectedBus}</button>
      )}
    </div>
  );
};

export default AdminPanel;