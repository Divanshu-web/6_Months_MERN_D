// import React from 'react'

import { useState } from "react"

function Demo() {
    const[number, setNumber]=useState(100)
  return (
    <>
    <h1>Good Morning Sir</h1>
    <h1>Current Value: {number}</h1>
    <button onClick={()=>{setNumber(number+1)}}>Add Numbers</button>
    <button onClick={()=>{setNumber(number-1)}}>Sub Numbers</button>
    </>
  )
}

export default Demo
