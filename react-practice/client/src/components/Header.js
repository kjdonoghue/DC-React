import React from "react"
import "./BaseLayout.css"

function Header() {
    
    return (
        <div className="CustomerHeader">
            <div>
                <b>Logo</b>
            </div>
           <div>
                <p>Meet Our Vendors</p>
                <p>About</p>
                <p>Contact</p>
                <p>Login</p>
                <p>Cart</p>               
           </div>
        </div>
    )

}

export default Header