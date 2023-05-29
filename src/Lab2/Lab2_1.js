import React from 'react'

function FunctionalProps(props) {
    const {fname, mname, lname,age} = props
    return (
      <div>
          <h1>I'm {fname} {mname} {lname} and i'm {age} years old</h1>
      </div>
    )
  }
  
  export default FunctionalProps;