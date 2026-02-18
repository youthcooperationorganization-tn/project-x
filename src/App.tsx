import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './pages/Home/Home';
import Constitution from './pages/Constitution/Constitution';
import './App.css';
import Acts from './pages/Acts/Acts';
import Boards from './pages/Boards/Boards';
import Regions from './pages/Regions/Regions';

/**
 * Project X: Central App Engine
 * Logic: h-screen lock with internal scroll capability
 */

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Viewport locked to screen height to prevent body-level scrolling issues */}
      <div className="h-screen flex flex-col bg-white overflow-hidden">
        
        <NavigationBar />
        
        {/* The engine is flex-grow to take up remaining space.
          Overflow-hidden here ensures that the scrollbar is handled 
          by the specific Page component for a cleaner 'App-like' feel.
        */}
        <main className="main-content-engine relative flex-grow overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/constitution" element={<Constitution />} />
            <Route path="/acts" element={<Acts />} />
             <Route path="/boards" element={<Boards />} />
                          <Route path="/regions" element={<Regions />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
};

export default App;