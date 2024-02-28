import { Box, Grid, Paper, TextField, Typography, Button, InputLabel } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useStyles from '../styles'
import EditIcon from '@mui/icons-material/Edit';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditBook = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams();

  const [book, setBook] = useState({
    title: "",
    author: "",
    pub_year: "",
    description: ""
  });

  const{title,author,pub_year,description}=book;

  useEffect(() => {
    const loadBook = async () => {
      try {
        const result = await axios.get(`http://localhost:5005/api/books/${id}`);
        setBook(result.data);
      } catch (error) {
        console.error("Error loading book:", error);
      }
    };

    loadBook();
  }, [id]); 

  const onInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === "" || author.trim() === "" || pub_year.toString().trim() === "" || description.trim() === "") {
      alert("Please fill all fields.");
      return;
    }

    try {
      await axios.put(`http://localhost:5005/api/books/${id}`, book);
      alert("Successfully updated the Book!");
      navigate("/");
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <Grid container className={classes.addBookContainer}>
      <Paper elevation={3}>
        <Box className={classes.addBookBox} component="form" onSubmit={onSubmit}>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }} align='center'><EditIcon fontSize='medium' /> Edit Book </Typography>
          <InputLabel htmlFor="title" sx={{ marginTop: '30px' }}>Title</InputLabel>
          <TextField
            sx={{ marginTop: '10px' }}
            fullWidth
            variant='standard'
            id="title"
            name="title"
            value={book.title}
            onChange={onInputChange}
            aria-label="Title"
          />

          <InputLabel htmlFor="author" sx={{ marginTop: '30px' }}>Author</InputLabel>
          <TextField
            sx={{ marginTop: '10px' }}
            fullWidth
            variant='standard'
            id="author"
            name="author"
            value={book.author}
            onChange={onInputChange}
            aria-label="Author"
          />

          <InputLabel htmlFor="pub_year" sx={{ marginTop: '30px' }}>Published year</InputLabel>
          <TextField
            sx={{ marginTop: '10px' }}
            fullWidth
            variant='standard'
            id="pub_year"
            name="pub_year"
            value={book.pub_year}
            onChange={onInputChange}
            aria-label="Published year"
          />

          <InputLabel htmlFor="description" sx={{ marginTop: '30px' }}>Description</InputLabel>
          <TextField
            sx={{ marginTop: '10px' }}
            fullWidth
            variant='standard'
            id="description"
            name="description"
            value={book.description}
            onChange={onInputChange}
            aria-label="Description"
          />

          <div>
            <Link to={"/"}>
              <Button variant='outlined' color='error' sx={{ marginTop: "30px", maxWidth: "100px", marginRight: "20px" }}>Cancel</Button>
            </Link>
            <Button type="submit" variant='contained' color='primary' sx={{ marginTop: "30px", maxWidth: "100px" }}>Submit</Button>
          </div>
        </Box>
      </Paper>
    </Grid>
  );
}

export default EditBook;
