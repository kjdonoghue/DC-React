import React, {Component} from 'react'


import './App.css';

class App extends Component {

  constructor() {
    super() 

    this.state = {
      books: []
    }
  }

fetchAllBooks = () => {
    fetch("http://localhost:8080/books")
    .then(response => response.json())
    .then(results => {
      this.setState({
        books: results
      })
    })
  }

  componentDidMount() {
    this.fetchAllBooks()
  }


  render() {
    const bookItems = this.state.books.map(book => {
      return <li key={book.id}>
        <img src={book.cover} />
        <b>{book.title}</b>
        <label>{book.title}</label>
      </li>
      

    })
  
    return(
    
     <ul>{bookItems}</ul>
      
    )
  }
}



export default App;
