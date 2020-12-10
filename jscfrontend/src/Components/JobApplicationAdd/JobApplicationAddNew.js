// // import React from 'react'
// import React, { useState } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     boxShadow: "none",
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



// const JobApplicationAddNew = (props) => {

//     // const { ja } = props.jobApplication

//     const classes = useStyles();

//     return (

//         <div style={{ marginTop: "40px"}}>
//         <form className={classes.root} noValidate autoComplete="off" 
//                onSubmit={ (e) => props.addJA(e) } >
//           <div className={classes.root}>
//             <Container maxWidth="xl" >
//             <Typography variant="h2" component="div">
                    
//                 <Grid container spacing={3}>
//                     <Grid item xs={12} >
//                         <Paper className={classes.paper}>
//                             <TextField style={{ margin: 1 }}
//                                 label="Application Title"
//                                 name="application_name"
//                                 value={ props.jobApplication.application_name }
//                                 onChange={(e) => props.handleAddJA(e.target.value)}
//                                 // placeholder="...."
//                                 // helperText="Some important text"
//                                 fullWidth
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}/>
//                         </Paper>
//                         </Grid>
//                     {/* </Grid>
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }}
//                                 label="Company Name"
//                                 name=""
//                                 value={ company_name }
//                                 onChange={(e) => setCompany_name(e.target.value)}
//                                 fullWidth
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}/>
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }}
//                                 label="Application Status"
//                                 name="status"
//                                 value={ status }
//                                 onChange={(e) => setStatus(e.target.value)}
//                                 fullWidth
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}/>
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }}
//                                 label="Job Applied Location"
//                                 name="applied_location"
//                                 value={ applied_location }
//                                 onChange={(e) => setApplied_location(e.target.value)}
//                                 fullWidth
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}/>
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }}
//                                 label="Communication Type"
//                                 name="communication_type"
//                                 value={ communication_type }
//                                 onChange={(e) => setCommunication_type(e.target.value)}
//                                 fullWidth
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}/>
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }}
//                                 label="Resume Sent Date"
//                                 name="resume_sent"
//                                 value={ resume_sent }
//                                 onChange={(e) => setResume_sent(e.target.value)}
//                                 fullWidth
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}/>
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }}
//                                 label="Job Interest Level (1 - 5)"
//                                 name="interest_level"
//                                 value={ interest_level }
//                                 onChange={(e) => setInterest_level(e.target.value)}
//                                 fullWidth
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}/>
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }}
//                                 label="Resume"
//                                 name="resume"
//                                 value={ resume }
//                                 onChange={(e) => setResume(e.target.value)}
//                                 fullWidth
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}/>
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }}
//                                 label="Cover Letter"
//                                 name="cover_letter"
//                                 value={ cover_letter }
//                                 onChange={(e) => setCover_letter(e.target.value)}
//                                 fullWidth
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}/>
//                         </Paper>
//                     </Grid>

//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }}
//                                 label="Contact"
//                                 name="contact"
//                                 value={ contact }
//                                 onChange={(e) => setContact(e.target.value)}
//                                 fullWidth
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}/>
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }}
//                                 label="Title"
//                                 name="title"
//                                 value={ title }
//                                 onChange={(e) => setTitle(e.target.value)}
//                                 fullWidth
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}/>
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }}
//                                 label="Email"
//                                 name="email"
//                                 value={ email }
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 fullWidth
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}/>
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField tyle={{ margin: 1 }}
//                                 label="Phone Number"
//                                 name="phone"
//                                 value={ phone }
//                                 onChange={(e) => setPhone(e.target.value)}
//                                 fullWidth
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}/>
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }}
//                                 label="Follow Up Date"
//                                 name="follow_up_date"
//                                 value={ follow_up_date }
//                                 onChange={(e) => setFollow_up_date(e.target.value)}
//                                 fullWidth
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}/>
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }}
//                                 label="Follow Up Type"
//                                 name="contact_type"
//                                 value={ contact_type }
//                                 onChange={(e) => setContact_type(e.target.value)}
//                                 fullWidth
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}/>
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={6} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }}
//                                 label="Interview Date"
//                                 name="interview_date"
//                                 value={ interview_date }
//                                 onChange={(e) => setInterview_date(e.target.value)}
//                                 fullWidth
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}/>
//                         </Paper>
//                     </Grid> */}
//                     {/* <Grid item xs={12} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }}
//                                 label="Information about the Interview"
//                                 name="information"
//                                 value={ information }
//                                 onChange={(e) => setInformation(e.target.value)}
//                                 fullWidth
//                                 multiline
//                                 rows={2}
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}
//                                 variant="outlined"
//                                 />
//                        </Paper>
//                     </Grid>      */}
//                     {/* <Grid item xs={12} >
//                         <Paper className={classes.paper}> 
//                             <TextField style={{ margin: 1 }}
//                                 label="Notes"
//                                 name="notes"
//                                 value={ ja.notes }
//                                 onChange={(e) => props.handleAddJA(e.target.value)}
//                                 fullWidth
//                                 multiline
//                                 rows={6}
//                                 margin="normal"
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}
//                                 variant="outlined"
//                                 />
//                        </Paper>
//                     </Grid>      */}
//                 </Grid>


//             <div >
//             <Button type="submit"
//                     variant="contained" className={classes.button}
//                     color="primary"
//                     size="medium"
//                     startIcon={<SaveIcon />} >
//                 Save
//             </Button>
//             </div>
//             </Typography>
//             </Container>
//         </div>
//             </form>
//         </div>
//     )
// }

// export default JobApplicationAddNew
