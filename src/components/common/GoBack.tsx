import React from 'react';
import { Link } from 'react-router-dom'
import style from "./GoBack.module.scss"
import { ReactComponent as GoBackSVG } from "../../assets/pictures/svg/goBackArrow.svg"
import { deleteAll } from "../../hooks/customHookFallincode"
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/reduxHook';


const GoBack: React.FC = () => {
  const { nullCount } = useActions()

  return (
    <div
      className={style.wrapper}
      onClick={() => {
        deleteAll()
        nullCount()
      }}
    >
      <GoBackSVG className={style.picture} />
      <Link className={style.link} to="/"></Link>
    </div>
   
  );
}
export default GoBack;