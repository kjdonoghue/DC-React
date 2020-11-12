import React, {useState} from "react"

function Login(props) {

    const [login, setLogin] = useState({})

    const handleOnChange = (e) => {
        setLogin ({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(login)        
        }).then(response => response.json())
        .then(result => {
            if (result.sucess)
            console.log(props)
            props.history.push("/")
        })
    }


    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="username" name="username" onChange={handleOnChange} />
            <input type="text" placeholder="password" name="password" onChange={handleOnChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login