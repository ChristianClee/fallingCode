import React from 'react';
import style from "./ButtonManagement.module.scss"
import { useSelector } from 'react-redux';
import { selectFallingCode } from "../../../redux/slices/fallingCode"



interface IButton {
  text: string
  func?: (arg: number) => void
  func2?: () => void
  func3?: () => void
  value?: number
}
const ButtonManagement: React.FC<IButton> = ({ text, func, func2, func3, value }) => {
  const { countLine } = useSelector(selectFallingCode)
  console.log(countLine)

  let  classNameBtn = (text === "add new") ?
    [style.wrapper, style.wrapperMain].join(" ")
    :
    style.wrapper
  
  classNameBtn = (countLine === 0) ?
    [classNameBtn, style.wrapperBig1].join(" ")
    :
    classNameBtn



  return (
    <button
      className={classNameBtn}
      
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

