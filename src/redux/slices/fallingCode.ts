import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import type { MessageDateType } from './types'



type ParamsT = { rightShift: number, speed: number }
type fallingCodeState = {
  codeState: boolean;
  lines: ParamsT[]
}

const initialState: fallingCodeState = {
  codeState: false,
  lines : [
    {
      rightShift: 0, 
      speed: 160,  
    },
    {
      rightShift: 4,
      speed: 180,
    },
  ] 
}

export const fallingCodeSlice = createSlice({
  name: 'fallingCode',
  initialState,
  reducers: {
    startCodeState(state) {
      state.codeState = true
    },
    stopCodeState(state) {
      state.codeState = false
    },

  },
})

export const selectFallingCode = (state:RootState ) => state.fallingCode
export const { actions } = fallingCodeSlice
export default fallingCodeSlice.reducer