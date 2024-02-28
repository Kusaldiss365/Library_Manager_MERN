const express = require('express');
const router = express.Router();
const { getBooks, getBook, updateBook, deleteBook, createBook} = require("../controller/bookController");

router.route("/").get(getBooks);
router.route("/").post(createBook);
router.route("/:id").get(getBook);
router.route("/:id").put(updateBook);
router.route("/:id").delete(deleteBook);

module.exports = router;