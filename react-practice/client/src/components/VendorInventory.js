import React from "react"
import AddProduct from "./AddProduct"
import EditProduct from "./EditProduct"


function VendorInventory() {
    
    return (
        <div className="Inventory Container">
            <div>
                <AddProduct />
            </div>
           <div>
                <EditProduct />        
           </div>
        </div>
    )

}

export default VendorInventory