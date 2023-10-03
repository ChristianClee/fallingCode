import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import TimeElem from './Components/TimeElem';
import Buttons from './Components/Buttons';
import { matches } from "./Components/imports"
import { useSelector } from 'react-redux';
import { selectRectangle } from "../../redux/slices/rectangleSlice"
import { useActions } from '../../hooks/reduxHook';


type getMoveType = (
  rotate: HTMLDivElement,
  deg: number,
  interval: NodeJS.Timer,
  index: number,
  func: (arg: any) => void
) => void
  



const RectangleClock: React.FC = () => {
  const { togglestateClock, timePlus, cleanTime } = useActions()

  const {
    stateClock,
    unitsSecond,
    tensSecond,
    unitsMinuet,
    tensMinuet,
    unitsHour,
    tensHour
  } = useSelector(selectRectangle)

  const [unitSec, setUnitSec] = useState(matches[unitsSecond])
  const [tenSec, setTenSec] = useState(matches[tensSecond])
  const [unitMin, setUnitMin] = useState(matches[unitsMinuet])
  const [tenMin, setTenMin] = useState(matches[tensMinuet])
  const [unitHour, setUnitHour] = useState(matches[unitsHour])
  const [tenHour, setTenHour] = useState(matches[tensHour])



  const unitsSecRotate = useRef<HTMLDivElement>(null!)
  const tensSecRotate = useRef<HTMLDivElement>(null!)
  const unitMinRotate = useRef<HTMLDivElement>(null!)
  const tenMinRotate = useRef<HTMLDivElement>(null!)
  const unitHourRotate = useRef<HTMLDivElement>(null!)
  const tenHourRotate = useRef<HTMLDivElement>(null!)


  const intervalMain = useRef<NodeJS.Timer>(null!)

  const unitsSecInterval = useRef<NodeJS.Timer>(null!)
  const tensSecInterval = useRef<NodeJS.Timer>(null!)
  const unitMinInterval = useRef<NodeJS.Timer>(null!)
  const tenMinInterval = useRef<NodeJS.Timer>(null!)
  const unitHourInterval = useRef<NodeJS.Timer>(null!)
  const tenHourInterval = useRef<NodeJS.Timer>(null!)




  useEffect(() => {
    if (stateClock) return
    getMove(unitsSecRotate.current, 0, unitsSecInterval.current, unitsSecond, setUnitSec )
  }, [unitsSecond])

  useEffect(() => {
    if (stateClock) return
    getMove(tensSecRotate.current, 0, tensSecInterval.current, tensSecond, setTenSec)
  }, [tensSecond])

  useEffect(() => {
    if (stateClock) return
    getMove(tensSecRotate.current, 0, unitMinInterval.current, unitsMinuet, setUnitMin)
  }, [unitsMinuet])

  useEffect(() => {
    if (stateClock) return
    getMove(tensSecRotate.current, 0, tenMinInterval.current, tensMinuet, setTenMin)
  }, [tensMinuet])

  useEffect(() => {
    if (stateClock) return
    getMove(unitHourRotate.current, 0, unitHourInterval.current, unitsHour, setUnitHour)
  }, [unitsHour])

  useEffect(() => {
    if (stateClock) return
    getMove(tenHourRotate.current, 0, tenHourInterval.current, tensHour, setTenHour)
  }, [tensHour])










  function checkInterval() {
    
    // it checks whether button was clicked or not, it prevents creation new setTimeout 
    if (!stateClock) {
      clearInterval(intervalMain.current)
      togglestateClock()
      return true
    }
    togglestateClock()
    return false
  }
  function getNormolizeRotate(rotate: HTMLDivElement) {
    rotate.style.transform = `rotateX(${0}deg)`
  }
  
  function getReset() {
    cleanTime()
    setUnitSec(matches[0])
    setTenSec(matches[0])
    setUnitMin(matches[0])
    setTenMin(matches[0])
    setUnitHour(matches[0])
    setTenHour(matches[0])
  }
  function getTime() {
    if (checkInterval()) return

    intervalMain.current = setInterval(() => {
      timePlus()
    }, 1000)
  }
  const getMove: getMoveType = (rotate, deg, interval, index, func) => {
    interval = setInterval(() => {
      deg -= 3
      rotate.style.transform = `rotateX(${deg}deg)`
      if (deg <= -180) {
        clearInterval(interval)
        getNormolizeRotate(rotate)
        func(matches[index])
      }
    }, 10)
  }



  return (
    <section className='rectangle'>
      <div className="rectangle__clock">
        
  
        <Buttons getTime={getTime} reset={getReset}/>
        <div className="rectangle__display">
          <div className="rectangle__time">
            <TimeElem imgs={tenHour} rotateElem={tenHourRotate} measure={3} numb={tensHour} deg={50} />
            <TimeElem imgs={unitHour} rotateElem={unitHourRotate} measure={10} numb={unitsHour} deg={11} />
          </div>
          <div className="rectangle__time">
            <TimeElem imgs={tenMin} rotateElem={unitMinRotate} measure={6} numb={tensMinuet} deg={20} />
            <TimeElem imgs={unitMin} rotateElem={tenMinRotate} measure={10} numb={unitsMinuet} deg={11} />
          </div>
          <div className="rectangle__time">
            <TimeElem imgs={tenSec} rotateElem={tensSecRotate} measure={6} numb={tensSecond} deg={20}/>
            <TimeElem imgs={unitSec} rotateElem={unitsSecRotate} measure={10} numb={unitsSecond} deg={11} />
          </div>
        </div>
      </div>
      
    </section>
  );
}
export default RectangleClock;