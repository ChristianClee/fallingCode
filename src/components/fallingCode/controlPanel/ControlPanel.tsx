import React from 'react';
import style from "./ControlPanel.module.scss"
import ButtonStartStop from '../buttonStartStop/ButtonStartStop';
import Display from '../display/Display';
import ButtonManagement from '../buttonAddRemove/ButtonManagement';
import SetController from '../setController/SetController';
import { useActions } from "../../../hooks/reduxHook"

const ControlPanel: React.FC = () => {
  const { startCodeState, stopCodeState } = useActions()

  return (
    <div className={style.wrapper}>
      {/* <div className={style.innerWrap}> */}
        {/* <Display /> */}
      <div className={style.container}>
        <ButtonStartStop text={"start"} func={ startCodeState } />
        <ButtonStartStop text={"stop"} func={stopCodeState} />
      </div>
        <div className={style.container}>
          <ButtonManagement text={"add"} />
          <ButtonManagement text={"remove"} />
      </div>
      <div className={style.container}>
        <SetController text='speed' />
      </div>
      <div className={style.container}>
        <SetController text='move' />
      </div>
        
        
      {/* </div> */}
    </div>
  );
}
export default ControlPanel;