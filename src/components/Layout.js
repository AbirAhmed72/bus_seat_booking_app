import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      {/* Logo Only */}
      <div className="selise-logo"></div>
      {children}
    </div>
  );
};

export default Layout;