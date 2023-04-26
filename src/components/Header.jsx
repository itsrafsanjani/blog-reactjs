import { useState } from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/counterSlice'

const Header = () => {
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
    <div className='flex py-2'>
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

      <div className='flex border-l-4 border-red-300 pl-2'>
        <input
          className='p-2'
          type='text'
          onChange={(e) => updateAdBy(e)}
          value={addBy}
        />
        <button className='p-2' onClick={incrementBy}>
          Add by {addBy}
        </button>
      </div>
    </div>
  )
}

export default Header
