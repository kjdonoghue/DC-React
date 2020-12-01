import React, {useState, useEffect}from "react"
import "./App.css"
import Delete from "./components/Delete"
import EditIcon from '@material-ui/icons/Edit';
import {connect} from "react-redux"
import * as actionCreators from "./store/actions/actionCreators"

function App(props) {

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
          <button onClick={() => props.onAddToCart(book)}>Add to Cart</button>
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


const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (books) => dispatch(actionCreators.addToCart(books))
  }
}

export default connect(null, mapDispatchToProps)(App);
