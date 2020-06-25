import React, { useState } from 'react' 

export default function (props) {

    const [counter, setCounter] = useState(0)

    return (
    <div className=''>
        <button onClick = {() => {
            setCounter(counter + 1)
        }}>Up</button>
        <h2>{counter}</h2>
        <button onClick = {() => {
            setCounter(counter - 1)
        }}>down</button>
    </div>
    )
}