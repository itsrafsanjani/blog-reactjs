import { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { useSelector } from 'react-redux'

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
