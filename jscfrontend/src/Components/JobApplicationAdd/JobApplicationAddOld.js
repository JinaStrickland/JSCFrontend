// import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//         margin: theme.spacing(1),
//     },
//     display: 'flex',
//     flexWrap: 'wrap',
//     flexGrow: 1,
//     boxShadow: "none",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: '25ch',
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: 'left',
//     boxShadow: "none",
//     color: theme.palette.text.secondary,
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
// }));


// const JobApplicationAddOld = (props) => {

//   const [name, setName] = React.useState('');
//   const classes = useStyles();

//   const handleChange = (event) => {
//     setName(event.target.value);
//   }

//   return (
//     <div className={classes.root} style={{ marginTop: "20px"}}>
//         <Container maxWidth="xl">
//       <div>
//           <Typography component="div" 
//                       // style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
//           >
//               <form className={classes.root} noValidate autoComplete="off" 
//                     onSubmit={ (e) => props.addJA(e) }>
//             <Grid container spacing={3}>
//                 <div id="standard-full-width">
//                 <Grid item xs={12} >
//                 <Paper className={classes.paper} >
//                 <FormControl>
//                     <InputLabel htmlFor="component-simple" >Application Title</InputLabel>
//                     <Input name="application_name" value={""} onChange={handleChange} />
//                     {/* <FormHelperText id="component-helper-text">Some important helper text</FormHelperText> */}
//                 </FormControl>
//                 </Paper>
//                 </Grid>
//                 <Grid item xs={12} >
//                 <Paper className={classes.paper}>
//                 <FormControl>
//                     <InputLabel htmlFor="component-simple" >Application Status</InputLabel>
//                     <Input value={""} onChange={handleChange} />
//                 </FormControl>
//                 </Paper>
//                 </Grid>
//                 <Grid item xs={12} >
//                 <Paper className={classes.paper}>
//                 <FormControl>
//                     <InputLabel htmlFor="component-simple" >Job Applied Location</InputLabel>
//                     <Input value={""} onChange={handleChange} />
//                 </FormControl>
//                 </Paper>
//                 </Grid>
//                 <Grid item xs={12} >
//                 <Paper className={classes.paper}>
//                 <FormControl>
//                     <InputLabel htmlFor="component-simple" >Communication Type</InputLabel>
//                     <Input value={""} onChange={handleChange} />
//                 </FormControl>
//                 </Paper>
//                 </Grid>
//                 <Grid item xs={12} >
//                 <Paper className={classes.paper}>
//                 <FormControl>
//                     <InputLabel htmlFor="component-simple" >Resume Sent Date</InputLabel>
//                     <Input value={""} onChange={handleChange} />
//                 </FormControl>
//                 </Paper>
//                 </Grid>
//                 <Grid item xs={12} >
//                 <Paper className={classes.paper}>
//                 <FormControl>
//                     <InputLabel htmlFor="component-simple" >Interest Level</InputLabel>
//                     <Input value={""} onChange={handleChange} />
//                 </FormControl>
//                 </Paper>
//                 </Grid>
//                 <Grid item xs={12} >
//                 <Paper className={classes.paper}>
//                 <FormControl>
//                     <InputLabel htmlFor="component-simple" >Resume</InputLabel>
//                     <Input value={""} onChange={handleChange} />
//                 </FormControl>
//                 </Paper>
//                 </Grid>
//                 <Grid item xs={12} >
//                 <Paper className={classes.paper}>
//                 <FormControl>
//                     <InputLabel htmlFor="component-simple" >Cover Letter</InputLabel>
//                     <Input value={""} onChange={handleChange} />
//                 </FormControl>
//                 </Paper>
//                 </Grid>
//                 </div>
//                 <Grid item xs={12} >
//                 <Paper className={classes.paper}>
//                 <FormControl variant="outlined">
//                   <InputLabel htmlFor="component-outlined">Notes</InputLabel>
//                   <OutlinedInput id="component-outlined" value={""} onChange={handleChange} />
//                 </FormControl>
//                 </Paper>
//                 </Grid>
      
//               <Button
//               variant="contained"
//               color="primary"
//               size="medium"
//               className={classes.button}
//               startIcon={<SaveIcon />}
//             >
//               Save
//             </Button>
//           </Grid>
//               </form>
//         </Typography>
//       </div>
//         </Container>
//     </div>
//   );
// }

// export default JobApplicationAddOld