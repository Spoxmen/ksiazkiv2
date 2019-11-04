const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    OrdinalNumber: Number,
    Title: String,
    Author: String,
    Publisher: String,
    Date: Number,
    Availability: String
}, {
    timestamps: true
});
module.exports = mongoose.model('Book', BookSchema);