import React, { useRef } from 'react';
import GoBack from '../../components/common/GoBack';
import style from "./FallingCode.module.css";
import { useFallingCode } from "../../hooks/customHookFallincode"
import ControlPanel from '../../components/fallingCode/controlPanel/ControlPanel';


const FallingCode: React.FC = () => {
  const codeRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  useFallingCode(codeRef, wrapRef)

  return (
    <div className={style.wrapper} ref={wrapRef}>
     
      {/* <div className={style.buttonBackConteiner}>
        <GoBack />
      </div> */}
      <div className={style.controllerContainer}>
        <ControlPanel />
      </div>
      <div className="falling-code" ref={codeRef}></div>
    </div>
  );
}
export default FallingCode;


