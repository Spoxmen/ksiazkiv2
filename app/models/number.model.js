const mongoose = require('mongoose');

const NumberSchema = mongoose.Schema({
    OrdinalNumber: Number
});
module.exports = mongoose.model('OrdinalNumber', NumberSchema);