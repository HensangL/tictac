import React, { useState } from 'react'

const App = () => {
  const [firstoperand, setfirstoperand]= useState(null)
    function display(){
      setfirstoperand(firstoperand+1)
    }
  return (
    
    <div>
      <p>{firstoperand}</p>
      <button onClick={display}>Click me</button>
    </div>
  )
}

export default App