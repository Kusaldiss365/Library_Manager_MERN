const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/book_manager');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', function(){
    console.log("Database connected Successfully!");
})