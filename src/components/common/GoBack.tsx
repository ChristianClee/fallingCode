import React from 'react';
import { Link } from 'react-router-dom'
import style from "./GoBack.module.scss"
import {ReactComponent as GoBackSVG} from "../../assets/pictures/svg/goBackArrow.svg"



const GoBack:React.FC = () => {
  return (
    <div className={style.wrapper}>
      <GoBackSVG className={style.picture} />
      <Link className={style.link} to="/"></Link>
    </div>
   
  );
}
export default GoBack;