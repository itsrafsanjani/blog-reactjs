import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import dayjs from 'dayjs'
import { Link, useParams } from 'react-router-dom'

function Show() {
  const { id } = useParams()

  const {
    isLoading,
    error,
    data: post,
  } = useQuery({
    queryKey: ['post'],
    queryFn: () => axios.get(`/posts/${id}`).then(({ data }) => data.data),
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='h-full px-2 flex flex-col justify-center items-center py-6'>
      <div className='heading py-6 md:py-12 lg:w-10/12 md:text-center mx-auto'>
        <div className='font-medium text-gray-700'>
          {dayjs(post.publishedAt).format('MMMM D, YYYY')}
        </div>

        <h1 className='heading text-4xl md:text-6xl font-bold font-sans md:leading-tight'>
          {post.title}
        </h1>

        <h2 className='text-xl text-gray-600 mt-2'>
          {post.excerpt ?? 'No excerpt'}
        </h2>
      </div>

      <div className='flex flex-col pb-3 md:hidden'>
        <div className='flex items-center mb-3 last:mb-0'>
          <img
            height='48'
            width='48'
            className='rounded-full border-white border-2'
            src='https://source.unsplash.com/48x48?portrait'
            alt={post.user?.firstName}
          ></img>

          <div>
            <span className='font-medium text-sm ml-1 block'>
              {post.user?.firstName}
            </span>
            <a
              className='text-sm ml-1 block text-green-400'
              href='https://www.twitter.com/'
            ></a>
          </div>
        </div>
      </div>

      <img width='1600' height='900' src={post.thumbnail}></img>

      <div className='flex flex-col md:flex-row py-6 md:py-12'>
        <div className='w-full md:w-3/12 pr-3'>
          <div className='hidden flex-col md:flex mb-3 md:mb-6'>
            <div className='flex items-center mb-3 last:mb-0'>
              <img
                height='48'
                width='48'
                className='rounded-full border-white border-2'
                src='https://source.unsplash.com/48x48?portrait'
                alt={post.user?.firstName}
              />

              <div>
                <span className='font-medium text-sm ml-1 block'>
                  {post.user?.firstName}
                </span>
              </div>
            </div>
          </div>

          <div className='hidden md:block'>
            {post.tags.map((tag) => (
              <Link key={tag}
                className='p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-gray-200 text-gray-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out'
                to={`/tags/${tag}`}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <div
          className='w-full md:w-9/12'
          dangerouslySetInnerHTML={{ __html: post.description }}
        ></div>
      </div>

      <div className='py-6 mt-6 border-t-2 block md:hidden'>
        <h3 className='text-sm font-medium mb-1'>Tags</h3>
        <div>
          {post.tags.map((tag) => (
            <Link
              key={tag}
              className='p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-gray-200 text-gray-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out'
              to={`/tags/${tag}`}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Show
