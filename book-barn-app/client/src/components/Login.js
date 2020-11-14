import React, {useState} from "react"
import "./Login.css"
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

function Login(props) {
      //for textboxes & button
      const classes = useStyles();

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
        <div className="loginContainer">
        <h1>Login</h1>
        <div>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="outlined-secondary"
                label="Username"
                variant="outlined"
                color="secondary"
                name="username"
                onChange={handleOnChange}
            />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField
            id="outlined-secondary"
            label="Password"
            variant="outlined"
            color="secondary"
            name="password"
            onChange={handleOnChange}
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

export default Login