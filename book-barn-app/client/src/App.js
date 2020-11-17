import React, {useState, useEffect}from "react"
import "./App.css"
import Delete from "./components/Delete"
import EditIcon from '@material-ui/icons/Edit';

function App() {

    const [books, setBooks] = useState([])

    useEffect(() => {
       fetchBooks()

    }, [])

    const fetchBooks = () => {
        fetch("http://localhost:8080/books")
        .then(response => response.json())
        .then(result => {
          setBooks(result)
        })
    }

  
    const bookItems = books.map(book => {
      return <div key={book.id} className="bookItem">
        <img src={book.cover} className="cover"/>
        <label><b>{book.title}</b></label>
        <label>Author: {book.author}</label>
        <div className="icons">
          <div>
            <a href={book.id}><EditIcon /></a>
          </div>
          <div className="deleteIcon">
            <Delete id={book.id} onDelete={fetchBooks}/> 
          </div>
        </div>
      </div>
  })


    return (      
        <div className="booksContainer">
            {bookItems}
        </div>
    )
}


export default App;
