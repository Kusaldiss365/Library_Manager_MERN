import { 
  Box, Card, CardContent, Typography, Button, DialogTitle, Dialog, DialogActions, Paper,
} from '@mui/material'
import React, { useState } from 'react'
import useStyles from '../styles'
import { Link, useNavigate } from 'react-router-dom';

const ViewBook = () => {

  const navigate = useNavigate();

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDeleteBook = () => {
    setDeleteDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDeleteDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    // Delete logic here
    navigate("/");
  };

  const classes = useStyles();

  return (
    
    <Box container mt="50px" className={classes.viewBookBox}>
      <Paper elevation="3">
      <Card sx={{minWidth:"400px", maxWidth:"700px", minHeight:"500px"}} align="center">
        <CardContent>
          <Typography variant='h3' component="div" sx={{fontWeight:'Bold'}} mt="15px" gutterBottom>
            Book Title
          </Typography>
          <Box mt="50px">
            <label htmlFor="author">Author: </label>
            <Typography variant='h6' gutterBottom>
              Book Author
            </Typography>
          </Box>
          <Box mt="35px">
            <label htmlFor="author">Published Year: </label>
            <Typography variant='h6' gutterBottom>
              Published Year
            </Typography>
          </Box>
          <Box mt="35px">
            <label htmlFor="description">Description: </label>
            <Typography variant='h6' gutterBottom >
              Description
            </Typography>
          </Box>
          <Box mt="60px" justifyContent="space-between" display="flex">
            <Button color="error" sx={{marginLeft:"10px"}} onClick={handleDeleteBook}> Delete</Button>
            <Link to={"/"}><Button sx={{marginRight:"10px"}}>Go Back</Button></Link>
          </Box>
        </CardContent>
      </Card>
      </Paper>
      <Dialog open={deleteDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this book?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialog}>No</Button>
          <Button onClick={handleConfirmDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default ViewBook