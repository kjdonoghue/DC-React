const express = require('express')
const app = express()
const cors = require('cors')
var bcrypt = require('bcryptjs');
const models = require('./models')
const booksRouter = require("./routes/books")
const indexRouter = require("./routes/index")

app.use(cors())
app.use(express.json())
app.use("/books", booksRouter)
app.use("/", indexRouter)


app.listen(8080, () => {
    console.log("server is running...")
})