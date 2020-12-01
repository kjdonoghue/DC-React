import React from "react"
import Ratings from "./Ratings"
import DisplayRating from "./DisplayRating"


function ProductDetail() {
    

  return (
    <div className="">
        Image
        Title
        Price
        <DisplayRating />
        Description
        <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button>Add to Cart</button>
        <Ratings />

        List of previous reviews
     
    </div>
  );
}

export default ProductDetail;