import { useState } from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '@/store/counterSlice'

const Count = () => {
  const count = useSelector((state) => state.counter.count)

  const dispatch = useDispatch()

  const increment = () => {
    dispatch(counterActions.increment())
  }
  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  const [addBy, setAddBy] = useState(0)

  const incrementBy = () => {
    dispatch(counterActions.incrementBy(addBy))
  }

  const updateAdBy = (e) => {
    setAddBy(parseInt(e.target.value))
  }

  return (
    <div className='md:flex py-2 items-center'>
      <div className='flex pr-2'>
        <h1 className='p-2'>Count: </h1>
        <h1 className='p-2'>{count}</h1>
        <button
          className='inline-flex w-full justify-center focus:outline-none focus:bg-slate-100 rounded-full p-2 '
          onClick={increment}
        >
          <HiPlus className='w-6 h-6' />
        </button>
        <button
          className='inline-flex w-full justify-center focus:outline-none focus:bg-slate-100 rounded-full p-2 '
          onClick={decrement}
        >
          <HiMinus className='w-6 h-6' />
        </button>
      </div>

      <div className='md:flex w-full md:border-l-4 border-red-300 p-2'>
        <input
          className='p-2 block w-full'
          type='text'
          onChange={(e) => updateAdBy(e)}
          value={addBy}
        />
        <button className='p-2 w-full bg-gray-300 mt-2 md:mt-0' onClick={incrementBy}>
          Add by {addBy}
        </button>
      </div>
    </div>
  )
}

export default Count
