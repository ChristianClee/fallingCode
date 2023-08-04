import { configureStore } from '@reduxjs/toolkit'
import clockReduser from './slices/clockSlice'
import rectangleReduser from './slices/rectangleSlice'

export const store = configureStore({
  reducer: {
    clock: clockReduser,
    rectangle: rectangleReduser,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch