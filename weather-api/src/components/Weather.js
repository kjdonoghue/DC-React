import React, {Component} from 'react'
import './Weather.css';

class Weather extends Component {
    render() {
        let weatherItem = this.props.weatherArray.map(result => {
        
                return <div key ={result.index} className="weatherItem">
                    <label><img src={`https://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`} alt="weather icon" /></label>
                    <label><b>Date/Time: {result.dt_txt}</b></label>
                    <label>Temp: {result.main.temp}{'\u00b0'}F</label>
                    <label>Feels Like: {result.main.feels_like}{'\u00b0'} F</label>
                    <label>Weather: {result.weather[0].description}</label>
                    <label>Chance of Rain: {(result.pop *100)}%</label>  
                    <label>Wind: {result.wind.speed} mph</label>             
            </div>
        })
        return <div className="weatherItemContainer">
            {weatherItem}
            </div>   
    }
}

export default Weather