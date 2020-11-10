import React, {Component} from 'react'
// import DisplayCounter from "./components/DisplayCounter"
import './App.css';
// import Stepper from "./components/Stepper"
import News from "./components/News"


class App extends Component {

  constructor() {
    super()
    this.state = {
      news: []
    }

  }

  fetchNews = () => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=0cf790498275413a9247f8b94b3843fd")
    .then(response => response.json())
    .then(result => {
      console.log(result)
      this.setState({
        news: result.articles
      })
    })
  }

  componentDidMount() {
    this.fetchNews()
  }


  render () {
    return (
      <div>
      {/* <DisplayCounter />
      <Stepper /> */}
      <News news={this.state.news} />
      </div>
    )
  }

}

export default App;
