const express = require('express')
const router = express.Router()
const BooksController = require("../controllers/booksController")
const booksController = new BooksController()


router.get("/", booksController.getAll)

router.post("/", booksController.addBook)

router.delete("/:id", booksController.deleteBook)

module.exports = router



