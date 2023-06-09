import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state, action) {
      state.count++
    },
    decrement(state, action) {
      state.count++
    },
    incrementBy(state, action) {
      state.count += action.payload
    },
  },
})

export const counterActions = counterSlice.actions

export default counterSlice
