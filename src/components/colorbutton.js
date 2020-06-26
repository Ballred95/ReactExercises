import React, {Component} from 'react' 

export default class  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: 'blue',
            inputValue: '',
            colorInputValue: '',
            finalValue: ''

        }

        this.updateInputValue = this.updateInputValue.bind(this)
        this.updateColorInputValue = this.updateColorInputValue.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // changeColor(newColor) {
    //    let newColor = 
    // }

    updateInputValue(e) {
        this.setState({
          inputValue: e.target.value
        });
      }

      updateColorInputValue(e) {
        this.setState({
          colorInputValue: e.target.value
        });
      }

      handleSubmit() {
        this.setState({finalValue: this.state.inputValue})
        this.setState({color: this.state.colorInputValue})
      }

     
render() {
        return (
            <div className = 'button-container'>
                <h1 style = {{color: this.state.color}}>{this.state.finalValue}</h1>
                <input value={this.state.colorInputValue} onChange={e => this.updateColorInputValue(e)} />
                <input value={this.state.inputValue} onChange={e => this.updateInputValue(e)} />
                <button onClick = {this.handleSubmit}>Submit</button>
            </div>
        )
    }
}