import Count from '@/components/Count'
import Navbar from '@/components/Navbar'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

function Authenticated() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard')
    } else {
      navigate('/login')
    }
  }, [isLoggedIn])

  return (
    <div className='bg-gray-200 min-h-screen'>
      <div className='sticky top-0 shadow-sm z-10'>
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Authenticated
