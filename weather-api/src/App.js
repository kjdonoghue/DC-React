import './App.css';
import { Component } from 'react';
import Weather from './components/Weather';

class App extends Component {

  constructor() {
    super() 
    this.state = {
      weather: [],
      submit: ''
    }
  }

  // 953e697597be03d96e946ec52d9cc505
  fetchWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=953e697597be03d96e946ec52d9cc505`)
    .then(response => response.json())
    .then(result => {
      this.setState ({
        weather: result.list
      })
    })
  }

  enterCity = (e) => {
    this.setState ({
      submit: e.target.value
    })
  }

  submitButton = () => {
    this.fetchWeather(this.state.submit)
  }

  render() {
    return  (
      <div className="appContainer">
        <h1>Weather</h1>
        <h2>5 Day Forecast (3 hour increments)</h2>
        <b>Enter your location:</b><input type="text" placeholder="city name" onChange={this.enterCity}/>
        <button onClick={this.submitButton}>Submit</button>
        <Weather weatherArray={this.state.weather} />
      </div>
    )
  }
}



export default App;
