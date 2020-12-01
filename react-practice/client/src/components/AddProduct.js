import React, {useState} from "react"


function AddProduct() {
    
    const [item, setItem] = useState({})

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        })
    }

    //add book
    const handleOnClick = (e) => {
        fetch("http://localhost:8000/add", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(item)
    }).then(response => response.json())
    .then(result => {
      if (result.success) {
        props.history.push("/") //will need to change
        
      }
    })
  }


    return (
        <div className="">
            <p>Add Product</p>
            <div>
            <label><b>Name: </b><input type="text" name="name" placeholder="Name" onChange={handleChange} /></label>
            <label><b>Description: </b><input type="text" name="description" placeholder="Description" onChange={handleChange} /></label>
            <label><b>Unit: </b><input type="text" name="title" placeholder="Title" onChange={handleChange} /></label>
            <label><b>Price Per Unit: </b><input type="text" name="price_unit" placeholder="Price" onChange={handleChange} /></label>
            <label><b>Category: </b><input type="text" name="title" placeholder="Title" onChange={handleChange} /></label>
            <label><b>Inventory: </b><input type="text" name="author" placeholder="Author" onChange={handleChange} /></label>
            <label><b>Available: </b><input type="text" name="author" placeholder="Author" onChange={handleChange} /></label>
            <button onClick={handleOnClick}>Submit</button>
            </div>
                 </div>
    )

}

export default AddProduct