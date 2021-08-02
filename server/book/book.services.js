const Book = require('./book.model');

/**
 * Get book by id
 * @param {ObjectId} id
 * @returns {Promise<Book>}
 */
const getBookById = async (id) => {
    return Book.findById(id);
};

/**
 * Query for books
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryBooks = async (filter, options) => {
    const books = await Book.find(filter, options);
    return books;
};

/**
 * Create a book
 * @param {Object} bookBody
 * @returns {Promise<Book>}
 */
const createBook = async (bookBody) => {
    return Book.create(bookBody);
};

module.exports = {
    getBookById,
    queryBooks,
    createBook
}
