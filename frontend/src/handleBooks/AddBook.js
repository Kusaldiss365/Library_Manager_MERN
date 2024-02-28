import { Box, Grid, Paper, TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import useStyles from '../styles';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddBook = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    pub_year: "",
    description: ""
  });

  const { title, author, pub_year, description } = book;

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
      await axios.post("http://localhost:5005/api/books/", book);
      alert("Successfully Submitted the Book!");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container className={classes.addBookContainer}>
      <Paper elevation={3}>
        <Box className={classes.addBookBox} component="form" onSubmit={onSubmit}>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }} align='center'><AddBoxIcon fontSize='medium' /> Add a new Book</Typography>
          <TextField
            sx={{ marginTop: '30px' }}
            fullWidth
            variant='standard'
            label="Book Title"
            name="title"
            value={title}
            onChange={onInputChange} />

          <TextField
            sx={{ marginTop: '30px' }}
            fullWidth
            variant='standard'
            label="Author"
            name="author"
            value={author}
            onChange={onInputChange} />

          <TextField
            sx={{ marginTop: '30px' }}
            fullWidth
            variant='standard'
            label="Published year"
            name="pub_year"
            value={pub_year}
            onChange={onInputChange} />

          <TextField
            sx={{ marginTop: '30px' }}
            fullWidth
            variant='standard'
            label="Description"
            name="description"
            value={description}
            onChange={onInputChange} />

          <div>
            <Button variant='outlined' color='error' sx={{ marginTop: "30px", maxWidth: "100px", marginRight: "20px" }} onClick={() => navigate("/")}>Cancel</Button>
            <Button type='submit' variant='contained' color='primary' sx={{ marginTop: "30px", maxWidth: "100px" }}>Submit</Button>
          </div>
        </Box>
      </Paper>
    </Grid>
  )
}

export default AddBook;
