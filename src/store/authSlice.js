import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    setAuth(state, action) {
      state.isLoggedIn = true
      state.user = action.payload
    },
    login(state, action) {
      Cookies.set('token', action.payload.token)
      state.isLoggedIn = true
      state.user = action.payload.user
      toast.success('Login success.')
    },
    logout(state) {
      Cookies.remove('token')
      state.isLoggedIn = false
      state.user = null
    },
  },
})

export const authActions = authSlice.actions

export default authSlice
