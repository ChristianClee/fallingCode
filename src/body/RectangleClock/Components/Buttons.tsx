import React, {memo} from 'react';
import { ReactComponent as Lightning } from '../../../assets/pictures/svg/lightning.svg'
import { ReactComponent as NoLightning } from '../../../assets/pictures/svg/lightning-no.svg'
import { ReactComponent as Reset } from "../../../assets/pictures/svg/reset.svg"


type ButtonsType = {
  getTime: () => void
  reset: () => void
}

const Buttons = function ({ getTime, reset }: ButtonsType) {

  
  function clickPerspectiveButton(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.currentTarget.classList.toggle("active")
    getTime()

  }

  return (
    <div className="rectangle__buttons">
      <div className='rectangle__share'>
        <div className="rectangle__perspectiveButton" onClick={clickPerspectiveButton}>
          <div className="rectangle__button front">
            <Lightning className='off'></Lightning>
            <NoLightning className='on'></NoLightning>

          </div>
          <div className="rectangle__button left"></div>
          <div className="rectangle__button right"></div>
        </div>
        <div className='rectangle__background'></div>
      </div>
      <div className="rectangle__share" onClick={() => reset()}>
        <div className="rectangle__perspectiveButton reset" >
          <div className="rectangle__button front">
            <Reset className='resetBtn' />
          </div>
          <div className="rectangle__button left"></div>
          <div className="rectangle__button right"></div>
        </div>
        <div className='rectangle__background'></div>
      </div>
    </div>
  );
}

export default Buttons;