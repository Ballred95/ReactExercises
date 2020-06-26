import React, {Component} from 'react' 

export default class Clock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time: new Date()
        }
    }

    currenTime() {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount() {
        setInterval(() => this.currenTime(), 1000)
    }

render() {
        return (
            <div className = ''>
                {this.state.time.toLocaleTimeString()}
            </div>
        )
    }
}