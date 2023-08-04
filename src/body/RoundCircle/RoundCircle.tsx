import React, { useRef, useState } from 'react';
import Spans from './Components.tsx/Spans';
import OuterArrow from './Components.tsx/OuterArrow';
import FormOne from './Components.tsx/FormOne';
import Message from './Components.tsx/Message';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectClock } from '../../redux/slices/clockSlice';
import { useActions } from '../../redux/reduxHook';
import  "boxicons" 



const RoundCircle: React.FC = () => {
  const { messages } = useSelector(selectClock)

  const {
    addNewMessage,
    cleanMessagesStore,
    cleanMessages,
  } = useActions()

  const outerArrow = useRef(null!)
  const innerArrow = useRef(null!)
  const millsecondsTime = useRef(null!)

  const countLoop = useRef<number>(0)
  const bigArrowDeg = useRef<number>(45)
  const littleArrowDeg = useRef<number>(0)
  const millseconds = useRef<number>(0)
  const countLoopClick = useRef<number>(0)
  const lastValue = useRef<number>(0)
  const firstRival = useRef<number>(0)
  const [messageDate, setMessageDate] = useState() 




  let flag = false
  let move: NodeJS.Timer

  
  const buttons = {
    start:
      <button className='tableManagment__button tableManagment__button_start'
        onClick={start}
        >
        start
      </button>
    ,
    stop:
      <button className='tableManagment__button tableManagment__button_stop'
        onClick={stop}
      >
        stop
      </button>
    ,
    reset:
      <button className='tableManagment__button tableManagment__button_reset'
        onClick={restart}
      >
        reset
      </button>
    ,
    loop:
      <button className='tableManagment__button tableManagment__button_loop'
        onClick={loop}
      >
        loop
      </button>
  }
  const matches = {
    startClick:
      <FormOne>
        {buttons.loop}
        {buttons.stop}
      </FormOne>
    ,
    stopClick:
      <FormOne>
        {buttons.reset}
        {buttons.start}
      </FormOne>
    ,
    resetClick:
      <FormOne>
        {buttons.start}
      </FormOne>
  }
  const [statusButtons, setStatusButtons] = useState(matches.resetClick)
  // const [messages, setMessages] = useState<messageDateType[]>([])


  
  function getResult() {
    millseconds.current += 1
  }
  function getMoveBigArrow() {
      //@ts-ignore
    outerArrow.current.style.transform = `rotate(${bigArrowDeg.current+=.06}deg)`
  }
  function getMoveLittleArrow() {
    //@ts-ignore
    innerArrow.current.style.transform = `rotate(${littleArrowDeg.current += 3.6}deg)`
  }
  function start() {
    if (!flag) {
      move = setInterval(() => {
        getMoveBigArrow()
        getMoveLittleArrow()
        getResult()
        const timeNow = getTime(millseconds.current)
        setTableValue(timeNow)
      }, 10)
      flag = true
      setStatusButtons(matches.startClick)
    }  
  } 
  function stop() {
    clearInterval(move)
    setStatusButtons(matches.stopClick)
    flag = false
  }
  function restart() {
    //@ts-ignore
    outerArrow.current.style.transform = `rotate(${45}deg)`
    bigArrowDeg.current = 45
    //@ts-ignore
    innerArrow.current.style.transform = `rotate(${0}deg)`
    littleArrowDeg.current = 0


    clearDisplay()
    setStatusButtons(matches.resetClick)
    cleanMessagesStore()
    cleanMessages()
    countLoop.current = 0
  }
  function loop() {
    countLoop.current += 1
    const data = { count: "", timeNow: "", lag: "", lagFirst :""}

    
    

    const timeNow = getTime(millseconds.current)
    const differenceClosect = getDifference(millseconds.current, lastValue.current) // the distance between the two closest rival
    const differenceFirst = getDifferenceFirst() 
    lastValue.current = millseconds.current // !!!

    
    data.count = String(countLoop.current)
    data.timeNow = timeNow
    data.lag = differenceClosect
    data.lagFirst = differenceFirst

    addNewMessage( data )

  }
  function getDifferenceFirst(): string {
    if (firstRival.current === 0) {
      firstRival.current = millseconds.current
    }
    return getTime(millseconds.current - firstRival.current)
  }
  function setTableValue(value:string):void {
    // @ts-ignore
    millsecondsTime.current.textContent = value
  }
  function addZerro(value: number|string): string {
    value = String(value)
    return (value.length < 2) ? `0${value}` : value
  }
  function getTime(time:number):string {
    const tenthSec = addZerro(time % 100)
    let seconds = addZerro(Math.floor(time / 100)%60)
    const minuets = addZerro(Math.floor(time / 100 / 60))
    return `${minuets}:${seconds}:${tenthSec}`
  }
  function clearDisplay() {
    //@ts-ignore
    millseconds.current = 0
    //@ts-ignore
    millsecondsTime.current.textContent = '00:00:00'
  }
  function getDifference(last:number, old:number):string {
    let difference = last - old
    if (difference < 0) difference *= -1
    return getTime(difference)
  }


    

  return (
    <section className='roundCircle'>
      <div className="roundCircle__body">
        
        <div className="roundCircle__clock">
          <Spans />
          <OuterArrow outerArrowRef={outerArrow} innerArrowRef={innerArrow} millsecondsTime={millsecondsTime} />
        </div>

        <div className='tableManagment' >
          {statusButtons}
          <div className='tableManagment__container'>
            <div className='tableManagment__loop'>
              {messages.map((message) => (
                <Message
                  key={message.timeNow}
                  timeNow={message.timeNow}
                  count={message.count}
                  lag={message.lag}
                  lagFirst={message.lagFirst}
                />
              )
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
export default RoundCircle;