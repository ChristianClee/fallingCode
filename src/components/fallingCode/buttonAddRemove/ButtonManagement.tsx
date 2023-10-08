import React from 'react';
import style from "./ButtonManagement.module.scss"



interface IButton {
  text: string
  func?: (arg: number) => void
  func2?: () => void
  func3?: () => void
  value?: number
}
const ButtonManagement: React.FC<IButton> = ({ text, func, func2, func3, value }) => {
  return (
    <button
      className={style.wrapper}
      onClick={() => {
        if (func3) {
          func3()
        }
        if (func && value) {
          func(value)
        }
        if (func2) {
          func2()
        }
      }}
    >
      {text}
    </button>
  );
}
export default ButtonManagement;

