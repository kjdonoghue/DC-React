const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

let booksArray = [
    {
        title: "The Girl with the Louding Voice: A Novel",
        author: "Abi Daré",
        cover: "https://m.media-amazon.com/images/I/51rUKFsmKRL.jpg",
        id: 1
},

]


app.get("/books", (req, res) => {
    res.json(booksArray)
})

app.post("/books", (req, res) => {
    let title = req.body.title
    let author = req.body.author
    let cover = req.body.cover
    let id = 2

    let bookItem = {title: title, author: author, cover: cover, id: id}

    booksArray.push(bookItem)

    res.json({success: true})
})

app.delete("/books/:id", (req, res) => {
    let id = req.body.id
    console.log(id)

    booksArray = booksArray.filter(book => {
        return book.id != id
       
    })
    // console.log(booksArray)
    res.json({success: true})

})



app.listen(8080, () => {
    console.log("server is running...")
})