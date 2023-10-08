import React from 'react';
import style from "./ButtonStartStop.module.scss"

interface IButton {
  text: string
  func: ()=>void
}

const ButtonStartStop: React.FC<IButton> = ({ text, func }) => {
  return (
    <button
      className={style.wrapper}
      onClick={ () => func()}
    >{text}</button>
  );
}
export default ButtonStartStop;