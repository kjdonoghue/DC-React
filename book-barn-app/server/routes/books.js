const express = require('express')
const router = express.Router()
const BooksController = require("../controllers/booksController")
const booksController = new BooksController()
const models =(require("../models"))

router.get("/", booksController.getAll)

router.post("/", booksController.addBook)

router.get("/:id", booksController.getBookToUpdate)

router.put("/:id", booksController.updateBook)

router.delete("/:id", booksController.deleteBook)

module.exports = router



