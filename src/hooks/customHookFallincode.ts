import { useEffect, useLayoutEffect } from "react"
import { useSelector } from "react-redux"
import { selectFallingCode} from "../redux/slices/fallingCode"
import { fallingCodeFunc, fallingCodeFuncV2 } from '../components/fallingCode/utilits/utilits'
import { useActions } from "../hooks/reduxHook"


type ParamsT = { rightShift: number, speed: number }
type CodeT = React.RefObject<HTMLDivElement>

export function useFallingCode(_fallingCode: CodeT, _wrapRef: CodeT) {

  const { codeState, lineMove, lineSpeed,  countLine } = useSelector(selectFallingCode)


  useEffect(() => {
    const fallingCode = _fallingCode.current
    const wrapper = _wrapRef.current
    
    if (fallingCode && wrapper && countLine && codeState) {
      const line = {rightShift:lineMove, speed: lineSpeed}

      fallingCodeFuncV2(fallingCode, wrapper, line)
    }
    const indicator: HTMLSpanElement | null = document.querySelector(".indicator")

    if (indicator) {
      const animDur: number = parseFloat(window.getComputedStyle(indicator).animationDuration)
    }
    
  },[countLine, codeState])
}
 
export function useCollorFirstLine() {
  const { countLine } = useSelector(selectFallingCode)
  useEffect(() => {
    const lines: NodeListOf<HTMLSpanElement> = document.querySelectorAll('.string')
    const indicarors: NodeListOf<HTMLSpanElement> = document.querySelectorAll(".indicator2")
    indicarors.forEach(elem => elem.classList.remove("indicator2") )

    const line = lines[lines.length - 1]

    if (line) {
      lines.forEach(elem => {
        elem.style.color = ""
        const letters:NodeListOf<HTMLSpanElement> = elem.querySelectorAll(".letter")
        letters.forEach(item=> item.style.color = "")
      })
      line.style.color = "greenyellow"
      const letters: NodeListOf<HTMLSpanElement> = line.querySelectorAll(".letter")
      const indicator: HTMLSpanElement | null = line.querySelector(".indicator")
      

      indicator?.classList.add("indicator2")
      letters.forEach(elem => elem.style.color = "greenyellow" )
    }
    },[countLine])
}


export function removeLine() {

  const lines = document.querySelectorAll(".string")
  if (lines.length > 0) {
    lines[lines.length -1 ].remove()
  }
}
export function changeSpeed(speed: number, sign: boolean) {
  
  const indicators:NodeListOf <HTMLSpanElement> | null = document.querySelectorAll(".indicator")
  const strings: NodeListOf<HTMLSpanElement> | null = document.querySelectorAll(".string")
  const indicator = indicators[indicators.length -1]
  const string = strings[strings.length -1]


  const newSpeed: number = sign ? speed + 20 : speed - 20
  console.log({speedLine: newSpeed})
  if (string && indicator) {
    const duration = Math.round(string.clientHeight / newSpeed * 4) / 10
    indicator.style.animationDuration = `${duration}s`

  }
}
export function changeMove(move: number, sign: boolean) { 

  const strings: NodeListOf <HTMLSpanElement> = document.querySelectorAll(".string")
  const string = strings[strings.length - 1]
  if (string) {
    string.style.right = sign ?
      `${move + 10}%`
      :
      `${move - 10}%`
  }
}
export function deleteAll() {
  const letters:NodeListOf<HTMLSpanElement> = document.querySelectorAll(".string")
  letters.forEach(elem => elem.remove())
}
export function apply() {
  const strings: NodeListOf<HTMLSpanElement> = document.querySelectorAll(".string")
   strings.forEach(elem => {
    elem.style.color = ""
     const letters: NodeListOf<HTMLSpanElement> = elem.querySelectorAll(".letter")
    letters.forEach(item=> item.style.color = "")
  })


  const indicarors: NodeListOf<HTMLSpanElement> = document.querySelectorAll(".indicator2")
    indicarors.forEach(elem => elem.classList.remove("indicator2") )
  strings.forEach(elem => {
    
  })
}








