import React from 'react'
import { useState } from 'react'

const App = () => {
  const [show, setshow]=useState(0)

  function inc(){
    setshow(show+1);
  }
  function reset(){
    setshow(0);
  }
  return (
    <div>
      <h1 className='text-3xl text-center font-serif  '>Calculator app</h1>
      <div className='border-2 rounded-4xl mt-20 text-center h-40 w-90 ml-140'>
       <p className='mt-26 ml-70 text-3xl'>{show}</p>

      </div>
      <button onClick={inc}>Click me</button>
      <button onClick={reset}>Click to reset</button>


      
    </div>
  )
}

export default App