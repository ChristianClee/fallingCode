import React, { useCallback } from 'react';
import style from "./ControlPanel.module.scss"
import ButtonStartStop from '../buttonStartStop/ButtonStartStop';
import Display from '../display/Display';
import ButtonManagement from '../buttonAddRemove/ButtonManagement';
import SetController from '../setController/SetController';
import { useActions } from "../../../hooks/reduxHook"
import { useSelector } from 'react-redux';
import { selectFallingCode } from "../../../redux/slices/fallingCode"
import { removeLine, changeSpeed, changeMove, deleteAll, apply } from "../../../hooks/customHookFallincode"



const ControlPanel: React.FC = () => {
  const { saveLineMove, saveLineSpeed, getCodeStart, getCodeStop, addCountLine, nullCount } = useActions()
  const { lineMove, lineSpeed, codeState, countLine } = useSelector(selectFallingCode)

  console.log({countLine})

  return (
    <div className={style.wrapper}>

      <div className={style.containerBig}>
        <div className={style.container}>
          <ButtonManagement text={"add new"} func={addCountLine} func3={getCodeStart} value={1} />
          {
            countLine > 0 ?
              <ButtonManagement text={"remove"} func={addCountLine} func2={removeLine} func3={getCodeStop} value={-1} />
              :
              null
          }

        </div>
        <div className={style.container}>
          {
            countLine > 0 ?
              < ButtonManagement text={"apply"} func3={apply} />
              :
              null
          }
          {
            countLine > 1 ?
              <ButtonManagement text={"delete all"} func3={deleteAll} func2={nullCount} />
              :
              null
          }

        </div>

      </div>
      

      {
        countLine > 0 ?
          <div className={style.containerBig}>
            <div className={style.container}>
              <SetController
                text='speed'
                count={lineSpeed}
                func={saveLineSpeed}
                func2={changeSpeed}
                percentAction={lineSpeed}
                gap={20}
              />
            </div>
            <div className={style.container}>
              <SetController
                text='move'
                count={lineMove}
                func={saveLineMove}
                func2={changeMove}
                percentAction={lineMove}
                gap={5}
              />
            </div>
          </div>
          :
          null
      }
      
      
    </div>
  );
}
export default ControlPanel;