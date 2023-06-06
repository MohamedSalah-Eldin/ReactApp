import React, { useState } from 'react'
import UseEffectOneTime from './UseEffectOneTime'

function MouseMove() {

        const [show, setShow] = useState(true)

    return (
    <div>
            <button onClick={()=> setShow(!show)}>Toggle</button>
            {show ? <UseEffectOneTime /> : null}
    </div>
  )
}

export default MouseMove