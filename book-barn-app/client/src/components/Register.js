import React, {useState} from "react"
import "./Register.css"
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core/'

//For Material UI
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
})); 

function Register(props) {
    //for textboxes & button
    const classes = useStyles();

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
        <div className="registerContainer">
            <h1>Register</h1>
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-secondary"
                    label="Username"
                    variant="outlined"
                    color="secondary"
                    name="username"
                    onChange={handleRegister}
                />
                </form>
                <form className={classes.root} noValidate autoComplete="off">
                <TextField
                id="outlined-secondary"
                label="Password"
                variant="outlined"
                color="secondary"
                name="password"
                onChange={handleRegister}
                />
            </form>
            </div>
            <div className={classes.root}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default Register