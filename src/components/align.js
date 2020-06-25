import React, {useState} from 'react' 


export default function Align(props) {

    const [alignment, setAlignment] = useState('center')

    return (
    <div className='container'>
        <h1 className = {alignment}>ALIGN ME!</h1>
        
        <button onClick = {() => setAlignment('left')}>Left</button>
        <button onClick = {() => setAlignment('center')}>Center</button>
        <button onClick = {() => setAlignment('right')}>Right</button>
        </div>
    
    )
}