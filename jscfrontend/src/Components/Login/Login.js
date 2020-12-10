import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: "40px",
  },
}));

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{''}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }


const Login = () => {

    const classes = useStyles();

    const [ logIn, setLogIn ] = useState(false)

    const changeLogin = () => {
        setLogIn(!logIn)
    }

    if(logIn === true){
        return <Redirect to="/homepage"/>
    } 

    return (
        <div>
        <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>

            <form className={classes.form} noValidate >
            <TextField fullWidth variant="outlined" margin="normal" autoComplete="email" autoFocus
                required id="email" label="Email Address" name="email" />
            <TextField fullWidth variant="outlined" margin="normal" autoComplete="current-password"
                type="password" required id="password" name="password" label="Password" />
            <FormControlLabel label="Remember me"
                control={<Checkbox value="remember" color="primary" />} />
           
                <Button fullWidth variant="contained" color="primary" className={classes.submit}
                    type="submit" onClick={ changeLogin }>
                    Sign In
                </Button>

            <Grid container>
                <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        {/* <Box mt={8}>
            <Copyright />
        </Box> */}
        </Container>
        </div>
    );
}
export default Login 