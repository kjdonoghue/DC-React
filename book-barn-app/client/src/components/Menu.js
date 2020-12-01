import React from 'react'
import {NavLink} from "react-router-dom"
import "./Menu.css"
import books from "./Images/books.png"
import {connect} from "react-redux"
import Account from "./Account"
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


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
            <div class="cartNav">
            <b><NavLink to = "/cart"> 
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={props.cartCount} color="primary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </NavLink></b>
              {/* <b><NavLink to = "/cart">Cart: {props.cartCount}</NavLink></b> */}
            </div>
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