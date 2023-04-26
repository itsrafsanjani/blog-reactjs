import Authenticated from '@/layouts/Authenticated'
import Register from '@/pages/Register'
import Index from '@/pages/dashboard/Index'
import store from '@/store'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from 'react-router-dom'
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
    return <div>Loading...</div>
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
