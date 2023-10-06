import React from 'react';
import style from "./ButtonManagement.module.scss"



interface IButton {
  text: string
}
const ButtonManagement: React.FC<IButton> = ({text}) => {
  return (
    <button className={style.wrapper}>{text}</button>
  );
}
export default ButtonManagement;