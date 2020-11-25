import React from "react"
import "./BaseLayout.css"


function Sidebar() {
    
    return (
        <div ClassName="CustomerSidebar">
            <div>
            <b>Vendors</b>
                <p>Vendor 1</p>
                <p>Vendor 2</p>
                <p>Vendor 3</p>
                <p>Vendor 4</p>
                <p>Vendor 5</p>

            </div>
           <div>
            <b>Categories</b>
                <p>Produce</p>
                <p>Bread</p>
                <p>Cheese</p>
                <p>Meat</p> 
                <p>Pantry</p>                
           </div>
        </div>
    )

}

export default Sidebar