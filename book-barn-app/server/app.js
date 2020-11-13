const express = require('express')
const app = express()
const cors = require('cors')
var bcrypt = require('bcryptjs');


app.use(cors())
app.use(express.json())



let users = []


// registration

app.post("/register", (req, res) => {
    let username = req.body.username
    let password = req.body.password
   
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            let user = {username: username, password: hash}
            users.push(user)
            res.json({success: true})
        });
    });

    // res.json({success: false})

})

let logins = []


//login

app.post("/login", (req, res) => {
    let username = req.body.username
    let password = req.body.password
    
    let verifiedUser = users.find(user => {
         return user.username = username
    })

    if(verifiedUser) {
        bcrypt.compare(password, verifiedUser.password, function(err,request) {
            if (request) {
                res.json({success: true})
                
            } else {
                console.log("no")
            } 
         
    });
    
    }


})




let booksArray = [
    {
        title: "The Girl with the Louding Voice: A Novel",
        author: "Abi Daré",
        cover: "https://m.media-amazon.com/images/I/51rUKFsmKRL.jpg",
        id: 12
}, {
    title: "Hidden Valley Road: Inside the Mind of an American Family",
    author: "Robert Kolker",
    cover: "https://m.media-amazon.com/images/I/51M6LsORHAL.jpg",
    id: 15
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
    let id = req.params.id
    
    booksArray = booksArray.filter(book => {
        return book.id != id
    })
    
    res.json({success: true})

})



app.listen(8080, () => {
    console.log("server is running...")
})