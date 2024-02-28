const asyncHandler = require('express-async-handler');

const Book = require('../models/bookModel');


// Get all Books
const getBooks = asyncHandler(async(req, res) =>{
    const books = await Book.find()
    res.status(200).json(books);
});

//Create book
const createBook = asyncHandler(async(req, res) =>{
    console.log("The request body is: ", req.body)

    const{ title, author, pub_year, description } = req.body;
    if(!title || !author || !pub_year || !description){
        res.status(400);
        throw new Error("Field can't be empty!")
    }

    const book = await Book.create({
        title,
        author,
        pub_year,
        description
    })
    res.status(201).json(book);
    return(book);
});

//Get Book by ID
const getBook = asyncHandler(async(req, res)=>{
    const book = await Book.findById(req.params.id);
    if(!book){
        res.status(404);
        throw new Error("Book not Found!");
    }

    res.status(200).json(book);
})

//Update book
const updateBook = asyncHandler(async(req,res)=>{
    const book = await Book.findById(req.params.id);
    if(!book){
        res.status(404);
        throw new Error("Book not Found!");
    }

    const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedBook);
});

//Delete Book
const deleteBook = asyncHandler(async(req, res)=>{
    const book = await Book.findById(req.params.id);
    if(!book){
        res.status(404);
        throw new Error("Book not Found!");
    }

    await Book.deleteOne();
    res.status(200).json(book);
});

module.exports = { getBooks, getBook, updateBook, deleteBook, createBook};