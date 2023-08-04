import React from 'react';
import Header from './body/Header';
import { Routes, Route } from 'react-router-dom';

import RoundCircle from './body/RoundCircle/RoundCircle';
import BlueCircle from './body/BlueCircle/BlueCircle';
import RectangleClock from './body/RectangleClock/RectangleClock';
import Welcom from './body/Welcom/Welcom';
import Layout from './body/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Welcom />} />
        <Route path="round" element={< RoundCircle />} />
        <Route path="blue" element={<BlueCircle />} />
        <Route path="rectangle" element={<RectangleClock />} />
      </Route>
    </Routes>
  );
}

export default App;
