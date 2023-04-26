import Authenticated from '@/layouts/Authenticated'
import Register from '@/pages/Register'
import Index from '@/pages/dashboard/Index'
import store from '@/store'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login'
import { authActions } from './store/authSlice'

function App() {
  const token = Cookies.get('token')

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (token) {
      axios.get('/user').then((data) => {
        store.dispatch(authActions.setAuth(data.data.data))
        setIsLoading(false)
      })
    } else {
      store.dispatch(authActions.logout())
      setIsLoading(false)
    }
  }, [])

  if (isLoading) {
    return (
      <div className='bg-gray-200 flex flex-col items-center justify-center h-screen w-screen'>
        <svg
          className='animate-spin h-10 w-10'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
          />
        </svg>
        <h3 className='mt-2'>Loading...</h3>
      </div>
    )
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Navigate to='/login' />} exact />

          <Route path={'/register'} element={<Register />} exact />
          <Route path={'/login'} element={<Login />} exact />

          <Route element={<Authenticated />} exact>
            <Route path={'/dashboard'} element={<Index />} exact />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  )
}

export default App
