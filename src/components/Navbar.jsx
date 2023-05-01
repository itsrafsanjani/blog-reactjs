import Dropdown from '@/components/Dropdown'

const Navbar = () => {
  const [user] = [true]

  return (
    <div className='flex items-center justify-between px-4 pt-2 pb-2 bg-white h-16 w-full'>
      <div>
        <h1 className='text-lg font-bold'>Blog</h1>
      </div>
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
    </div>
  )
}

export default Navbar
