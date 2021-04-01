import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import FollowUp from '../FollowUp/FollowUp';
import Interview from '../Interview/Interview'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: "none",
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'left',
        boxShadow: "none",
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const JobApplicationDetail = (props) => {
    const classes = useStyles();
    const job = props.jobApp || {}

    const [clicked, setClicked] = useState(false)

    const handleRedirect = (id) => {
        props.handleDeleteJA(id)
        setClicked(!clicked)
    }

    if (clicked === true) {
        return <Redirect to="/homepage" />
    }

    // if (props.allJAsLoading) {
    //     return <div> Loading... </div>
    // }

    return (
        <div key={job.id} style={{ marginTop: "40px" }}>
            <div className={classes.root}>
                <Container maxWidth="xl" >
                    <Typography variant="h2" component="div">
                        <Grid container spacing={3}>
                            <Grid item xs={6} >
                                <Paper className={classes.paper}>
                                    <TextField style={{ margin: 1 }} margin="normal"
                                        fullWidth InputLabelProps={{ shrink: true, }}
                                        // helperText="Some important text"
                                        label="Application Title"
                                        value={job.application_name} />
                                </Paper>
                            </Grid>
                                  <Grid item xs={6} >
                                <Paper className={classes.paper}>
                                    <TextField style={{ margin: 1 }} margin="normal"
                                        fullWidth InputLabelProps={{ shrink: true, }}
                                        label="Application Status"
                                        value={job.status} />
                                </Paper>
                            </Grid>
                            <Grid item xs={6} >
                                <Paper className={classes.paper}>
                                    <TextField style={{ margin: 1 }} margin="normal"
                                        fullWidth InputLabelProps={{ shrink: true, }}
                                        label="Company Name"
                                        value={job.company && job.company.name} />
                                </Paper>
                            </Grid>
                      
                            <Grid item xs={6} >
                                <Paper className={classes.paper}>
                                    <TextField style={{ margin: 1 }} margin="normal"
                                        fullWidth InputLabelProps={{ shrink: true, }}
                                        label="Job Applied Location"
                                        value={job.applied_location} />
                                </Paper>
                            </Grid>

                            <Grid item xs={6} >
                                <Paper className={classes.paper}>
                                    <TextField style={{ margin: 1 }} margin="normal"
                                        fullWidth InputLabelProps={{ shrink: true, }}
                                        label="Resume Sent Date"
                                        value={job.resume_sent} />
                                </Paper>
                            </Grid>
                            <Grid item xs={6} >
                                <Paper className={classes.paper}>
                                    <TextField style={{ margin: 1 }} margin="normal"
                                        fullWidth InputLabelProps={{ shrink: true, }}
                                        label="Job Interest Level (1 - 5)"
                                        value={job.interest_level} />
                                </Paper>
                            </Grid>
                            {/* <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal"
                                fullWidth InputLabelProps={{ shrink: true, }}
                                label="Resume" value={ job.resume } />
                        </Paper>
                    </Grid>
                    <Grid item xs={6} >
                        <Paper className={classes.paper}> 
                            <TextField style={{ margin: 1 }} margin="normal"
                                fullWidth InputLabelProps={{ shrink: true, }}
                                label="Cover Letter" value={ job.cover_letter } />
                        </Paper>
                    </Grid> */}
                            <Grid item xs={6} >
                                <Paper className={classes.paper}>
                                    <TextField style={{ margin: 1 }} margin="normal"
                                        fullWidth InputLabelProps={{ shrink: true, }}
                                        label="Contact"
                                        value={job.contacts && job.contacts.length > 0 ? `${job.contacts[0].first_name} ${job.contacts[0].last_name}` : " "} />
                                </Paper>
                            </Grid>
                            <Grid item xs={6} >
                                <Paper className={classes.paper}>
                                    <TextField style={{ margin: 1 }} margin="normal"
                                        fullWidth InputLabelProps={{ shrink: true, }}
                                        label="Title"
                                        value={job.contacts && job.contacts.length > 0 ? job.contacts[0].title : " "} />
                                </Paper>
                            </Grid>
                            <Grid item xs={6} >
                                <Paper className={classes.paper}>
                                    <TextField style={{ margin: 1 }} margin="normal"
                                        fullWidth InputLabelProps={{ shrink: true, }}
                                        label="Company Address"
                                        value={job.company && `${job.company.street_address}, ${job.company.city}, ${job.company.state} ${job.company.zipcode}`} />
                                </Paper>
                            </Grid>
                            <Grid item xs={6} >
                                <Paper className={classes.paper}>
                                    <TextField style={{ margin: 1 }} margin="normal"
                                        fullWidth InputLabelProps={{ shrink: true, }}
                                        label="Email"
                                        value={job.contacts && job.contacts.length > 0 ? job.contacts[0].email : " "} />
                                </Paper>
                            </Grid>
                            <Grid item xs={6} >
                                <Paper className={classes.paper}>
                                    <TextField style={{ margin: 1 }} margin="normal"
                                        fullWidth InputLabelProps={{ shrink: true, }}
                                        label="Phone Number"
                                        value={job.contacts && job.contacts.length > 0 ? job.contacts[0].phone : " "} />
                                </Paper>
                            </Grid>
                            <Grid item xs={6} >
                                <Paper className={classes.paper}>
                                    <TextField style={{ margin: 1 }} margin="normal"
                                        fullWidth InputLabelProps={{ shrink: true, }}
                                        label="Communication Type"
                                        value={job.communication_type} />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} >
                                <Paper className={classes.paper}>
                                    <InputBase style={{ margin: 1 }} edge="start" fullWidth inputProps={{ 'aria-label': 'naked' }}
                                        defaultValue="Follow Ups:" />
                                </Paper>
                                <FollowUp job={job} commOptions={props.commOptions} addFollowUp={props.addFollowUp} />
                            </Grid>

                            <Grid item xs={12} >
                                <Paper className={classes.paper}>
                                    <InputBase style={{ margin: 1 }} edge="start" fullWidth inputProps={{ 'aria-label': 'naked' }}
                                        defaultValue="Interviews:" />
                                </Paper>
                                <Interview job={job} addInterview={props.addInterview} />
                            </Grid>

                            <Grid item xs={12} >
                                <Paper className={classes.paper}>
                                    <TextField style={{ margin: 1 }} margin="normal" variant="outlined"
                                        multiline rows={6} fullWidth InputLabelProps={{ shrink: true, }}
                                        label="General Notes" value={job.notes} />
                                </Paper>
                            </Grid>
                            <div>
                                <IconButton aria-label="delete" type="submit" variant="contained" color="primary"
                                    onClick={() => handleRedirect(job.id)} className={classes.button}  >
                                    <DeleteIcon fontSize="large" />
                                </IconButton>
                                {/* <IconButton aria-label="edit" type="submit" variant="contained" color="primary"
                                    onClick={console.log} className={classes.button} >
                                    <EditIcon fontSize="large" />
                                </IconButton> */}
                                <Link to="/homepage">
                                    <IconButton edge="end" aria-label="cancel" type="submit" variant="contained" color="primary"
                                        className={classes.button}  >
                                        <CancelIcon fontSize="large" />
                                    </IconButton>
                                </Link>
                            </div>
                        </Grid>
                        <div >
                        </div>
                        <br />
                    </Typography>
                </Container>
            </div>
        </div>
    )
}
export default JobApplicationDetail
