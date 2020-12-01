import React, {useState, useEffect}from "react"
import "./ProductSearch.css"
import DisplayRating from "./DisplayRating"


function ProductSearchResults(props) {

    console.log(props)
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchItems()
    }, [])

    const fetchItems = () => {
        fetch("http://localhost:8080/products")
        .then(response => response.json())
        .then(result => {
          setItems(result)
          console.log(result)
        })
    }

  
    const products = items.map(item => {
         return <div key={item.id} className="product">
             <a href={item.id}>{item.name}</a>
             <p>${item.price_unit} </p>
             <DisplayRating/>
        
            {/* <img src={item.description} /> */}
            <button>add to cart</button>
        </div>
    })
    
        
    return (
        <div>         
            <div className="productDisplay">
                
                {products}
            </div>

        </div>
    )

}

export default ProductSearchResults