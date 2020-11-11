import React, {Component} from 'react'
import {NavLink} from "react-router-dom"


class Menu extends Component {
  render() {
    return(
      <div>
          <b><NavLink to = "/">Home </NavLink> </b>
          <b><NavLink to = "/add-book">Add Book </NavLink></b>
          <b><NavLink to = "/">Update Book </NavLink></b>
      </div>
    )
  }
}



export default Menu;