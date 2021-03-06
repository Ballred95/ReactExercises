// import React, {Component} from 'react' 

// export default class  extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             color: 'purple',
//             inputValue: 'Color Me!',
//             colorInputValue: 'purple',
//             finalValue: 'Color ME!'

//         }

//         this.updateInputValue = this.updateInputValue.bind(this)
//         this.updateColorInputValue = this.updateColorInputValue.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

   

    // updateInputValue(e) {
    //     this.setState({
    //       inputValue: e.target.value
    //     });
    //   }

    //   updateColorInputValue(e) {
    //     this.setState({
    //       colorInputValue: e.target.value
    //     });
    //   }

    //   handleSubmit() {
    //     this.setState({finalValue: this.state.inputValue})
    //     this.setState({color: this.state.colorInputValue})
    //   }

     
// render() {
//         return (
//             <div className = 'button-container'>
//                 <h1 style = {{color: this.state.color}}>{this.state.finalValue}</h1>
//                 <input value={this.state.colorInputValue} onChange={e => this.updateColorInputValue(e)} />
//                 <input value={this.state.inputValue} onChange={e => this.updateInputValue(e)} />
//                 <button onClick = {this.handleSubmit}>Submit</button>
//             </div>
//         )
//     }
// }



import React, { useState } from 'react' 

export default function Colorbutton (props) {

  const [color, setColor] = useState('purple')
  const [inputValue, setInputValue] = useState('Color Me!')
  const [colorInputValue, setColorInputValue] = useState('purple')
  const [finalValue, setFinalValue] = useState('color ME!')


  const updateInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const  updateColorInputValue = (e) => {
    setColorInputValue(e.target.value)
    
  }

  const handleSubmit = () => {
    setFinalValue(inputValue)
    setColor(colorInputValue)
  }

  return (
    <div className = 'button-container'>
                <h1 style = {{color: color}}>{finalValue}</h1>
                <input value={colorInputValue} onChange={e => updateColorInputValue(e)} />
                <input value={inputValue} onChange={e => updateInputValue(e)} />
                <button onClick = {handleSubmit}>Submit</button>
            </div>
  )
}