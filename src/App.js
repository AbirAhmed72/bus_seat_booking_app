import React, { useState } from "react";
import SeatUI from "./components/SeatUI";
import AdminPanel from "./components/AdminPanel";
import Layout from './components/Layout';
import "./styles.css"; // Import the CSS file

const App = () => {
  const [currentBus, setCurrentBus] = useState(null);

  return (
    <Layout>
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg">
        {!currentBus ? (
          <AdminPanel setCurrentBus={setCurrentBus} />
        ) : (
          <SeatUI busNumber={currentBus} setCurrentBus={setCurrentBus} />
        )}
      </div>
    </div>
    </Layout>
  );
};

export default App;

