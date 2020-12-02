import React from 'react';
import {NavLink} from "react-router-dom";
import "./Menu.css";
import books from "./Images/books.png";
import {connect} from "react-redux";

import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import * as actionTypes from "../store/actions/actionTypes";

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
            <b><NavLink to = "/favorites">Favorite Books </NavLink></b>
            {!props.isAuth ? <b><NavLink to = "/login">LogIn</NavLink></b> : null}
            {props.isAuth ?<b onClick={() => props.onLogOut()}>Logout</b> : null}
            <div class="cartNav">
            <b><NavLink to = "/cart"> 
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={props.cartCount} color="primary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </NavLink></b>        
            </div>
          </div>
          
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    cartCount: state.cartReducer.itemCount,
    isAuth: state.authenticatedReducer.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  onLogOut: () => dispatch({type: actionTypes.LOGGED_OUT})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);