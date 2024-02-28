const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add book title!"]
    },
    author: {
        type: String,
        required: [true, "Please add author!"]
    },
    pub_year: {
        type: Number,
        required: [true, "Please add Published Year!"]
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model("Books", bookSchema);