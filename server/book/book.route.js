const express = require('express');
const bookCtrl = require('./book.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/books - Get list of books */
  .get(bookCtrl.getBooks)

  /** POST /api/books - Create new book */
  .post(bookCtrl.createBook);

router.route('/:bookId')
  /** GET /api/books/:bookId - Get book */
  .get(bookCtrl.getBook);


module.exports = router;
