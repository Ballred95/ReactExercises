import React, {Component} from 'react' 

export default class  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: 'blue',
            inputValue: '',
            putInInput: ''

        }
    }

    // changeColor(newColor) {
    //    let newColor = 
    // }

    updateInputValue(e) {
        this.setState({
          inputValue: e.target.value
        });
      }

     
render() {
        return (
            <div className = 'button-container'>
                <h1 style = {{color: this.state.color}}>{this.state.inputValue}</h1>
                <input className = 'colorBox' type = 'text' placeholder = 'blue'></input>
                <input value={this.state.inputValue} onChange={e => this.updateInputValue(e)} />
                <button>Submit</button>
            </div>
        )
    }
}