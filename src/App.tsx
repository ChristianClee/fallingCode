import React from 'react';
import Header from './components/header/Header';
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';


import Welcom from './components/Welcom/Welcom';
import Clocks from './pages/Clocks';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Clocks />} />
      </Route>
    </Routes>
  );
}

export default App;
