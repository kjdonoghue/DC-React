import React, {useState} from "react"

function Register(props) {

    const [register, setRegister] = useState({})

    const handleRegister = (e) => {
        setRegister ({
            ...register,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(register)        
        }).then(response => response.json())
        .then(result => {
            if (result.sucess)
            console.log(props)
            props.history.push("/login")
        })
    }
    

    return(
        <div>
            <h1>Register</h1>
            <input type="text" placeholder="username" name="username" onChange={handleRegister}/>
            <input type="text" placeholder="password" name="password" onChange={handleRegister}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Register