import React, {Component} from 'react'
import DisplayCounter from "./components/DisplayCounter"
import './App.css';



class App extends Component {

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
        <DisplayCounter ctr = {this.state.counter}/>
        <button onClick={this.handleIncrementClick}>Increment</button>

      </div>
    )
  }

}

export default App;
