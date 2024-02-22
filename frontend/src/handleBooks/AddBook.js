import { Box, Grid, Paper, TextField, Typography, Button } from '@mui/material'
import React from 'react'
import useStyles from '../styles'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';

const AddBook = () => {
  const classes = useStyles();
  return (
  <Grid container className={classes.addBookContainer} >
      <Paper elevation={3}>
      <Box className={classes.addBookBox} component="form">
              <Typography variant='h4' sx={{ fontWeight: 'bold' }} align='center'><AddBoxIcon fontSize='medium'/> Add a new Book</Typography>
              <TextField sx={{ marginTop: '30px' }} fullWidth variant='standard' label="Book Title"/>
              <TextField sx={{ marginTop: '30px' }} fullWidth variant='standard' label="Author"/>
              <TextField sx={{ marginTop: '30px' }} fullWidth variant='standard' label="Published year"/>
              <TextField sx={{ marginTop: '30px' }} fullWidth variant='standard' label="Description"/>
              <div>
             <Link to={"/"}> <Button variant='outlined' color='error' sx={{marginTop:"30px", maxWidth:"100px", marginRight:"20px"}}>Cancel</Button></Link>
              <Link to={""}><Button variant='contained' color='primary' sx={{marginTop:"30px", maxWidth:"100px"}}>Submit</Button></Link>
              </div>
      </Box>
      </Paper>
    </Grid>
  )
}

export default AddBook
