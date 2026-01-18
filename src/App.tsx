import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Home from './pages/Home';
import Recruit from './pages/Recruit';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-barbar-black">
        <Sidebar />
        <main className="flex-1 ml-16 md:ml-64 relative transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recruit" element={<Recruit />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
