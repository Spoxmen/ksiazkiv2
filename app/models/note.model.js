const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    OrdinalNumber: Number,
    Title: String,
    Author: String,
    Publisher: String,
    Date: Number,
    Availibility: String
}, {
    timestamps: true
});
module.exports = mongoose.model('Book', BookSchema);