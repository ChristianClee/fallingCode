import React from 'react';
import RoundCircle from '../components/RoundCircle/RoundCircle';
import BlueCircle from '../components/BlueCircle/BlueCircle';
import RectangleClock from '../components/RectangleClock/RectangleClock';
import style from "./Clocks.module.scss"


const Clocks:React.FC = () => {
  return (
    <div className='clocks'>
      <div className={style.wrapper}>
        <RoundCircle />
        <div className={style.littleContainer}>
          <BlueCircle />
          <RectangleClock />
        </div>
      </div>
    </div>
    
  );
}
export default Clocks;