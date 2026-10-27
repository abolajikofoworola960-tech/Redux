import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './redux/counterSlice'





const App = () => {
  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()


  return (
    <>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(100))}>Increase by 100</button>
    </>
  )
}

export default App