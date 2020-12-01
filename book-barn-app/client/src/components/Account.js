import React from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import * as actionTypes from "../store/actions/actionTypes"

function Account(props) {

    console.log(props)
    if (props.authenticated === true) {
        return (
            <b onClick={() => props.onLogOut()}>Logout</b>
        )
    } else {
        return (
            <b><NavLink to = "/login">LogIn</NavLink></b>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
    authenticated: state.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    onLogOut: () => dispatch({type: actionTypes.LOGGED_OUT})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
