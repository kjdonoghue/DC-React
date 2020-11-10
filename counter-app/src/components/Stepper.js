import React, {Component} from 'react'

class Stepper extends Component {

    constructor() {
        super ()
        this.state = {
            counter: 0
        }
    }

    decrementStepper = () => {
        this.setState({
            counter: this.state.counter -1
        })
    }

    incrementStepper = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }


    render () {
        return (
            <div>
                <button onClick={this.decrementStepper}>-</button>
                <h1>{this.state.counter}</h1>
                <button onClick={this.incrementStepper}>+</button>
    
            </div>
        )
    }

    
}


export default Stepper;