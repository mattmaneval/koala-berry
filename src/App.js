import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/index';
import Flavors from './pages/Flavors/index';
import Toppings from './pages/Toppings/index';
import Benefits from './pages/Benefits/index';
import About from './pages/About/index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="flavors" element={<Flavors />} />
      <Route path="toppings" element={<Toppings />} />
      <Route path="benefits" element={<Benefits />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
