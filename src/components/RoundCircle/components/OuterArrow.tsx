import React, { useState } from 'react';
import traingle from '../../../assets/pictures/jpg/triangle.svg'

type OuterArrowType = {
  outerArrowRef: React.LegacyRef<HTMLDivElement>
  innerArrowRef: React.LegacyRef<HTMLDivElement>
  millsecondsTime: React.LegacyRef<HTMLDivElement>
}


const OuterArrow: React.FC<OuterArrowType> = ({ outerArrowRef, innerArrowRef, millsecondsTime }) => {
  const [digits, setDigits] = useState(0)


  return (
    <>
      <div className="roundCircle__outerArrow" ref={outerArrowRef}>
        <div className='roundCircle__arrow'>
          <img className="ibg" src={traingle} alt="no-picture" />
        </div>
      </div>
      <div className='roundCircle__time'>
        <div className="roundCircle__display" ref={millsecondsTime}>
          00:00:00
        </div>
        <div className="roundCircle__littleClock" ref={innerArrowRef}>
          <div className="roundCircle__littleArrow"></div>
          <div className="roundCircle__littleRound"></div>
        </div>
      </div>
    </>
    
  );
}
export default OuterArrow;