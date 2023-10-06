import React from 'react';
import Header from './components/header/Header';
import { Outlet } from "react-router-dom"


const Layout:React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;