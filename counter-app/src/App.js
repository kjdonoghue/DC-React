// import React, {Component} from 'react'
// // import DisplayCounter from "./components/DisplayCounter"
// import './App.css';
// // import Stepper from "./components/Stepper"
// import News from "./components/News"


// class App extends Component {

//   constructor() {
//     super()
//     this.state = {
//       news: []
//     }

//   }

//   fetchNews = () => {
//     fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=0cf790498275413a9247f8b94b3843fd")
//     .then(response => response.json())
//     .then(result => {
//       console.log(result)
//       this.setState({
//         news: result.articles
//       })
//     })
//   }

//   componentDidMount() {
//     this.fetchNews()
//   }


//   render () {
//     return (
//       <div>
//       {/* <DisplayCounter />
//       <Stepper /> */}
//       <News news={this.state.news} />
//       </div>
//     )
//   }

// }

/********************* Above is Classes, below is Hooks ************************** */ 

import React, {useState} from 'react'

function App() {

  const[count, setCount] = useState(0)

  const handleDecrement = () => {
    setCount(count - 1)

  }

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default App;
