import React from 'react';
import Header from './components/header/Header';
import FallingCode from './pages/fallingCode/FallingCode';


const Layout: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <FallingCode/>
      </main>
    </div>
  );
}
export default Layout;