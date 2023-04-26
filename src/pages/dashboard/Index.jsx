import React from 'react'
import BloggingIcon from '../../components/icons/BloggingIcon'
import { useSelector } from 'react-redux'

function Index() {
  const count = useSelector((state) => state.counter.count)
  
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <BloggingIcon alt='blogging img' className='w-full md:w-96' />
      <div className='my-3 text-center text-gray-500 tracking-wide'>
        <h1 className='text-2xl'>Blog ReactJS</h1>
        <h3 className='text-sm'>An awesome Blog!</h3>
        <h3 className='text-sm'>
          <span>Count:</span> <span>{count}</span>
        </h3>
      </div>
    </div>
  )
}

export default Index
