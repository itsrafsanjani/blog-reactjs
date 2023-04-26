import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import counterSlice from './counterSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
})

export default store
