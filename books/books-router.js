const express = require('express')

const router = express.Router()

const Books = require('./books-model')

router.get('/', (req, res) => {
    Books.getBooks()
        .then(books => {
            res.status(200).json(books)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Error getting all the books' })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    Books.getBook(id)
        .then(book => {
            if (book) {
                res.status(200).json(book)
            } else {
                res.status(404).json({ errorMessage: 'Could not find book with that Id' })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Error getting book' })
        })
})

router.post('/', (req, res) => {
    const newBook = req.body
    Books.addBook(newBook)
        .then(book => {
            res.status(201).json({ Posted: newBook })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Error adding book' })
        })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body
    Books.getBook(id)
        .then(book => {
            if (book) {
                Books.updateBook(changes, id)
                    .then(updatedBook => {
                        res.status(200).json({ Updated: `Book with id: ${id}` })
                    })
            } else {
                res.status(404).json({ errorMessage: 'Could not find Book with that id' })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Failed to update Book' })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    Books.deleteBook(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ Removed: `Book with id: ${id}` })
            } else {
                res.status(404).json({ errorMessage: 'Could not find Book with that id' })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Error deleting book' })
        })
})

module.exports = router;