import React, { useEffect, useState } from 'react'

function UseEffectOneTime() {
  
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
  
    useEffect(() => {
        console.log("useEffect -------- runs");
        window.addEventListener('mousemove', mousePosition )
        
        return () => {
            console.log("UnMounting");
            window.removeEventListener('mousemove', mousePosition)
        }
        
    },[])

    const mousePosition = (e) => {
        console.log("Mouse Moves");
        setX(e.clientX)
        setY(e.clientY)
    }

    return (
    <div>
        value of X : {x} --------------- value of Y: {y}
    </div>
  )
}

export default UseEffectOneTime