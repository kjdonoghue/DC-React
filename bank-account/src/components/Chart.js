import React, {useState} from "react"
import { PieChart } from 'react-minimal-pie-chart'


function Chart(props) {
  return (
    <div className="pieChart">
        <PieChart data={[
    { title: 'One', value: parseInt(props.value.checking), color: '#E38627' },
    { title: 'Two', value: parseInt(props.value.savings), color: '#C13C37' },
    { title: 'Three', value: parseInt(props.value.brokerage), color: '#6A2135' },
    ]} />
      </div>
  )
  
}


export default Chart;