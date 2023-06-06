import React, { useState } from 'react'

function UseStateEx2() {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue)
    
  return (
    <div>
        <h3>Count : {count} </h3>
        <button onClick={() => setCount( prv => prv + 1)}>Increment by 1</button>
        <button onClick={() => setCount( prv => prv - 1)}>decrement by 1</button>
        <button onClick={() => setCount(initialValue)}>Reset</button>
        <button onClick={() => setCount(count + 5)}>Increment by 5</button>
    </div>
  )
}

export default UseStateEx2
