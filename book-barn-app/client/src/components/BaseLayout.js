import React, {Component} from 'react'
import Menu from "./Menu"

class BaseLayout extends Component {
  render() {
    return(
      <div>
      <Menu />
      {this.props.children}

      </div>
    )
  }
}



export default BaseLayout;