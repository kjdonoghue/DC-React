import React, {useState, useEffect} from "react"


function Budget(props) {
  const [value, setValue] = useState([])

useEffect(() => {
    props.onUpdate(value)
}, [value])

  const handleOnChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
        <input type="text" name="checking" placeholder="checking" onChange={handleOnChange}></input>
        <input type="text" name="savings" placeholder="savings" onChange={handleOnChange}></input>
        <input type="text" name="brokerage" placeholder="brokerage" onChange={handleOnChange}></input>
     </div>
  )
  
}




export default Budget;