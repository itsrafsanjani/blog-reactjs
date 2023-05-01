import { Link } from 'react-router-dom'

function Index() {
  const posts = Array.from({ length: 10 }, (_, i) => i)
  return (
    <div className='h-full px-2 flex flex-col justify-center items-center py-6'>
      {posts.map((post) => (
        <div className='mb-12' key={post}>
          <div className='flex flex-col md:flex-row w-full lg:w-10/12'>
            <div className='md:mr-4 mb-2 md:mb-0 md:w-4/12 '>
              <Link className='bg-gray-100' to='/posts/styling-css/'>
                <img
                  width='640'
                  height='360'
                  className='rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out'
                  alt='Styling CSS'
                  src='https://source.unsplash.com/640x360/?programming'
                />
              </Link>
            </div>

            <div className='flex-1'>
              <div className='flex items-center'>
                <div className='flex ml-4'>
                  <div className='flex items-center mr-2 -ml-4'>
                    <img
                      width='28'
                      height='28'
                      className='rounded-full border-white border-2'
                      src='https://source.unsplash.com/28x28/?portrait'
                      alt='Mike Vance'
                    />
                  </div>
                </div>

                <div className='text-sm font-medium text-gray-700'>
                  Dec 29, 2018
                </div>
              </div>

              <Link to='/posts/styling-css/' className='hover:text-green-400'>
                <h2 className='text-2xl font-semibold mb-1'>Styling CSS</h2>
              </Link>

              <p className='text-base font-light text-gray-600 mb-4'>
                Learn how to use Markdown to write blog posts. Understand
                front-matter and how it is used in templates.
              </p>

              <div className='mb-2'>
                <Link
                  className='p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out'
                  to='/categories/development'
                >
                  Development
                </Link>

                <Link
                  className='p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out'
                  to='/categories/javascript'
                >
                  Javascript
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Index