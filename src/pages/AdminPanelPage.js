import React from 'react';
import AdminPanel from '../components_DS/AdminPanel';

const AdminPanelPage = () => {
  const buses = ['Bus 1', 'Bus 2', 'Bus 3'];

  const handleSelectBus = (bus) => {
    console.log(`Selected Bus: ${bus}`);
  };

  return (
    <div>
      <AdminPanel buses={buses} onSelectBus={handleSelectBus} />
    </div>
  );
};

export default AdminPanelPage;