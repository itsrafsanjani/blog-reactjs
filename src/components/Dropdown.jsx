import { authActions } from '@/store/authSlice'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown({ children }) {
  const dispatch = useDispatch()

  const navigate = useNavigate()
  
  const handleLogout = async () => {
    dispatch(authActions.logout())
    toast.success('Logout success.')
    navigate('/')
  }
  return (
    <Menu as='div' className='relative inline-block'>
      {({ open }) => (
        <>
          <Menu.Button
            className={`inline-flex w-full justify-center focus:outline-none rounded-full p-2 ${
              open ? 'bg-slate-100' : ''
            }`}
          >
            {children}
          </Menu.Button>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={'/settings'}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Account settings
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => handleLogout()}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm'
                      )}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
