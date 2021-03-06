import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "none",
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'left',
    boxShadow: "none",
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Interview = (props) => {
    const classes = useStyles();
    const job = props.job

    const [ showInt, changeShowInt ] = useState(false)
    const [interviewDate, setInterviewDate ] = useState("")
    const [information, setInformation ] = useState("")

    const addInterview = () => {
        changeShowInt(!showInt)
    }
    const handleInterviewDate = (e) => {
        // console logs 2020-12-10T11:00
        setInterviewDate(e.target.value)
    }
    const handleInformation = (e) => {
        setInformation(e.target.value)
    }

    const handleAddInterview = (e) => {
        e.preventDefault()

        const addInterview = async () => {
            const response = await fetch("http://localhost:3000/interviews/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    interview_date: new Date(interviewDate).toString(),
                    information: information,
                    job_application_id: job.id,
                })
            })
            const interview = await response.json()
            props.addInterview(interview)
            changeShowInt(!showInt)
        }
        addInterview()
    }

    // const submitEditInterview = (e) => {
    //     console.log(e)
    // }

    return (
        <div style={{ marginTop: "40px"}}>
            <div className={classes.root}>
                <Container maxWidth="xl" >
                <Typography variant="h2" component="div">
                    <Grid container spacing={3}>
                        
                        {  job.interviews && job.interviews.map(interview => { 
                            const time = new Date(interview.interview_date).toLocaleString()
                            const timeWithoutSeconds = time.replace(/:\d+ /, " ")
                            return (
                                <React.Fragment key={interview.id}>
                                    <Grid item xs={6} >
                                        <Paper className={classes.paper}> 
                                            <TextField style={{ margin: 1 }}  margin="normal"
                                                fullWidth InputLabelProps={{ shrink: true, }}
                                                label="Interview Date" 
                                                value={ timeWithoutSeconds } />
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Paper className={classes.paper}> 
                                            <TextField style={{ margin: 1 }} margin="normal" variant="outlined"
                                                multiline rows={6} fullWidth InputLabelProps={{ shrink: true, }}
                                                label="Information about the Interview"
                                                value={ interview.information } />
                                        </Paper>
                                    </Grid>   
                                </React.Fragment> 
                            )})}
                    <Grid item xs={12} >
                        <Paper className={classes.paper}>
                            <Fab color="primary" aria-label="add" size="small" onClick={ addInterview }>
                                <AddIcon size="small" fontSize="small" />
                            </Fab>
                            {/* <Fab edge="end" color="primary" aria-label="edit" type="submit" size="small" className={classes.button}
                                onClick={ submitEditInterview } >
                                <EditIcon size="small" fontSize="small" />
                            </Fab> */}
                          </Paper>
                      </Grid>
                      </Grid>
                      
                    { showInt === true ? 
                        <form onSubmit={ (e) => handleAddInterview(e) }>
                        <Grid container spacing={3}> 
                            <Grid item xs={6} >
                                <Paper className={classes.paper}> 
                                    <TextField className={classes.container} noValidate style={{ margin: 1 }} 
                                        margin="normal" type="datetime-local"
                                        fullWidth InputLabelProps={{ shrink: true, }} 
                                        label="Interview Date" name="interview_date" 
                                        value={ interviewDate } onChange={ handleInterviewDate } />
                                </Paper>
                            </Grid>  
                            <Grid item xs={12} >
                                <Paper className={classes.paper}> 
                                    <TextField style={{ margin: 1 }} margin="normal" variant="outlined"
                                        multiline rows={4} fullWidth InputLabelProps={{ shrink: true, }}
                                        label="Information about the Interview" name="information"
                                         value={ information } onChange={ handleInformation } />
                                </Paper>
                            </Grid> 
                            <IconButton edge="start" aria-label="save" type="submit" variant="contained" color="primary"  
                                className={classes.button}  >
                                <SaveIcon fontSize="large" />
                            </IconButton>
                            <IconButton edge="end" aria-label="cancel" type="submit" variant="contained" color="primary"  
                                className={classes.button} onClick={ addInterview } >
                                    <CancelIcon fontSize="large" />
                            </IconButton>
                            </Grid> 
                        </form>
                    : "" }
            </Typography>
            </Container>
            </div>
        </div>
    )
}

export default Interview
