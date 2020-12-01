import React from 'react'
import {NavLink} from "react-router-dom"
import "./Menu.css"
import books from "./Images/books.png"
import {connect} from "react-redux"
import Account from "./Account"


function Menu(props) {
  
    return(
      <div className="menuContainer">
          <div className="logoContainer">
              <img src={books}/>
              <b>Book Barn</b>
          </div>
          <div className="linksContainer">
            <b><NavLink to = "/">Home </NavLink> </b>
            <b><NavLink to = "/add-book">Add Book </NavLink></b>
            <Account />
          </div>
          <div>
            <b><NavLink to = "/cart">Cart: {props.cartCount}</NavLink></b>
          </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    cartCount: state.itemCount
  }
}



export default connect(mapStateToProps)(Menu);