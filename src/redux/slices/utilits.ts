export class RectangleCloc{

  static getNumberDigit(input: number, num1: number, num2: number | undefined = undefined): number{
    let numb
    if (num2 === undefined) {
      numb = String(input).slice(num1)
    } else {
      numb = String(input).slice(num1, num2)
    }
    if (numb == "") return 0
    else return parseInt(numb)
  }

  static getUnitSec(time: number): number {
    const unitSec = time
    return this.getNumberDigit(unitSec, -1)
  }
  static getTenSec(time:number): number {
    const tenSec = time % 60
    return this.getNumberDigit(tenSec, -2, -1)
  }
  static getUnitMin(time:number): number {
    const unitMin = Math.floor(time / 60)
    return this.getNumberDigit(unitMin, -1)
  }
  static getTenMin(time:number): number {
    const tenMin = Math.floor(time / 60)
    return this.getNumberDigit(tenMin, -2, -1)
  }
  static getUnitHour(time:number): number {
    const unitHour = Math.floor(time / 60 / 60)
    return this.getNumberDigit(unitHour, -1)
  }
  static getTenHour(time:number): number {
    const tenHour = Math.floor(time / 60 / 60)
    return this.getNumberDigit(tenHour, -2, -1)
  }
  static calcTimes(time:number):number[] {
    const unitsSecond = this.getUnitSec(time)
    const tensSecond = this.getTenSec(time)
    const unitsMinuet = this.getUnitMin(time)
    const tensMinuet = this.getTenMin(time)
    const unitsHour = this.getUnitHour(time)
    const tensHour = this.getTenHour(time)
    return [
      unitsSecond,
      tensSecond,
      unitsMinuet,
      tensMinuet,
      unitsHour,
      tensHour,
    ]
  }


}