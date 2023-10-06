import React from 'react';
import RoundCircle from '../../components/RoundCircle/RoundCircle';
import BlueCircle from '../../components/BlueCircle/BlueCircle';
import RectangleClock from '../../components/RectangleClock/RectangleClock';
import style from "./Clocks.module.scss"
import GoBack from '../../components/common/GoBack';



const Clocks: React.FC = () => {

  return (

    <div className={style.wrapper}>
      <div className={style.buttonBackConteiner}>
        <GoBack />
      </div>

      <div className={style.clocksContainer}>
        <div className={style.clocks}>
          <RoundCircle />
          <div className={style.littleContainer}>
            <BlueCircle />
            <RectangleClock />
          </div>
        </div>
      </div>

    </div>


  );
}
export default Clocks;