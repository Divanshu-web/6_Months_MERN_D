import { useState } from "react";

export default function Counter() {

    const [number, setNumber] = useState(0)
    // var count = 0
    const inc = () => {
        setNumber(number + 1)

    }
    const dec = () => {
        setNumber(number - 1)

    }

    return (


        <>

            <div className="container">
                {number} <br />
                <button className="btn btn-sm btn-primary" onClick={inc}>+</button>
                <button className="btn btn-sm btn-primary mx-2" onClick={dec}>-</button>
            </div>
        </>
    )
}