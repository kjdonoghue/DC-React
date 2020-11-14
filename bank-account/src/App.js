import React, {useState} from "react"
import Budget from "./components/Budget"
import Chart from "./components/Chart"
import './App.css';


function App() {
  const [value, setValue] = useState([])

  const handleOnChange = (value) => {
    setValue(value)

  }

  return (
    <div className="appContainer">
      <h1>Bank Account Graph</h1>
      <Budget onUpdate ={handleOnChange}/>
      <Chart value ={value}/>
    </div>
  )
  
}




export default App;
