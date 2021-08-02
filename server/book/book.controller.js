const Book = require("./book.model");
const catchAsync = require('../helpers/catchAsync');
const bookService = require('./book.services');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const pick = require('../helpers/pick');

const getBook = catchAsync(async (req, res) => {
    const book = await bookService.getBookById(req.params.bookId);
    if (!book) {
        throw new APIError('No such book exists!', httpStatus.NOT_FOUND);
    }
    res.send(book);
});

const getBooks = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['title']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await bookService.queryBooks(filter, options);
    res.send(result);
});

const createBook = catchAsync(async (req, res) => {
    const book = await bookService.createBook(req.body);
    res.status(httpStatus.CREATED).send(book);
});

module.exports = {
    getBook,
    getBooks,
    createBook
}
