import { useEffect, useLayoutEffect } from "react"
import { useSelector } from "react-redux"
import { selectFallingCode} from "../redux/slices/fallingCode"
import { fallingCodeFunc } from '../components/fallingCode/utilits/utilits'


type CodeT = React.RefObject<HTMLDivElement>

export function useFallingCode(_fallingCode: CodeT, _wrapRef: CodeT) {
  
  const { codeState, lines } = useSelector(selectFallingCode)

  
  useEffect(() => {
    const fallingCode = _fallingCode.current
    const wrapper = _wrapRef.current

    if (codeState) {
      if (fallingCode && wrapper) {
        fallingCodeFunc(fallingCode, wrapper, lines)
      }
    }
    


    if (!codeState) {
      if (fallingCode && wrapper) {
        const indicatorStyle: NodeListOf<HTMLSpanElement> = document.querySelectorAll('.string-common')
        console.log(indicatorStyle)
        
        for (let i = 0; i < indicatorStyle.length; i++){
          indicatorStyle[i].remove()
        }
      }
    }
   



    
  },[codeState])
 }




