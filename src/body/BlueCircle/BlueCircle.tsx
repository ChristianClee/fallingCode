import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';


const BlueCircle: React.FC = () => {
  const spans = useRef<NodeListOf<HTMLSpanElement>>(null!)
  const buttonClock = useRef<HTMLDivElement>(null)
  const arrowClock = useRef<HTMLDivElement>(null)
  const startButton = useRef<HTMLDivElement>(null)
  const interval = useRef<NodeJS.Timer | null>(null)
  const millisecondTime = useRef<number>(-1)
  const arrowClockDeg = useRef<number>(0)

 
  useLayoutEffect(() => {
    spans.current = document.querySelectorAll(".BlueCircle__metrix span")
  }, [])
  
  const [displayScoreboard, setDisplayScoreboard] = useState("00:00:00")
  


  function tuggle() {
    buttonClock.current?.classList.toggle('active')
    if (interval.current === null) {
      start()
    } else {
      stop(interval.current)
    }
  }
  function start() {
    interval.current = setInterval(() => {
      millisecondTime.current += 1
      const millisecond = millisecondTime.current

      animateTrigger(true)
      
      
      


      const index = getHangred(millisecond)
      startView(index)

      getTimeDisplay(millisecond)

    }, 10)
  }
  function getHangred(num: number): number {
    return num % 100
  }
  function startView(index: number): void {
    
    const two = 'rgb(15, 50, 74) none repeat scroll 0% 0% / auto padding-box border-box'
    const color = getComputedStyle(spans.current[index]).background
    if (color === two) {
      spans.current[index].style.background = "white"
    } else {
      spans.current[index].style.background = "rgb(15, 50, 74)"
    }
  }
  function stop(current: NodeJS.Timer) {
    clearInterval(current)
    interval.current = null

  }
  function animateTrigger(boll: boolean): void{
    if (boll) {
      if (arrowClock.current !== null) {
        arrowClock.current.style.transform = `translateX(-50%) translateY(-50%) rotate(${arrowClockDeg.current += 3.6}deg)`
      }
    } else {
      arrowClockDeg.current = 0
      if (arrowClock.current !== null) {
        arrowClock.current.style.transform = `translateX(-50%) translateY(-50%) rotate(0deg)`
      }
    }
  }
  function reset() {
    millisecondTime.current = -1
    resetStile(spans.current)
    setDisplayScoreboard("00:00:00")
    animateTrigger(false)
    
  }
  function resetStile(elements: NodeListOf<HTMLElement> ) {
    for (let i = 0; i < 100; i++) {
      elements[i].style.background = 'white'
    }
  }
  function getTimeDisplay(millisecond: number) {
    if (getHangred(millisecond) !== 0) return
    const sec = calcSecond(millisecond)
    const minuets = calcMinuets(millisecond)
    const hours = calcHours(millisecond)
    setDisplayScoreboard(`${hours}:${minuets}:${sec}`)
  }
  function calcSecond(millisecond: number): string {
    const sec = Math.floor(millisecond / 100 % 60)
    return getZerro(sec)
  }
  function calcMinuets(millisecond: number): string {
    const min = Math.floor(millisecond / 100 / 60 % 60)
    return getZerro(min)
  }
  function calcHours(millisecond: number): string {
    const hours = Math.floor(millisecond / 100 / 60 / 60 % 60)
    return getZerro(hours)
  }
  function getZerro(value: string | number): string {
    value = String(value)
    return (value.length < 2) ? `0${value}` : value
  }

  return (
    <section className='BlueCircle'>
 
      <div className="BlueCircle__clock">
        
        <div className="BlueCircle__metrix">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>


        <div className="BlueCircle__table">{displayScoreboard}</div>
        <div ref={startButton} className="buttonClock__start" onClick={tuggle}>
          <div></div>
          <div ref={buttonClock}></div>
          <div></div>
          <div ref={arrowClock}></div>
          <p>start</p>
        </div>

        <div className="buttonClock__reset" onClick={reset}>
          <span><i className='bx bx-reset'></i></span>
          <p>reset</p>
        </div>

      </div>


    </section>
  );
}
export default BlueCircle;