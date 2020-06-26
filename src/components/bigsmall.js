// import React, { useState } from 'react' 

// export default function BigSmall(props) {

//     const [content, setContent] = useState(0)
//     const [size, setSize] = useState(10)

//     return (
//     <div className=''>
//         <h4 style = {{fontSize: `${size}px`}}>{content}px</h4>
//         <button onClick = {() => {
//             setContent(content + 10)
//             setSize(size + 10)
            
//         }}>Bigger</button>
//         <button onClick = {() => {
//             setContent(content - 10)
//         }}>Smaller</button>
//     </div>
//     )
// }

import React, {Component} from 'react' 

export default class BigSmall extends Component {
    constructor(props) {
        super(props)

        this.state = {
            content: 0,
            size: 10
        }
    }
    

render() {
        return (
            <div className = ''>
                 <h4 style = {{fontSize: `${this.state.size}px`}}>{this.state.content}px</h4>
             <button onClick = {() => {
            this.setState({content: this.state.content + 10})
            this.setState({size: this.state.size + 10})
            
        }}>Bigger</button>
        <button onClick = {() => {
            this.setState({content: this.state.content - 10})
            this.setState({size: this.state.size - 10})
        }}>Smaller</button>
            </div>
        )
    }
}