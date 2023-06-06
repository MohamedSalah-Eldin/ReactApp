import React, { useState } from 'react'

function UseStateWithObjects() {
    
    const [name, setName] = useState({fname:"", lname:""})

  return (
    <div>
        <input type="text" value={name.fname} onChange={ e => setName({...name, fname: e.target.value})} />
        <input type="text" value={name.lname} onChange= {e => setName({...name, lname: e.target.value})} />
        <h2>Your First name : {name.fname}</h2>
        <h2>Your last name: {name.lname}</h2>
        <h1>{JSON.stringify(name)}</h1>
    </div>
  )
}

export default UseStateWithObjects