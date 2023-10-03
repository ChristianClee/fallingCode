import topZerro  from '../../../assets/ilyaDigits/0/0Top.jpg'
import bottomZerro from '../../../assets/ilyaDigits/0/0Bottom.jpg';
import topOne from '../../../assets/ilyaDigits/1/1Top.jpg';
import bottomOne from '../../../assets/ilyaDigits/1/1Bottom.jpg'
import topTwo from '../../../assets/ilyaDigits/2/2Top.jpg';
import bottomTwo from '../../../assets/ilyaDigits/2/2Bottom.jpg';
import topThree from '../../../assets/ilyaDigits/3/3Top.jpg';
import bottomThree from '../../../assets/ilyaDigits/3/3Bottom.jpg';
import topFour from '../../../assets/ilyaDigits/4/4Top.jpg';
import bottomFour from '../../../assets/ilyaDigits/4/4bottom.jpg';
import topFive from '../../../assets/ilyaDigits/5/5Top.jpg';
import bottomFive from '../../../assets/ilyaDigits/5/5bottom.jpg';
import topSix from '../../../assets/ilyaDigits/6/6top.jpg';
import bottomSix from '../../../assets/ilyaDigits/6/6bottom.jpg';
import topSeven from '../../../assets/ilyaDigits/7/7top.jpg';
import bottomSeven from '../../../assets/ilyaDigits/7/7bottom.jpg';
import topEight from '../../../assets/ilyaDigits/8/8top.jpg';
import bottomEight from '../../../assets/ilyaDigits/8/8bottom.jpg';
import topNine from '../../../assets/ilyaDigits/9/9Top.jpg';
import bottomNine from '../../../assets/ilyaDigits/9/9Bottom.jpg';

const numbers = {
  zerro: { top: topZerro, bottom: bottomZerro },
  one: { top: topOne, bottom: bottomOne },
  two: { top: topTwo, bottom: bottomTwo },
  three: { top: topThree, bottom: bottomThree },
  four: { top: topFour, bottom: bottomFour },
  five: { top: topFive, bottom: bottomFive },
  six: { top: topSix, bottom: bottomSix },
  seven: { top: topSeven, bottom: bottomSeven },
  eight: { top: topEight, bottom: bottomEight },
  nine: { top: topNine, bottom: bottomNine },
}
export const matches = [
  {
  topFirst: numbers.zerro.top,
  bottomFirst: numbers.zerro.bottom,
  topSeccond: numbers.one.top,
  bottomSecond: numbers.one.bottom,
},
  {
  topFirst: numbers.one.top,
  bottomFirst: numbers.one.bottom,
  topSeccond: numbers.two.top,
  bottomSecond: numbers.two.bottom,
},
  {
  topFirst: numbers.two.top,
  bottomFirst: numbers.two.bottom,
  topSeccond: numbers.three.top,
  bottomSecond: numbers.three.bottom,
},
  {
  topFirst: numbers.three.top,
  bottomFirst: numbers.three.bottom,
  topSeccond: numbers.four.top,
  bottomSecond: numbers.four.bottom,
},
  {
  topFirst: numbers.four.top,
  bottomFirst: numbers.four.bottom,
  topSeccond: numbers.five.top,
  bottomSecond: numbers.five.bottom,
},
  {
  topFirst: numbers.five.top,
  bottomFirst: numbers.five.bottom,
  topSeccond: numbers.six.top,
  bottomSecond: numbers.six.bottom,
},
  {
  topFirst: numbers.six.top,
  bottomFirst: numbers.six.bottom,
  topSeccond: numbers.seven.top,
  bottomSecond: numbers.seven.bottom,
},
  {
  topFirst: numbers.seven.top,
  bottomFirst: numbers.seven.bottom,
  topSeccond: numbers.eight.top,
  bottomSecond: numbers.eight.bottom,
},
  {
  topFirst: numbers.eight.top,
  bottomFirst: numbers.eight.bottom,
  topSeccond: numbers.nine.top,
  bottomSecond: numbers.nine.bottom,
},
  {
  topFirst: numbers.nine.top,
  bottomFirst: numbers.nine.bottom,
  topSeccond: numbers.zerro.top,
  bottomSecond: numbers.zerro.bottom,
},
]