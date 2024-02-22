import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import useStyles from '../styles'

const AddBook = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.addBookContainer}>
      <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  width: 128,
                  height: 128,
                },
              }}
            >
              <Paper elevation={3} />
        </Box>

    </Grid>
  )
}

export default AddBook
