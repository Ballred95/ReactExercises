// import React, {useState} from 'react' 


// export default function Align(props) {

//     const [alignment, setAlignment] = useState('center')

//     return (
//     <div className='container'>
//         <h1 className = {alignment}>ALIGN ME!</h1>
        
//         <button onClick = {() => setAlignment('left')}>Left</button>
//         <button onClick = {() => setAlignment('center')}>Center</button>
//         <button onClick = {() => setAlignment('right')}>Right</button>
//         </div>
    
//     )
// }


import React, {Component} from 'react' 

export default class Align extends Component {
    constructor(props) {
        super(props)

        this.state = {
         alignment: 'center'   
        }
    }

render() {
        return (
            <div className='container'>
        <h1 className = {this.state.alignment}>ALIGN ME!</h1>
        
        <button onClick = {() => this.setState({alignment: 'left'})}>Left</button>
        <button onClick = {() => this.setState({alignment: 'center'})}>Center</button>
        <button onClick = {() => this.setState({alignment: 'right'})}>Right</button>
        </div>
        )
    }
}