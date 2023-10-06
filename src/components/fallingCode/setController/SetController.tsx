import React from 'react';
import style from "./SetController.module.scss"

interface ISetController{
  text: string
}

const SetController: React.FC<ISetController> = ({text}) => {
  return (
    <div className={style.wrapper}>
      <button>+</button>
      <span>{text}</span>
      <button>-</button>
    </div>
  );
}
export default SetController;