import React from 'react';
import Header from './components/header/Header';
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';



import Greeting from './pages/greeting/Greeting';
import Clocks from './pages/clocks/Clocks';
import FallingCode from './pages/fallingCode/FallingCode';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Greeting />} />
        <Route path="clocks" element={<Clocks />} />
        <Route path="fallingCode" element={<FallingCode />} />
      </Route>
    </Routes>
  );
}

export default App;
