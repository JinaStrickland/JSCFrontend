// import React from 'react'
import React, { useState } from 'react'
import {  Redirect, Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "none",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    boxShadow: "none",
    color: theme.palette.text.secondary,
    fontSize: "16",
  },
  button: {
    margin: theme.spacing(1),
  },
  textArea: {
    fontSize: "30px",
  },
  text: {
      fontSize: 20,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const JobApplicationAdd = (props) => {
    
    const [applicationName, setApplicationName ] = useState("")
    const [companyName, setCompanyName ] = useState("")
    const [status, setStatus ] = useState("")
    const [appliedLocation, setAppliedLocation ] = useState("")
    const [communicationType, setCommunicationType ] = useState("")
    const [resumeSent, setResumeSent] = React.useState(new Date('2020-12-01T09:00:00'))
    const [interestLevel, setInterestLevel ] = useState("")
    // const [resume, setResume ] = useState("")
    // const [coverLetter, setCoverLetter ] = useState("")
    const [firstName, setFirstName ] = useState("")
    const [lastName, setLastName ] = useState("")
    const [streetAdress, setStreetAdress ] = useState("")
    const [city, setCity ] = useState("")
    const [state, setState] = useState("")
    const [zipcode, setZipcode ] = useState("")
    const [title, setTitle ] = useState("")
    const [email, setEmail ] = useState("")
    const [phone, setPhone ] = useState("")
    const [followUpDate, setFollowUpDate] = React.useState(new Date('2020-12-01T09:00:00'))
    const [contactType, setContactType ] = useState("")
    const [notes, setNotes ] = useState("")
    const [ clicked, setClicked ] = useState(false)


    const handleCommunicationType = (e) => {
        setCommunicationType(e.target.value)
    }
    const handleResumeSent = (date) => {
       // console logs Thu Dec 10 2020 09:00:00 GMT-0500
        setResumeSent(date)
    }
    // const handleResume = (e) => {
    //     setResume(e.target.value)
    // }
    // const handleCoverLetter = (e) => {
    //     setCoverLetter(e.target.value)
    // }
    const handleStatus = (e) => {
        setStatus(e.target.value)
    }
    const handleNotes = (e) => {
        setNotes(e.target.value)
    }
    const handleAppliedLocation = (e) => {
        setAppliedLocation(e.target.value)
    }
    const handleApplicationName = (e) => {
        setApplicationName(e.target.value)
    }
    const handleInterestLevel = (e) => {
        setInterestLevel(e.target.value)
    }
    const handleCompanyName = (e) => {
        setCompanyName(e.target.value)
    }
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleStreetAdress = (e) => {
        setStreetAdress(e.target.value)
    }
    const handleCity = (e) => {
        setCity(e.target.value)
    }
    const handleState = (e) => {
        setState(e.target.value)
    }
    const handleZipcode = (e) => {
        setZipcode(e.target.value)
    }
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail((e.target.value).toLowerCase())
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleFollowUpDate = (data) => {
        // console logs Thu Dec 10 2020 09:00:00 GMT-0500
        setFollowUpDate(data)
    }
    const handleContactType = (e) => {
        setContactType(e.target.value)
    }
    const handleRedirect = (job) => {
        handleSubmit(job)
        setClicked(!clicked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/job_applications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                communication_type: communicationType,
                resume_sent: resumeSent,
                // resume: resume,
                // cover_letter: coverLetter,
                status: status,
                notes: notes,
                applied_location: appliedLocation,
                application_name: applicationName,
                interest_level: interestLevel,
                user_id: 13,
                name: companyName,
                street_address: streetAdress,
                city: city,
                state: state,
                zipcode: zipcode,
                first_name: firstName,
                last_name: lastName,
                email: email,
                title: title,
                phone: phone,
                follow_up_date: followUpDate,
                contact_type: contactType,
            })
        }).then(res => res.json()).then(data => props.handleAddJA(data))}


    const classes = useStyles();

    if(clicked === true){
        return <Redirect to="/homepage"/>
    } 

    return (

        <div style={{ marginTop: "40px"}}>
        <form className={classes.root} noValidate autoComplete="off" 
               onSubmit={ (e) => handleRedirect(e)} >
          <div className={classes.root}>
            <Container maxWidth="xl" >
            <Typography variant="h2" component="div">
                <Grid container spacing={3} >
                    <Grid item xs={12} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal" className={classes.text}
                                fullWidth InputLabelProps={{ shrink: true, }} 
                                label="Application Title" 
                                name="application_name" onChange={ handleApplicationName } />
                       </Paper>
                    </Grid>     
                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal" 
                                fullWidth  InputLabelProps={{ shrink: true, }} 
                                label="Company Name" 
                                name="name" onChange={ handleCompanyName } />
                       </Paper>
                    </Grid>     
                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                        <FormControl className={classes.formControl} fullWidth style={{ margin: 1 }} margin="normal" >
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">Application Status</InputLabel>
                            <Select labelId="demo-simple-select-placeholder-label-label" id="demo-simple-select-placeholder-label" 
                                displayEmpty className={classes.selectEmpty} InputLabelProps={{ shrink: true, }}
                                name="status" value={status} onChange={ handleStatus } >
                                        <MenuItem value="">  <em>Select</em>  </MenuItem>
                                    { props.statusOptions.map(stat => {
                                       return <MenuItem value={stat} > {stat} </MenuItem> }) }
                            </Select>
                        </FormControl>
                       </Paper>
                    </Grid>   
                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal" 
                                fullWidth  InputLabelProps={{ shrink: true, }} 
                                label="Job Applied Location"  
                                name="applied_location" onChange={ handleAppliedLocation } />
                       </Paper>
                    </Grid>    
                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                        <FormControl className={classes.formControl} fullWidth style={{ margin: 1 }} margin="normal" >
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">Communication Type</InputLabel>
                            <Select labelId="demo-simple-select-placeholder-label-label" id="demo-simple-select-placeholder-label" 
                                InputLabelProps={{ shrink: true, }} displayEmpty className={classes.selectEmpty}
                                name="communication_type" value={communicationType} onChange={ handleCommunicationType } >
                                        <MenuItem value="">  <em>Select</em>  </MenuItem>
                                    { props.commOptions.map(option => {
                                       return <MenuItem value={option} > {option} </MenuItem> }) }
                            </Select>
                        </FormControl>
                       </Paper>
                    </Grid>   
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid item xs={6}  >
                            <Paper className={classes.paper}> 
                            <KeyboardDatePicker style={{ margin: 1 }} margin="normal" fullWidth
                                id="date-picker-dialog" format="yyyy-MM-dd"
                                label="Resume Sent Date" 
                                name="resume_sent" onChange={ handleResumeSent }
                                value={resumeSent}  
                                KeyboardButtonProps={{ 'aria-label': 'change date', }} />
                        </Paper>
                        </Grid>   
                    </MuiPickersUtilsProvider>  
                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal" 
                                fullWidth  InputLabelProps={{ shrink: true, }} 
                                label="Job Interest Level (1 - 5)" 
                                name="interest_level" onChange={ handleInterestLevel } />
                       </Paper>
                    </Grid>     
                    {/* <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal" 
                                fullWidth InputLabelProps={{ shrink: true, }} 
                                label="Resume" 
                                name="resume" onChange={ handleResume } />
                       </Paper>
                    </Grid>     
                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal" 
                                fullWidth InputLabelProps={{ shrink: true, }} 
                                label="Cover Letter" 
                                name="cover_letter" onChange={ handleCoverLetter } />
                       </Paper>
                    </Grid>      */}
                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal" 
                                fullWidth InputLabelProps={{ shrink: true, }} 
                                label="Contact Person's First Name" 
                                name="first_name" onChange={ handleFirstName } />
                       </Paper>
                    </Grid>     
                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal" 
                                fullWidth  InputLabelProps={{ shrink: true, }} 
                                label="Last Name" 
                                name="last_name" onChange={ handleLastName } />
                       </Paper>
                    </Grid>     
                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal" 
                                fullWidth  InputLabelProps={{ shrink: true, }} 
                                label="Job Title" 
                                name="title" onChange={ handleTitle } />
                       </Paper>
                    </Grid>     
                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal" 
                                fullWidth  InputLabelProps={{ shrink: true, }} 
                                label="Email Address" 
                                name="email" onChange={ handleEmail } />
                       </Paper>
                    </Grid>     
                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal" 
                                fullWidth InputLabelProps={{ shrink: true, }} 
                                label="Street Address" 
                                name="street_address" onChange={ handleStreetAdress } />
                       </Paper>
                    </Grid>     
                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal" 
                                fullWidth InputLabelProps={{ shrink: true, }} 
                                label="City" 
                                name="city" onChange={ handleCity } />
                       </Paper>
                    </Grid>     
                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal" 
                                fullWidth  InputLabelProps={{ shrink: true, }} 
                                label="State" 
                                name="state" onChange={ handleState } />
                       </Paper>
                    </Grid>     
                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal" 
                                fullWidth  InputLabelProps={{ shrink: true, }} 
                                label="Zipcode" 
                                name="zipcode" onChange={ handleZipcode } />
                       </Paper>
                    </Grid>     
                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal" 
                                fullWidth  InputLabelProps={{ shrink: true, }} 
                                label="Phone Number" 
                                name="phone" onChange={ handlePhone } />
                       </Paper>
                    </Grid>     
                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                           
                       </Paper>
                    </Grid>     

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid item xs={6}  >
                            <Paper className={classes.paper}> 
                            <KeyboardDatePicker style={{ margin: 1 }} margin="normal" fullWidth
                                id="date-picker-dialog" format="yyyy-MM-dd"
                                label="Follow Up Date" name="follow_up_date" 
                                value={followUpDate}  onChange={ handleFollowUpDate }
                                KeyboardButtonProps={{ 'aria-label': 'change date', }} />
                        </Paper>
                        </Grid>   
                    </MuiPickersUtilsProvider>  

                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                        <FormControl className={classes.formControl} fullWidth style={{ margin: 1 }} margin="normal" >
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">Communication Type</InputLabel>
                            <Select labelId="demo-simple-select-placeholder-label-label" id="demo-simple-select-placeholder-label" 
                                InputLabelProps={{ shrink: true, }} displayEmpty className={classes.selectEmpty}
                                name="contact_type" value={contactType} onChange={ handleContactType } >
                                        <MenuItem value="">  <em>Select</em>  </MenuItem>
                                    { props.commOptions.map(option => {
                                       return <MenuItem value={option} > {option} </MenuItem> }) }
                            </Select>
                        </FormControl>
                       </Paper>
                    </Grid>   
                    <Grid item xs={12} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal" variant="outlined"
                                multiline rows={6} fullWidth InputLabelProps={{ shrink: true, }} 
                                label="Notes" name="notes" onChange={ handleNotes } />
                       </Paper>
                    </Grid>     
                </Grid>
            <div >
                <IconButton edge="start" aria-label="save" type="submit" variant="contained" color="primary"  
                // onSubmit={() => handleAddJA(job)} 
                 className={classes.button} >
                    <SaveIcon fontSize="large" />
                </IconButton>
                <Link to="/homepage">
                    <IconButton edge="end" aria-label="cancel" type="submit" variant="contained" color="primary"  
                        className={classes.button}  >
                        <CancelIcon fontSize="large" />
                    </IconButton>
                </Link>
            </div>
            <br/>
            </Typography>
            </Container>
            </div>
            </form>
        </div>
    )
}

export default JobApplicationAdd
