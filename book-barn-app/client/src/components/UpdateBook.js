import React, {useEffect, useState} from "react"

function UpdateBook(props) {

    const [book, setBook] = useState({})

    useEffect (() => {
        let id = props.match.params.id
        fetchBook(id) 
       
    }, [])

    const fetchBook = (id) => {
         fetch(`http://localhost:8080/books/${id}`)
        .then(response => response.json())
        .then(result => {
          setBook(result)
        })
    }

    const handleOnChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (item) => {
        console.log(item)
        console.log(item.id)
        fetch(`http://localhost:8080/books/${item.id}`, {
            method: "PUT", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
            }).then(response => response.json())
            .then(result => {
                if (result.success)
                props.history.push("/")
            })
    }

    
return(
    <div>
        <h1>Update Book Information</h1>
    <div>
        <input type="text" value={book.title} name="title" onChange={handleOnChange}/>
        <input type="text" value={book.author} name="author" onChange={handleOnChange}/>
        <input type="text" value={book.cover} name="cover" onChange={handleOnChange}/>
        <button onClick={() => handleOnSubmit(book)}>Submit</button>
    </div>
    </div>
)

}

export default UpdateBook