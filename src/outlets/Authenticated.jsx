import { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { useSelector } from 'react-redux'

function Authenticated() {
  let navigate = useNavigate()

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    } else {
      navigate('/dashboard')
    }
  }, [isLoggedIn])

  return (
    <div className='bg-gray-200 md:flex flex-col items-center justify-center h-screen w-screen'>
      <Header />
      <div className='bg-gray-100 md:flex w-full h-full lg:max-h-[95vh] lg:max-w-[95vw] shadow'>
        <div className='w-full md:w-4/12 md:flex flex-col'>
          <div className='sticky top-0 shadow-sm'>
            <Navbar />
          </div>
        </div>
        <div className='w-full md:w-8/12 md:flex flex-col justify-between items-center bg-gray-100 border-l relative max-h-screen'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Authenticated
