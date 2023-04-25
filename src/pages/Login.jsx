import React, { useContext, useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { Link, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

function Login() {
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const [auth, setAuth] = [true, null]

  useEffect(() => {
    if (!auth) {
      navigate('/login')
    } else {
      navigate('/dashboard')
    }
  }, [auth])

  const [error, setError] = useState('')

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()

    toast.info('Logging in...')

    setTimeout(() => {
      toast.success('Login success')
    }, 1000)

    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white md:w-6/12 lg:w-4/12 xl:w-3/12 min-h-screen py-12 px-8 mx-auto flex flex-col items-center justify-center'
    >
      <h3 className='mb-3 text-2xl tracking-wide'>Blog ReactJS</h3>
      <h3 className='mb-3 text-2xl tracking-wide'>Login</h3>

      <div className='w-full'>
        <input
          className='w-full border-2 border-gray-300 p-2 mb-4 rounded-md focus:outline-none focus:border-slate-600'
          type='email'
          name='email'
          id='email'
          autoComplete='email'
          placeholder='Email'
          required
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className='w-full'>
        <input
          className='w-full border-2 border-gray-300 p-2 mb-4 rounded-md focus:outline-none focus:border-slate-600'
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          autoComplete='current-password'
          required
          onChange={(e) => handleChange(e)}
        />
      </div>

      {error && (
        <div className='text-red-700 mb-4' role='alert'>
          <span className='block sm:inline'>{error}</span>
        </div>
      )}

      <button
        className='flex justify-center items-center space-x-2 w-full bg-slate-600 text-white p-2 rounded-md'
        type='submit'
      >
        {loading && <Loading />}
        Login
      </button>

      <div className='py-2'>
        <span>Don't have an account? </span>
        <Link to={'/register'} className='text-teal-600'>
          Register here
        </Link>
      </div>
    </form>
  )
}

export default Login
