import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

function Guest() {
  let navigate = useNavigate()

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    } else {
      navigate('/dashboard')
    }
  }, [isLoggedIn])

  return <Outlet />
}

export default Guest
