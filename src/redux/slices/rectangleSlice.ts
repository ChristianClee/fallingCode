import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { RectangleCloc } from './utilits'


type initialStateType = {
  stateClock: boolean
  time: number
  unitsSecond: number
  tensSecond: number
  unitsMinuet: number 
  tensMinuet: number
  unitsHour: number
  tensHour: number
}


const initialState:initialStateType = {
  stateClock: true,
  time: 0,
  unitsSecond: 0,
  tensSecond: 0,
  unitsMinuet: 0,
  tensMinuet: 0,
  unitsHour: 0,
  tensHour: 0,


}

export const rectangleSlice = createSlice({
  name: 'rectangle',
  initialState,
  reducers: {

    togglestateClock(state) {
      state.stateClock = ! state.stateClock
    },
    timePlus(state) {
      state.time += 1;
      [
        state.unitsSecond,
        state.tensSecond,
        state.unitsMinuet,
        state.tensMinuet,
        state.unitsHour,
        state.tensHour
      ] = RectangleCloc.calcTimes(state.time)
 
    },
    cleanTime(state) {
      state.time = 0;
      [
        state.unitsSecond,
        state.tensSecond,
        state.unitsMinuet,
        state.tensMinuet,
        state.unitsHour,
        state.tensHour
      ] = RectangleCloc.calcTimes(state.time)
    }
    
  },
})

export const selectRectangle = (state:RootState ) => state.rectangle
export const { actions } = rectangleSlice
export default rectangleSlice.reducer
