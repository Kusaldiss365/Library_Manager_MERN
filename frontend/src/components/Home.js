import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import useStyles from '../styles';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';


import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Fab, Grid, Button,Box, TextField } from '@mui/material'; 
import { Link } from 'react-router-dom';

// function createData(id, title, author, pub_year) {
//   return { id, title, author, pub_year };
// }


// const rows = [
//   createData(1, 'Deep Work', 'Cal Newport', 2018),
//   createData(2, 'Atomic Habits', 'James Clear', 2017),
//   createData(3, 'Rich dad Poor dad', 'Robert Kiyosaki', 2005),
//   createData(4, 'Meditations', 'Marcus Aurelius', 2019),
// ];


const Home = () => {
  const classes = useStyles();

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState([]);

useEffect(()=>{
  loadBooks();
})

const searchBook = (event) =>{
  setSearch(books.filter(f => f.title.toLowerCase().includes(event.target.value)));
}

const loadBooks = async() =>{
  const result = await axios.get("http://localhost:5005/api/books/");
  setBooks(result.data);
  setSearch(result.data)
}
  return (
    
    <div className={classes.container}>
    <div className={classes.Fabs}>
    <Link to="/addbook">
    <Fab color='secondary' aria-label="add" className={classes.addIcon}>
        <AddIcon />
    </Fab>
    </Link>
    </div>
    <Box className={classes.searchBox} component="form">
              <TextField sx={{ marginTop: '30px' }} fullWidth variant='outlined' label="Search here" onChange={(event)=>searchBook(event)}/>
      </Box>
    <Grid container xl={12}>
    <TableContainer component={Paper} className={classes.tableContainer} style={{ overflowX: 'auto' }}>
      <Table className={classes.table} size="medium">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Published Year</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books && search.map((book, index) => (
            <TableRow key={index}>
              <TableCell scope="row">{index+1}</TableCell>
              <TableCell align="center">{book.title}</TableCell>
              <TableCell align="center">{book.author}</TableCell>
              <TableCell align="center">{book.pub_year}</TableCell>
              <TableCell align='center'>
                <Link to={`/viewbook/${book.id}`}><Button variant='contained' color="success" className={classes.smallButton}>View</Button></Link>
                <Link to={`/editbook/${book.id}`}><Button variant='contained' sx={{marginLeft:"10px"}} className={classes.smallButton}>Edit</Button></Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </div>
    
  );
};

export default Home;

