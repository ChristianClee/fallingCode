import React from 'react';
import style from "./SetController.module.scss"

interface ISetController{
  text: string
  count: number
  func: (arg: number) => void
  gap: number
  func2: (arg: number, arg2: boolean) => void
  percentAction: number
}

const SetController: React.FC<ISetController> = ({ text, count, gap, func, func2, percentAction }) => {

  function pluss(gap: number) {
    const result = count + gap
    if (result > 100 ) return
    func(result)
    func2(percentAction , true)
  }
  
  function minues(gap: number) {
    const result = count - gap
    if (result < 0) return
    func(result)
    func2(percentAction, false)
  }

  return (
    <div className={style.wrapper}>
      <button
        onClick={() =>  pluss(gap) }
      >
        +
      </button>
      <div>
        <span>{text}</span>
        {
          text === "move"
            ?
            <span>{count / 5}</span>
            :
            <span>{Math.ceil(count / 20) }</span>
        }
        
      </div>
      
      <button
        onClick={() => minues(gap)}
      >
        -
      </button>
    </div>
  );
}
export default SetController;