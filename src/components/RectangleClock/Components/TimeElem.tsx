
import React, {memo, useRef} from 'react';
import { ReactComponent as Triangle } from "../../../assets/pictures/svg/triangle-duotone.svg"


type TimeElemType = {
  imgs: {
    topFirst:string
    bottomFirst:string
    topSeccond:string
    bottomSecond:string
  }
  measure: number
  numb: number
  deg: number


  rotateElem?: React.MutableRefObject<HTMLDivElement>
}


const TimeElem = memo(function ({ imgs, rotateElem, measure, numb, deg }: TimeElemType) {
  const traingleRef = useRef<SVGSVGElement>(null!)
  if (traingleRef.current) {
    traingleRef.current.style.bottom = `${numb* deg}%`
  }

  return (
    <div className='timeElem'>
      <div className='timeElem__container'>
        <div className='timeElem__regulator' >
          <Triangle className='timeElem__slider' ref={traingleRef} />
          <div className='timeElem__measure'>
            {Array(measure).fill('').map((item, index) => {
               return <span key={index}></span>
            }) }
          </div>
        </div>
      </div>
      <div className="rectangle__timeElem">
        <img src={imgs.topSeccond} alt="" />
        <div className="rectangle__timeElemRotate" ref={rotateElem}>
          <img src={imgs.topFirst} alt="" />
          <span></span>
          <img src={imgs.bottomSecond} alt="" />
        </div>
        <img src={imgs.bottomFirst} alt="" />
      </div>
    </div>
    );
},


)
export default TimeElem;