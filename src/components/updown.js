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




// import React, {Component} from 'react' 

// export default class Updown extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             counter: 0
//         }
//     }

// render() {
//         return (
//             <div className=''>
//         <button onClick = {() => {
//             this.setState({counter: this.state.counter + 1})
//         }}>Up</button>
//         <h2>{this.state.counter}</h2>
//         <button onClick = {() => {
//             this.setState({counter: this.state.counter - 1})
//         }}>down</button>
//     </div>
//         )
//     }
// }