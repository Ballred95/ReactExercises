// import React, { useState } from 'react' 

// export default function Toggle(props) {

//     const [toggleState, setToggleState] = useState('on')

//     return (
//     <div className=''>
//         <h1 className = {toggleState === 'on' ? 'on' : 'off'}>Hide me!</h1>
//         <button onClick = {() => {
//             if(toggleState === 'on'){
//                 setToggleState('off')
//             }
//             else {setToggleState('on')}
//         console.log(toggleState)
            
//         }}>{toggleState === 'on' ? 'Hide' : 'Show'}</button>
//     </div>
//     )
// }


import React, {Component} from 'react' 

export default class Toggle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggleState: 'on'
        }
    }

render() {
        return (
            <div className=''>
        <h1 className = {this.state.toggleState === 'on' ? 'on' : 'off'}>Hide me!</h1>
        <button onClick = {() => {
            if(this.state.toggleState === 'on'){
                this.setState({toggleState: 'off'})
            }
            else {this.setState({toggleState: 'on'})}
        console.log(toggleState)
            
        }}>{this.state.toggleState === 'on' ? 'Hide' : 'Show'}</button>
    </div>
        )
    }
}