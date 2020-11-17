const models =(require("../models"))

class BooksController {

    getAll = (req, res) => {
        models.Book.findAll().then (books => {
            res.json(books)
        })
    }

    addBook = (req, res) => {
        let title = req.body.title
        let author = req.body.author
        let cover = req.body.cover
       
        let book = models.Book.build({
            title: title,
            author: author,
            cover: cover
        })
    
        book.save().then((savedBook) => {
            res.json({success: true})
       }).catch((error) => {
        res.json({success: false})
       })
    }

    deleteBook = (req, res) => {
        let id = req.params.id
    
        models.Book.destroy({
           where: {
               id: id
           }
       }).then(deletedBook => {
           res.json({success: true})
       })
    }

    getBookToUpdate = (req, res) => {
        let id = req.params.id
        console.log(id)
        models.Book.findByPk(id).then(book => {
            console.log(book)
            res.json(book)
        })
    }

    updateBook = (req, res) => {
        let id = req.body.id
        let title = req.body.title
        let author = req.body.author
        let cover = req.body.cover
    
        models.Book.update({
            title: title,
            author: author,
            cover: cover
        }, {where: {
            id: id
            }
        }).then((updatedBook) => {
            res.json({success: true})
        }) 
    }

}

module.exports = BooksController