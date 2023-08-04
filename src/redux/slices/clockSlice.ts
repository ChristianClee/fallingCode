import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import type { MessageDateType } from './types'




type clockState = {
  messages: MessageDateType[]
  storemessages: MessageDateType[]
  countLoop: number
}

const initialState: clockState = {
  messages: [],
  storemessages: [],
  countLoop: 0
}

export const clockSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    cleanMessages(state) {
      state.messages = []
    },
    cleanMessagesStore(state) {
      state.storemessages = []
    },
    addNewMessage(store, action:PayloadAction<MessageDateType>) {
      const newMessage = action.payload
        store.messages.unshift(newMessage)
    },

    increaseCount(state) {
      state.countLoop += 1
    },
    nullCount(state) {
      state.countLoop = 0
    },

  },
})

export const selectClock = (state:RootState ) => state.clock
export const { actions } = clockSlice
export default clockSlice.reducer