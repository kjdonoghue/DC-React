import React, {useState, useEffect}from "react"


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
        return <li key={book.id}>
          <img src={book.cover} />
          <b>{book.title}</b>
          <label>{book.author}</label>
          <button onClick={() => handleDelete(book.id)}>Delete</button>
        </li>
    })

    return (
        <div>
            {bookItems}
        
        </div>
    )
}


export default App;
