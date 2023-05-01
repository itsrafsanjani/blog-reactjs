import { useQuery } from '@tanstack/react-query'
import Tippy from '@tippyjs/react'
import axios from 'axios'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Index() {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: () => axios.get('/posts').then(({ data }) => data.data),
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='h-full px-2 flex flex-col justify-center items-center py-6'>
      {posts.map((post) => (
        <div className='mb-12' key={post.id}>
          <div className='flex flex-col md:flex-row w-full lg:w-10/12'>
            <div className='md:mr-4 mb-2 md:mb-0 md:w-4/12 '>
              <Link className='bg-gray-100' to={`/posts/${post.id}`}>
                <img
                  width='640'
                  height='360'
                  className='rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out'
                  alt={post.title}
                  src={post.thumbnail}
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
                    <h3 className='pl-1 text-sm font-medium text-gray-700'>
                      {post.user?.firstName}
                    </h3>
                    <Tippy content={dayjs(post.publishedAt).format()}>
                      <time className='pl-1 text-sm font-medium text-gray-700'>
                        {dayjs(post.publishedAt).fromNow()}
                      </time>
                    </Tippy>
                  </div>
                </div>
              </div>

              <Link to={`/posts/${post.id}`} className='hover:text-gray-500'>
                <h2 className='text-2xl font-semibold mb-1'>{post.title}</h2>
              </Link>

              <p className='text-base font-light text-gray-600 mb-4'>
                {post.description}
              </p>

              <div className='mb-2'>
                <Link
                  className='p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-gray-200 text-gray-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out'
                  to='/categories/development'
                >
                  Development
                </Link>

                <Link
                  className='p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-gray-200 text-gray-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out'
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
