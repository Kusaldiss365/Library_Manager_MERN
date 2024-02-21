import React from 'react'
import { Typography, CssBaseline, AppBar, Toolbar, Button } from '@mui/material'
import ContactsIcon from '@mui/icons-material/ImportContacts';
import useStyles from '../styles'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
    const classes = useStyles();
  return (
    <div>
    <CssBaseline/>
      <AppBar position='relative'>
        <Toolbar className={classes.toolBar}>
        <Link to="/">
        <Button variant="contained" color="inherit" aria-label="home" className={classes.homeButton}>
        <HomeIcon />
        </Button>
        </Link>
          <ContactsIcon  position="absolute" className={classes.icon}/>
          <Typography variant='h4'> Library Management System </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
