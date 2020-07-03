// import React, {Component} from 'react' 

// export default class Clock extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             time: new Date()
//         }
//     }

//     currenTime() {
//         this.setState({
//             time: new Date()
//         })
//     }

//     componentDidMount() {
//         setInterval(() => this.currenTime(), 1000)
//     }

// render() {
//         return (
//             <div className = ''>
//                 {this.state.time.toLocaleTimeString()}
//             </div>
//         )
//     }
// }





import React, { useState, useEffect } from 'react' 

export default function Clock (props) {

    const [time, setTime] = useState(new Date())

    const currenTime = () => {
        setTime(new Date())
    }

    useEffect( () => {
        setInterval(() => currenTime(), 1000)
    })

    return (
        <div className = ''>
        {time.toLocaleTimeString()}
    </div>
    )
}