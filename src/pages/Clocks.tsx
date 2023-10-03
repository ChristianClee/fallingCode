import React from 'react';
import RoundCircle from '../components/RoundCircle/RoundCircle';
import BlueCircle from '../components/BlueCircle/BlueCircle';
import RectangleClock from '../components/RectangleClock/RectangleClock';


const Clocks:React.FC = () => {
  return (
    <div>
      <RoundCircle />
      <BlueCircle />
      <RectangleClock />
    </div>
  );
}
export default Clocks;