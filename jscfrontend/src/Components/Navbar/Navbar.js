// import React from 'react'
import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import MenuIcon from '@material-ui/icons/Menu';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const Navbar = (props) => {

    const classes = useStyles();
    // const [auth, setAuth] = useState(false);

    // const handleChange = (event) => {
    //   setAuth(event.target.checked)
    // };

    // const [anchorEla, setAnchorEla] = useState(null);
    // const openMenu = Boolean(anchorEla);
    
    // const handleMenu = (event) => {
    //   setAnchorEla(event.currentTarget);
    // };
    // const handleClose = () => {
    //   setAnchorEla(null)
    // };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleIcon = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleIconClose = () => {
      setAnchorEl(null);
    };

    const [logout, setLogout] = useState(false);
  
    const handleLogout = () => {
      setLogout(!logout)
      handleIconClose()
    };
    
    if(logout === true){
      return <Redirect to="/login" />
    }

    return (
        <div>
            <div className={classes.root}>
            {/* <FormGroup>
                <FormControlLabel
                control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
                label={auth ? 'Logout' : 'Login'} />
            </FormGroup> */}
            <AppBar position="static">
                <Toolbar>
                <Link to="/homepage">
                  <IconButton edge="start" className={classes.menuButton} aria-label="menu" >
                    <HomeIcon fontSize="large" aria-controls="menu-appbar" aria-haspopup="true" style={{ color: "#FFFFFF" }} />
                  </IconButton>
                </Link>
                <Typography variant="h5" className={classes.title}>
                    Job Search Compiler
                </Typography>
                {/* {auth && (
                    <div> */}
                    <IconButton aria-label="account of current user" aria-controls="menu-appbar"
                        aria-haspopup="true" color="inherit" onClick={handleIcon} >
                      <AccountCircle fontSize="large" />
                    </IconButton>
                    
                    <Menu id="menu-appbar" keepMounted anchorEl={anchorEl}
                          anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
                          transformOrigin={{ vertical: 'top', horizontal: 'right', }}
                          open={open} onClose={handleIconClose} type="submit">
                      <MenuItem onClick={handleLogout}> Logout </MenuItem>
                      {/* <MenuItem onClick={handleIconClose}>My account</MenuItem> */}
                      {/* <Link to="/addjobapplication" style={{ color: "black" }}>
                        <MenuItem onClick={handleIconClose} > Add Job Application </MenuItem>
                        </Link> */}
                    </Menu>
                    {/* </div>
                )} */}
                {/* { !auth &&  (
                  <div>
                     <Redirect to="login"/>
                  </div>
                )} */}
                </Toolbar>
            </AppBar>
            </div>
        </div>
    )
}

export default Navbar
