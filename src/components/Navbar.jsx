import Dropdown from '@/components/Dropdown'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const user = useSelector((state) => state.auth.user)

  return (
    <div className='sticky top-0 shadow-sm z-10 bg-white pb-2 pt-2 px-4 h-16 w-full'>
      <div className='container h-full flex items-center justify-between mx-auto'>
        <Link to='/'>
          <h1 className='text-lg font-bold'>Blog</h1>
        </Link>
        {isLoggedIn ? (
          <Dropdown>
            <img
              src={
                user?.avatar_url ??
                'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
              }
              alt={user?.first_name + ' avatar'}
              className='object-cover rounded-full h-8 w-8 focus:outline-none ring-2 ring-green-500'
            />
          </Dropdown>
        ) : (
          <div>
            <Link to='/login' className='text-gray-500 hover:text-gray-900'>
              Login
            </Link>

            <Link
              to='/register'
              className='ml-4 text-gray-500 hover:text-gray-900'
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
