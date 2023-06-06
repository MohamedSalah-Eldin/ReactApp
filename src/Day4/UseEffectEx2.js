import React, {useEffect, useState } from 'react'

function UseEffectEx2() {
  
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    useEffect(()=> {
        console.log("UseEffect --- Runs");
        document.title = `You Clicked ${count} times`;
    }, [count])

    const handleClick = () => {
        setCount(prev => prev + 1)
    }
  
    return (
    <div>
        <input type='text' value={name} onChange={(e) => setName( e.target.value )} />
        <button onClick={handleClick}> Clicked {count} times</button>
    </div>
  )
}

export default UseEffectEx2