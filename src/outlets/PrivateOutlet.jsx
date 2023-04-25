import { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Authenticated() {
  let navigate = useNavigate()

  const [auth] = [true]

  useEffect(() => {
    if (!auth) {
      navigate('/login')
    } else {
      isAuthAvailable()
    }
  }, [auth])

  const isAuthAvailable = async () => {
    if (!auth) {
      console.log('Unauthenticated ⛔')
    } else {
      console.log('Authenticated 🎉')
    }
  }

  return (
    <div className='bg-gray-200 md:flex flex-col items-center justify-center h-screen w-screen'>
      <div className='bg-gray-100 md:flex w-full h-full lg:max-h-[95vh] lg:max-w-[95vw] shadow'>
        <div className='w-full md:w-4/12 md:flex flex-col'>
          <div className='sticky top-0 shadow-sm'>
            <Navbar />
          </div>
        </div>
        <div className='w-full md:w-8/12 md:flex flex-col justify-between items-center bg-gray-100 border-l relative max-h-screen'>
          <Outlet context={[auth]} />
        </div>
      </div>
    </div>
  )
}

export default Authenticated
