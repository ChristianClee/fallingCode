import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import type { MessageDateType } from './types'



type ParamsT = { rightShift: number, speed: number }
type fallingCodeState = {
  codeState: boolean;

  lineSpeed: number;
  lineMove: number;
  countLine: number;
  
}

const initialState: fallingCodeState = {

  codeState: false,
  lineSpeed: 50,
  lineMove: 50,
  countLine: 0,
}

export const fallingCodeSlice = createSlice({
  name: 'fallingCode',
  initialState,
  reducers: {
     getCodeStart(state) {
      state.codeState = true
    },
    getCodeStop(state) {
      state.codeState = false
    },
    saveLineSpeed(state, action:PayloadAction<number> ) {
      state.lineSpeed = action.payload
    },
    saveLineMove(state, action:PayloadAction<number> ) {
      state.lineMove = action.payload
    },
    addCountLine(state, action: PayloadAction<number>) {
      if(state.countLine + action.payload < 0) return
      state.countLine += action.payload
    },
    nullCount(state) {
      state.countLine = 0
    }
  },
})

export const selectFallingCode = (state:RootState ) => state.fallingCode
export const { actions } = fallingCodeSlice
export default fallingCodeSlice.reducer