const express = require('express');
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler")
const dbConnection = require("./config/dbConnection")
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5004;

app.use(express.json());

app.use('*', cors());

app.use("/api/books", require("./routes/bookRoutes"));

app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})