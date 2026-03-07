import { useState } from "react"

export default function Demo() {

    {/* Hooks - useState, useEffect */ }

    const [counter, setCounter] = useState(0)
   
    return (
        <>

            <h1>Demo Page</h1>

            <h1>Current Value : {counter}</h1>

            <button onClick={()=>{

                setCounter(counter+1)

            }}>Click to ADD</button>


            <button onClick={()=>{

                setCounter(counter-1)
                
            }}>Click to SUB</button>


        </>
    )
}