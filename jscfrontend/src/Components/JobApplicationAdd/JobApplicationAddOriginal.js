// // import React from 'react'
// import React, { useState } from 'react'
// import { Redirect, Link } from 'react-router-dom'

// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import SaveIcon from '@material-ui/icons/Save';
// import CancelIcon from '@material-ui/icons/Cancel';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     boxShadow: "none",
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'left',
//     boxShadow: "none",
//     color: theme.palette.text.secondary,
//     fontSize: 16,
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
//   textArea: {
//     fontSize: 16,
//   }
// }));


// const JobApplicationAdd = (props) => {
    
//     const [applicationName, setApplicationName ] = useState("")
//     const [companyName, setCompanyName ] = useState("")
//     const [status, setStatus ] = useState("")
//     const [appliedLocation, setAppliedLocation ] = useState("")
//     const [communicationType, setCommunicationType ] = useState("")
//     const [resumeSent, setResumeSent ] = useState("")
//     const [interestLevel, setInterestLevel ] = useState("")
//     const [resume, setResume ] = useState("")
//     const [coverLetter, setCoverLetter ] = useState("")
//     const [contact, setContact ] = useState("")
//     const [title, setTitle ] = useState("")
//     const [email, setEmail ] = useState("")
//     const [phone, setPhone ] = useState("")
//     const [followUpDate, setFollowUpDate ] = useState("")
//     const [contactType, setContactType ] = useState("")
//     const [interviewDate, setInterviewDate ] = useState("")
//     const [information, setInformation ] = useState("")
//     const [notes, setNotes ] = useState("")
//     const [redirect, setRedirect ] = useState(false)

//     const handleCommunicationType = (e) => {
//         setCommunicationType(e.target.value)
//     }
//     const handleResumeSent = (e) => {
//         setResumeSent(e.target.value)
//     }
//     const handleResume = (e) => {
//         setResume(e.target.value)
//     }
//     const handleCoverLetter = (e) => {
//         setCoverLetter(e.target.value)
//     }
//     const handleStatus = (e) => {
//         setStatus(e.target.value)
//     }
//     const handleNotes = (e) => {
//         setNotes(e.target.value)
//     }
//     const handleAppliedLocation = (e) => {
//         setAppliedLocation(e.target.value)
//     }
//     const handleApplicationName = (e) => {
//         setApplicationName(e.target.value)
//     }
//     const handleInterestLevel = (e) => {
//         setInterestLevel(e.target.value)
//     }
//     const handleCompanyName = (e) => {
//         setCompanyName(e.target.value)
//     }
//     const handleContact = (e) => {
//         setContact(e.target.value)
//     }
//     const handleTitle = (e) => {
//         setTitle(e.target.value)
//     }
//     const handleEmail = (e) => {
//         setEmail(e.target.value)
//     }
//     const handlePhone = (e) => {
//         setPhone(e.target.value)
//     }
//     const handleFollowUpDate = (e) => {
//         setFollowUpDate(e.target.value)
//     }
//     const handleContactType = (e) => {
//         setContactType(e.target.value)
//     }
//     const handleInterviewDate = (e) => {
//         setInterviewDate(e.target.value)
//     }
//     const handleInformation = (e) => {
//         setInformation(e.target.value)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
   
//         let application = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 communication_type: communicationType,
//                 resume_sent: resumeSent,
//                 resume: resume,
//                 cover_letter: coverLetter,
//                 status: status,
//                 notes: notes,
//                 applied_location: appliedLocation,
//                 application_name: applicationName,
//                 interest_level: interestLevel,
//                 user_id: 8,
//                 company_id: companyName,
//                 // company: {
//                 //     name: companyName,
//                     // street_address: ,
//                     // city: ,
//                     // state: ,
//                     // zipcode: ,
//                 // },
//                 // contacts: [{
//                     // first_name: ,
//                     // last_name: ,
//                 //     email: email,
//                 //     title: title,
//                 //     phone: phone,
//                 // }],
//                 // follow_ups: [{
//                 //     follow_up_date: followUpDate,
//                 //     contact_type: contactType,
//                 // }],
//                 // interviews: [{
//                 //     interview_date: interviewDate,
//                 //     information: information,
//                 // }]
//             })
//         }

//         fetch("http://localhost:3000/job_applications", application)
//         .then(res => res.json())
//         .then(console.log)
//         // .then( setRedirect(true))  // redirect to homepage so it refreshes
        
//         // if(redirect === true) { return <Redirect to="/homepage" />}
//     }

//     const classes = useStyles();


//     return (

//         <div style={{ marginTop: "40px"}}>
//         <form className={classes.root} noValidate autoComplete="off" 
//                onSubmit={ (e) => handleSubmit(e)} >
//           <div className={classes.root}>
//             <Container maxWidth="xl" >
//             <Typography variant="h2" component="div">
//                 <Grid container spacing={3} >
//                     <Grid item xs={12} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" className={classes.textArea}
//                                 fullWidth InputLabelProps={{ shrink: true, }} 
//                                 // placeholder="...."
//                                 // helperText="Some important text"
//                                 label="Application Title" 
//                                 name="application_name" onChange={ handleApplicationName } />
//                        </Paper>
//                     </Grid>     
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" 
//                                 fullWidth InputLabelProps={{ shrink: true, }} 
//                                 label="Company Name" 
//                                 name="name" onChange={ handleCompanyName } />
//                        </Paper>
//                     </Grid>     
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" 
//                                 fullWidth InputLabelProps={{ shrink: true, }} 
//                                 label="Application Status" 
//                                 name="status" onChange={ handleStatus } />
//                        </Paper>
//                     </Grid>     
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" 
//                                 fullWidth InputLabelProps={{ shrink: true, }} 
//                                 label="Job Applied Location" 
//                                 name="applied_location" onChange={ handleAppliedLocation } />
//                        </Paper>
//                     </Grid>     
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" 
//                                 fullWidth InputLabelProps={{ shrink: true, }} 
//                                 label="Communication Type" 
//                                 name="communication_type" onChange={ handleCommunicationType } />
//                        </Paper>
//                     </Grid>     
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" 
//                                 fullWidth InputLabelProps={{ shrink: true, }} 
//                                 label="Resume Sent Date" 
//                                 name="resume_sent" onChange={ handleResumeSent } />
//                        </Paper>
//                     </Grid>     
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" 
//                                 fullWidth InputLabelProps={{ shrink: true, }} 
//                                 label="Job Interest Level (1 - 5)" 
//                                 name="interest_level" onChange={ handleInterestLevel } />
//                        </Paper>
//                     </Grid>     
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" 
//                                 fullWidth InputLabelProps={{ shrink: true, }} 
//                                 label="Resume" 
//                                 name="resume" onChange={ handleResume } />
//                        </Paper>
//                     </Grid>     
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" 
//                                 fullWidth InputLabelProps={{ shrink: true, }} 
//                                 label="Cover Letter" 
//                                 name="cover_letter" onChange={ handleCoverLetter } />
//                        </Paper>
//                     </Grid>     
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" 
//                                 fullWidth InputLabelProps={{ shrink: true, }} 
//                                 label="Contact" 
//                                 name="contact" onChange={ handleContact } />
//                        </Paper>
//                     </Grid>     
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" 
//                                 fullWidth InputLabelProps={{ shrink: true, }} 
//                                 label="Title" 
//                                 name="title" onChange={ handleTitle } />
//                        </Paper>
//                     </Grid>     
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" 
//                                 fullWidth InputLabelProps={{ shrink: true, }} 
//                                 label="Email" 
//                                 name="email" onChange={ handleEmail } />
//                        </Paper>
//                     </Grid>     
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" 
//                                 fullWidth InputLabelProps={{ shrink: true, }} 
//                                 label="Phone Number" 
//                                 name="phone" onChange={ handlePhone } />
//                        </Paper>
//                     </Grid>     
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" 
//                                 fullWidth InputLabelProps={{ shrink: true, }} 
//                                 label="Follow Up Date" 
//                                 name="follow_up_date" onChange={ handleFollowUpDate } />
//                        </Paper>
//                     </Grid>     
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" 
//                                 fullWidth InputLabelProps={{ shrink: true, }} 
//                                 label="Follow Up Type" 
//                                 name="contact_type" onChange={ handleContactType } />
//                        </Paper>
//                     </Grid>     
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" 
//                                 fullWidth InputLabelProps={{ shrink: true, }} 
//                                 label="Interview Date" 
//                                 name="interview_date" onChange={ handleInterviewDate } />
//                        </Paper>
//                     </Grid>     
//                     <Grid item xs={12} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" variant="outlined"
//                                 multiline rows={2} fullWidth InputLabelProps={{ shrink: true, }} 
//                                 label="Information about the Interview" 
//                                 name="information" onChange={ handleInformation } />
//                        </Paper>
//                     </Grid>     
//                     <Grid item xs={12} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }} margin="normal" variant="outlined"
//                                 multiline rows={6} fullWidth InputLabelProps={{ shrink: true, }} 
//                                 label="Notes" name="notes" onChange={ handleNotes } />
//                        </Paper>
//                     </Grid>     
//                 </Grid>
//             <div >
//                 <IconButton edge="start" aria-label="save" type="submit" variant="contained" color="primary"  
//                  className={classes.button}  >
//                     <SaveIcon fontSize="large" />
//                 </IconButton>
//                 <Link to="/homepage">
//                     <IconButton edge="end" aria-label="cancel" type="submit" variant="contained" color="primary"  
//                     className={classes.button}  >
//                         <CancelIcon fontSize="large" />
//                     </IconButton>
//                 </Link>
//             {/* <Button type="submit" variant="contained" className={classes.button} color="primary"
//                     size="medium" startIcon={<SaveIcon />} > Save </Button> */}
//             </div>
//             </Typography>
//             </Container>
//         </div>
//             </form>
//         </div>
//     )
// }

// export default JobApplicationAdd
