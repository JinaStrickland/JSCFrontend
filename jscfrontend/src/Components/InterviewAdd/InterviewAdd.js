// import React, { useState } from 'react'

// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// // import InputBase from '@material-ui/core/InputBase';
// import IconButton from '@material-ui/core/IconButton';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// // import EditIcon from '@material-ui/icons/Edit';
// import SaveIcon from '@material-ui/icons/Save';
// import CancelIcon from '@material-ui/icons/Cancel';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//       boxShadow: "none",
//     },
//     paper: {
//       padding: theme.spacing(1),
//       textAlign: 'left',
//       boxShadow: "none",
//       color: theme.palette.text.secondary,
//     },
//     button: {
//       margin: theme.spacing(1),
//     },
//   }));


// const InterviewAdd = (props) => {

//     const classes = useStyles();
//     const job = props.job

//     const [ showInt, changeShowInt ] = useState(false)
//     const [interviewDate, setInterviewDate ] = useState("")
//     const [information, setInformation ] = useState("")

//     const addInterview = () => {
//         changeShowInt(!showInt)
//     }
//     const handleInterviewDate = (e) => {
//         // console logs 2020-12-10T11:00
//         setInterviewDate(e.target.value)
//     }
//     const handleInformation = (e) => {
//         setInformation(e.target.value)
//     }

//     const handleAddInterview = (e) => {
//         e.preventDefault()
//         debugger
//     }

//     return (
//         <>
            

//             <form onSubmit={ (e) => handleAddInterview(e) }>
//                 <Grid item xs={6} >
//                     <Paper className={classes.paper}> 
//                         <TextField className={classes.container} noValidate style={{ margin: 1 }} margin="normal" type="datetime-local"
//                             fullWidth InputLabelProps={{ shrink: true, }} 
//                             label="Interview Date" name="interview_date" 
//                             value={interviewDate} onChange={ handleInterviewDate } />
//                     </Paper>
//                 </Grid>  
//                 <Grid item xs={12} >
//                     <Paper className={classes.paper}> 
//                         <TextField style={{ margin: 1 }} margin="normal" variant="outlined"
//                             multiline rows={3} fullWidth InputLabelProps={{ shrink: true, }}
//                             label="Information about the Interview" name="information"
//                             value={information} onChange={ handleInformation } />
//                     </Paper>
//                 </Grid> 
//                 <>
//                 <IconButton edge="start" aria-label="save" type="submit" variant="contained" color="primary"  
//                     className={classes.button} >
//                     <SaveIcon fontSize="large" />
//                 </IconButton>
//                 <IconButton edge="end" aria-label="cancel" type="submit" variant="contained" color="primary"  
//                     className={classes.button} onClick={ addInterview } >
//                         <CancelIcon fontSize="large" />
//                 </IconButton>
//                 </>
//             </form>


//         </>
//     )
// }

// export default InterviewAdd
