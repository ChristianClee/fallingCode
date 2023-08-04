import React from 'react';
import Header from './Header';
import { Outlet } from "react-router-dom"


const Layout:React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <footer></footer>
    </div>
  );
}
export default Layout;