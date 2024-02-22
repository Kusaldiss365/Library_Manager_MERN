import React from 'react'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useStyles from '../styles';
import AddIcon from '@mui/icons-material/Add';


import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Fab, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function createData(id, title, author, pub_year) {
  return { id, title, author, pub_year };
}

const rows = [
  createData(1, 'Deep Work', 'Cal Newport', 2018),
  createData(2, 'Atomic Habits', 'James Clear', 2017),
  createData(3, 'Rich dad Poor dad', 'Robert Kiyosaki', 2005),
  createData(4, 'Meditations', 'Marcus Aurelius', 2019),
];


const Home = () => {
  const classes = useStyles();
  return (
    
    <div className={classes.container}>
    <div className={classes.Fabs}>
    <Link to="/addBook">
    <Fab color='secondary' aria-label="add" className={classes.addIcon}>
        <AddIcon />
    </Fab>
    </Link>
    </div>
    <Grid container xl={12}>
    <TableContainer component={Paper} className={classes.tableContainer} style={{ overflowX: 'auto' }}>
      <Table className={classes.table} size="medium">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Published Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell scope="row">{row.id}</TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.author}</TableCell>
              <TableCell align="center">{row.pub_year}</TableCell>
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

