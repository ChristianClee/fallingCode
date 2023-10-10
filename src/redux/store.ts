import { configureStore } from '@reduxjs/toolkit'
import fallingCodeReduser from './slices/fallingCode'

export const store = configureStore({
  reducer: {
    fallingCode: fallingCodeReduser,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch