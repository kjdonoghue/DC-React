import React, {useState, useEffect}from "react"
import "./App.css"
import Delete from "./components/Delete"
import EditIcon from '@material-ui/icons/Edit';
import {connect} from "react-redux"
import * as actionCreators from "./store/actions/actionCreators"
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';


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
          <IconButton color="secondary" aria-label="add an alarm" onClick={() => props.onAddFavorite(book)}>
            <FavoriteIcon />
          </IconButton>
          
          <IconButton color="primary" aria-label="add to shopping cart" onClick={() => props.onAddToCart(book)}>
            <AddShoppingCartIcon />
          </IconButton>
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
    onAddToCart: (books) => dispatch(actionCreators.addToCart(books)),
    onAddFavorite: (favorite) => dispatch(actionCreators.addToFavorites(favorite))
  }
}

export default connect(null, mapDispatchToProps)(App);
