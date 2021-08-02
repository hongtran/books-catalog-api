const express = require('express');
const bookRoutes = require('./server/book/book.route');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);


// mount book routes at /books
router.use('/books', bookRoutes);

module.exports = router;
