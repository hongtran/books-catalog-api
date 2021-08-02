const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: false },
	year: { type: Number, required: false },
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);
