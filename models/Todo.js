var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
    title: String,
    text: String
});

module.exports = mongoose.model('Todo', TodoSchema);