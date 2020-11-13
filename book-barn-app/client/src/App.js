import React, {useState, useEffect}from "react"
import "./App.css"

function App() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/books")
        .then(response => response.json())
        .then(result => {
          setBooks(result)
        })
    }, [books])

    function handleDelete(id) {
        fetch(`http://localhost:8080/books/${id}`, {
            method: "DELETE", 
            }).then(response => response.json())
            .then(result => {
                if (result.success)
                console.log("success")
            })
    }

    const bookItems = books.map(book => {
        return <div key={book.id} className="bookItem">
          <img src={book.cover} className="cover"/>
          <label><b>{book.title}</b></label>
          <label>Author: {book.author}</label>
          <button onClick={() => handleDelete(book.id)}>Delete</button>
        </div>
    })

    return (
        <div className="booksContainer">
            {bookItems}
        
        </div>
    )
}


export default App;
