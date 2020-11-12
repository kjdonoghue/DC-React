import React, {Component} from 'react'


class AddBooks extends Component {
  constructor() {
    super()

    this.state = {
      title: "",
      author: "",
      cover: ""
    }
  }

  handleOnChange = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  handleSaveBook = () => {
    fetch("http://localhost:8080/books", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(this.state)
    }).then(response => response.json())
    .then(result => {
      if (result.success) {
        this.props.history.push("/")
      }
    })
  }


  render() {
    return(
      <div>
        <input type="text" name="title" placeholder="Book Title" onChange={this.handleOnChange}/>
        <input type="text" name="author" placeholder="Author" onChange={this.handleOnChange}/>
        <input type="text" name="cover" placeholder="Cover" onChange={this.handleOnChange}/>
        <button onClick={this.handleSaveBook}>Save Book</button>
      </div>
    )
  }
}



export default AddBooks;