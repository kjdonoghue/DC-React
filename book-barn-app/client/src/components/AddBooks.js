import React, {useState} from "react"

function AddBooks(props) {

    const [books, setBooks] = useState({})

    const handleChange = (e) => {
        setBooks({
            ...books,
            [e.target.name]: e.target.value
        })
    }

    //add book
    const handleOnClick = (e) => {
        fetch("http://localhost:8080/books", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(books)
    }).then(response => response.json())
    .then(result => {
      if (result.success) {
        props.history.push("/")
        
      }
    })
  }

    return (
        <div>
            <input type="text" name="title" placeholder="Title" onChange={handleChange} />
            <input type="text" name="author" placeholder="Author" onChange={handleChange} />
            <input type="text" name="cover" placeholder="Cover Art" onChange={handleChange} />
            <button onClick={handleOnClick}>Submit</button>

        </div>
    )

}


export default AddBooks