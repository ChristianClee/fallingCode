

type ParamsT = { rightShift: number, speed: number }


export function fallingCodeFunc(
  fallingCode: HTMLDivElement,
  wrapper: HTMLDivElement,
  lines: ParamsT[],
  currentLines: ParamsT[]) {
  // console.log({lines})
  // console.log({ currentLines })
  // const result = JSON.stringify(lines) === JSON.stringify(currentLines)
  // if (!result) {
  //   console.log("run")
  // }
  






  const strings = createStrings(lines) //


  forEachCycle(strings)

  setInterval(() => {
    strings.forEach(elem => getAnimation(elem))
  }, 90)

  function forEachCycle(strings: HTMLSpanElement[]) {
    strings.forEach((elem) => {
      // it triggers when app is opened a first time
      createSpan(elem)
    })
  }

  function createStrings(lines: ParamsT[]): HTMLSpanElement[] {
    // создаются по одному индикатору и одной будующей цифре в виде span
    const strings = []
    const length = lines.length
    for (let i = 0; i < length; i++) {
      const { rightShift, speed } = lines[i]
      const string = document.createElement('span')
      string.classList.add(`string${i + 1}`)
      string.classList.add("string-common")
      //@ts-ignore
      string.style = `--shift: ${rightShift}rem`

      const indicator = document.createElement('span')
      indicator.classList.add(`indicator${i + 1}`)
      indicator.classList.add(`indicator-style`)
      indicator.dataset.time = `${speed}`
      string.prepend(indicator)
      strings.push(string)
    }

    return strings
  }
  function createSpan(nodeElem: HTMLSpanElement) {
    // it creates string letter elements in string
    // it clean string elements from .letter
    // it assign animationDuration param to indicator-style element
    // console.log(nodeElem)
    // it assign speed 
    if (fallingCode) {
      fallingCode.append(nodeElem)
    }

    const viewPort = wrapper //!!! добавляет элемент строки в указанный тег
    const string = nodeElem

    const letters: NodeListOf<HTMLSpanElement> = nodeElem.querySelectorAll(`.letter`)
    const indicator: HTMLSpanElement | null = nodeElem.querySelector(`.indicator-style`)
    let timeDistense: string | undefined

    if (indicator) {
      timeDistense = indicator.dataset.time
    }

    cleanList(letters)
    let bottomViewPort: number = 0
    if (viewPort) {
      bottomViewPort = viewPort.clientHeight // it is bottom of viewport
    }
    let bottomString: number = string.clientHeight

    while (bottomViewPort > bottomString) {

      //it calculates distence and then add span elements into string, count of span's elements depends on calculated distanse 
      bottomString = string.clientHeight 
      const span = document.createElement('span')
      span.classList.add('letter')
      span.textContent = `${randomInteger(0, 1)}`
      string.append(span)
    }

    if (timeDistense) {
      assignSpeed(timeDistense)
    }



    function cleanList(list: NodeListOf<HTMLSpanElement>) {
      const length = list.length
      for (let i = 0; i < length; i++) {
        list[i].remove()
      }
    }
    function assignSpeed(timeDistanse: string) {
      const distence: number = Number(timeDistanse)
      // it assigns speed of moving for indicator
      const time = Math.round(bottomString / distence * 10) / 10
      if (indicator) {
        indicator.style.animationDuration = `${time}s`
      }
    }

    function randomInteger(min: number, max: number) {
      const rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    }
  }
  function getAnimation(nodeElem: HTMLSpanElement) {
    // it assigns 'active' class to eaxh elements that indicator touched
    const indicator: HTMLSpanElement | null = nodeElem.querySelector('.indicator-style')
    const letters: NodeListOf<HTMLSpanElement> = nodeElem.querySelectorAll(`.letter`)
    let heightStr: number = 0
    if (indicator) {
      heightStr = indicator.offsetTop
    }





    for (let i = 0; i < letters.length; i++) {
      // count ++
      
      const height = letters[i].offsetHeight 
      const top = letters[i].offsetTop
      const bottom = top + height

      const difference = Math.floor((heightStr - top) / height)
      if (difference > 1) {
        i += difference - 1
        continue
      }

      if (heightStr >= top && heightStr <= bottom) {
        if (indicator) {
          indicator.textContent = letters[i].textContent
        }
        letters[i].classList.add('active')
        setTimeout(() => {
          letters[i].classList.remove('active')
        }, 40)
        break
      }
    }


  }
}

export function fallingCodeFuncV2(
  fallingCode: HTMLDivElement,
  wrapper: HTMLDivElement,
  lines: ParamsT) { 

  
  let string: HTMLSpanElement = createStrings(lines) //

  createSpan(string)
  

  setInterval(() => {
    getAnimation(string)
  }, 90)

  function createStrings(lines: ParamsT): HTMLSpanElement {
    // создаются по одному индикатору и одной будующей цифре в виде span
    const { rightShift, speed } = lines
    const span = document.createElement('span')
    span.classList.add(`string`)
    
    span.style.right = `${rightShift}%`
    const indicator = document.createElement('span')
    indicator.classList.add(`indicator`)
    indicator.dataset.time = `${speed}`
    span.prepend(indicator)
    return span
  }
  function createSpan(nodeElem: HTMLSpanElement ) {
   
    fallingCode.append(nodeElem)
    const indicator: HTMLSpanElement | null = nodeElem.querySelector(`.indicator`)
    let timeDistense: string | undefined

    if (indicator) {
      timeDistense = indicator.dataset.time
    }
    let bottomViewPort: number = wrapper.clientHeight - 80 // it is bottom of viewport
    let bottomString: number = nodeElem.clientHeight


    while (bottomViewPort >= bottomString) {
      //it calculates distence and then add span elements into string, count of span's elements depends on calculated distanse 
      bottomString = string.clientHeight

      const span = document.createElement('span')
      span.classList.add('letter')
      span.textContent = `${randomInteger(0, 1)}`
      string.append(span)
    }

    if (timeDistense && indicator) {
      assignSpeed(timeDistense, indicator)
    }


  }
  function getAnimation(nodeElem: HTMLSpanElement) {
    // it assigns 'active' class to eaxh elements that indicator touched
    const indicator: HTMLSpanElement | null = nodeElem.querySelector('.indicator')
    const letters: NodeListOf<HTMLSpanElement> = nodeElem.querySelectorAll(`.letter`)
    let heightStr: number = 0
    if (indicator) {
      heightStr = indicator.offsetTop
    }





    for (let i = 0; i < letters.length; i++) {
      // count ++

      const height = letters[i].offsetHeight
      const top = letters[i].offsetTop
      const bottom = top + height

      const difference = Math.floor((heightStr - top) / height)
      if (difference > 1) {
        i += difference - 1
        continue
      }

      if (heightStr >= top && heightStr <= bottom) {
        if (indicator) {
          indicator.textContent = letters[i].textContent
        }
        letters[i].classList.add('active')
        setTimeout(() => {
          letters[i].classList.remove('active')
        }, 40)
        break
      }
    }


  }
  function assignSpeed(timeDistanse: string, indicator: HTMLSpanElement) {
    const distence: number = Number(timeDistanse)
    // it assigns speed of moving for indicator
    // console.log(, "asdsa")
    const time = Math.round(string.clientHeight / distence * 4) / 10
    if (indicator) {
      indicator.style.animationDuration = `${time}s`
    }
  }
  function randomInteger(min: number, max: number) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
}
