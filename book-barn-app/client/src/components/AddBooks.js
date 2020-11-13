import React, {useState} from "react"
import "./AddBooks.css"

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
        <div className="inputContainer">
            <label><b>Title: </b><input type="text" name="title" placeholder="Title" onChange={handleChange} /></label>
            <label><b>Author: </b><input type="text" name="author" placeholder="Author" onChange={handleChange} /></label>
            {/* <label><b>Genre: </b><input type="text" name="genre" placeholder="Genre" onChange={handleChange} /></label>
            <label><b>Year: </b><input type="text" name="year" placeholder="Year" onChange={handleChange} /></label> */}
            <label><b>Cover: </b><input type="text" name="cover" placeholder="Cover Art" onChange={handleChange} /></label>
            <button onClick={handleOnClick}>Submit</button>

        </div>
    )

}


export default AddBooks