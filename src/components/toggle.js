import React, { useState } from 'react' 

export default function Toggle(props) {

    const [toggleState, setToggleState] = useState('on')

    return (
    <div className=''>
        <h1 className = {toggleState === 'on' ? 'on' : 'off'}>Hide me!</h1>
        <button onClick = {() => {
            if(toggleState === 'on'){
                setToggleState('off')
            }
            else {setToggleState('on')}
        console.log(toggleState)
            
        }}>{toggleState === 'on' ? 'Hide' : 'Show'}</button>
    </div>
    )
}