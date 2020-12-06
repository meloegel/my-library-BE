const db = require('../data/db-config')

module.exports = {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook
}

function getBooks() {
    return db('books')
}

function getBook(id) {
    return db('books')
        .where({ id })
        .first()
}

function addBook(book) {
    return db('books').insert(book, 'id')
}

function updateBook(changes, id) {
    return db('books')
        .where({ id })
        .update(changes)
}

function deleteBook(id) {
    return db('books')
        .where({ id })
        .del()
}