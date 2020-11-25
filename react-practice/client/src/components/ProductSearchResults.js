import React, {useState, useEffect}from "react"


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
        return <div>
            <label>{item.name}</label>
        </div>
    })

        
    return (
        <div>             
            <div className="ProductDisplay">
                <h3> Product Display</h3>
                {products}
            </div>

        </div>
    )

}

export default ProductSearchResults