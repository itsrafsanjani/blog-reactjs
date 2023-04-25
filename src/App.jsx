import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Index from './pages/dashboard/Index'
import Authenticated from './outlets/PrivateOutlet'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Navigate to='/login' />} exact />
          <Route path={'/register'} element={<Register />} exact />
          <Route path={'/login'} element={<Login />} exact />
          <Route path={'/*'} element={<Authenticated />} exact>
            <Route path={'dashboard'} element={<Index />} exact />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  )
}

export default App
