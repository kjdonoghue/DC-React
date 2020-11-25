import React from "react"
import ProductSearch from "./ProductSearch"
import VendorSearch from "./VendorSearch"
import ProductSearchResults from "./ProductSearchResults"
import "./ProductList.css"

function ProductList() {
    
    return (
        <div>
            <div className="searchOptions">
                <ProductSearch />
                <VendorSearch />
                <ProductSearchResults />
            </div>
            <div className="ProductDisplay">

            </div>

        </div>
    )

}

export default ProductList