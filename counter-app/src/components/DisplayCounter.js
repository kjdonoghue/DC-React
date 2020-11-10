import React, {Component} from 'react'

// class DisplayCounter extends Component {

//         render() {
//         return <h1>{this.props.ctr}</h1>
//         }
// }

class DisplayCounter extends Component {

  constructor() {
    super()

    this.state = {
      counter: 0
    }

  }

  handleIncrementClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrementClick}>Increment</button>

      </div>
    )
  }

}



export default DisplayCounter