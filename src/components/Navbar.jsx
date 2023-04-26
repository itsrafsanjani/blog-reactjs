import React from 'react'
import { HiOutlineChatAlt, HiOutlineMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Dropdown from '@/components/Dropdown'

const Navbar = () => {
  const [user] = [true]

  return (
    <div className='flex items-center justify-between px-4 pt-2 pb-2 bg-white h-[4.5rem] w-full'>
      <Link to={'/dashboard'}>
        <img
          src={
            user?.avatar_url ??
            'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
          }
          alt={user?.first_name + ' avatar'}
          className='object-cover rounded-full h-12 w-12 focus:outline-none ring-2 ring-green-500'
        />
      </Link>

      <div className='flex items-center gap-6'>
        <button className='inline-flex w-full justify-center focus:outline-none focus:bg-slate-100 rounded-full p-2 '>
          <HiOutlineChatAlt className='w-6 h-6' />
        </button>
        <Dropdown>
          <HiOutlineMenu className='w-6 h-6' />
        </Dropdown>
      </div>
    </div>
  )
}

export default Navbar
