import React, {Component} from 'react'
import {NavLink} from "react-router-dom"
import "./Menu.css"
import books from "./Images/books.png"


class Menu extends Component {
  render() {
    return(
      <div className="menuContainer">
          <div className="logoContainer">
              <img src={books}/>
              <b>Book Barn</b>
          </div>
          <div className="linksContainer">
            <b><NavLink to = "/">Home </NavLink> </b>
            <b><NavLink to = "/add-book">Add Book </NavLink></b>
          </div>
      </div>
    )
  }
}



export default Menu;