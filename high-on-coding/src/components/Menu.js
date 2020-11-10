import React, {Component} from 'react'
import "./Menu.css"

class Menu extends Component {
    render() {
        return ( 
            <div className="menu">
                <div>
                    <h1>High on Coding</h1>
                </div>
                <div className="menuItems">                    
                    <a href="#"><b>Home</b></a>
                    <a href="#">Categories</a>
                </div>
            </div>
        )
    }
}

export default Menu