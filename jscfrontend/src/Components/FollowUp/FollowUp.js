import React, { useState } from 'react'

import DateFnsUtils from '@date-io/date-fns';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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


const FollowUp = (props) => {

    const classes = useStyles();
    const job = props.job 

    const [ showFol, changeShowFol ] = useState(false)
    const [followUpDate, setFollowUpDate] = useState()
    const [contactType, setContactType ] = useState("")

    const clickAddFollowUp = () => {
        changeShowFol(!showFol)
    }
    const handleFollowUpDate = (data) => {
        // console logs Thu Dec 10 2020 09:00:00 GMT-0500
        setFollowUpDate(data)
    }
    const handleContactType = (e) => {
        setContactType(e.target.value)
    }

    const handleAddFollowUp = (e) => {
        e.preventDefault()

        const addFollowUp = async () => {
            const response = await fetch("http://localhost:3000/follow_ups/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // follow_up_date: followUpDate,
                    follow_up_date: new Date(followUpDate).toString(),
                    contact_type: contactType,
                    job_application_id: job.id,
                })
            })
            const followUp = await response.json()
            props.addFollowUp(followUp)
            changeShowFol(!showFol)
          }
          addFollowUp()
    }

    // const submitEditFollowUp = (e) => {
    //     console.log(e)
    // }

    return (
        <div style={{ marginTop: "40px" }}>
            <div className={classes.root}>
                <Container maxWidth="xl" >
                <Typography variant="h2" component="div">
                    <Grid container spacing={3}>

                        {  job.follow_ups && job.follow_ups.map(followUp =>  { 
                        return (
                            <React.Fragment key={followUp.id}>   
                                <Grid item xs={6} >
                                    <Paper className={classes.paper} >  
                                        <TextField style={{ margin: 1}}  margin="normal"
                                            fullWidth InputLabelProps={{ shrink: true, }}
                                            noValidate autoComplete="off"
                                            label="Follow Up Date" 
                                            value={  followUp.follow_up_date } />
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} >
                                    <Paper className={classes.paper}> 
                                        <TextField style={{ margin: 1 }} margin="normal" 
                                            fullWidth InputLabelProps={{ shrink: true, }}
                                            noValidate autoComplete="off"
                                            label="Follow Up Contact Type" 
                                            value={ followUp.contact_type } />
                                    </Paper>
                                </Grid>
                            </React.Fragment>
                        )})}

                    <Grid item xs={12} >
                        <Paper className={classes.paper}>
                            <Fab edge="end" color="primary" aria-label="add" size="small" onClick={ clickAddFollowUp }>
                                <AddIcon size="small" fontSize="small" />
                            </Fab>
                            {/* <Fab edge="end" color="primary" aria-label="edit" type="submit" size="small" className={classes.button}
                                onClick={ submitEditFollowUp } >
                                <EditIcon size="small" fontSize="small" />
                            </Fab> */}
                        </Paper>
                      </Grid>
                    </Grid>
                    
                    { showFol === true ? 
                        <form onSubmit={ (e) => handleAddFollowUp(e) }>
                            <Grid container spacing={3}>
                            <Grid item xs={6}  >
                                <Paper className={classes.paper}> 
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker style={{ margin: 1 }} margin="normal" fullWidth
                                        id="date-picker-dialog" format="yyyy-MM-dd" 
                                        label="Follow Up Date" name="follow_up_date" 
                                        value={followUpDate}  onChange={ handleFollowUpDate }
                                        KeyboardButtonProps={{ 'aria-label': 'change date', }} />
                                </MuiPickersUtilsProvider>  
                                </Paper>
                            </Grid>   
                        <Grid item xs={6} >
                            <Paper className={classes.paper}> 
                            <FormControl className={classes.formControl} fullWidth style={{ margin: 1 }} margin="normal" >
                                <InputLabel shrink id="demo-simple-select-placeholder-label-label">Follow Up Contact Type</InputLabel>
                                <Select labelId="demo-simple-select-placeholder-label-label" id="demo-simple-select-placeholder-label" 
                                    inputlabelprops={{ shrink: true, }} displayEmpty className={classes.selectEmpty}
                                    name="contact_type" value={contactType} onChange={ handleContactType } >
                                            <MenuItem value="">  <em>Select</em>  </MenuItem>
                                        { props.commOptions.map(option => {
                                        return <MenuItem  key={option} value={option} > {option} </MenuItem> }) }
                                </Select>
                            </FormControl>
                            </Paper>
                        </Grid> 
                            <IconButton edge="end" aria-label="save" type="submit" variant="contained" color="primary"  
                                className={classes.button}  >
                                <SaveIcon fontSize="large" />
                            </IconButton>
                            <IconButton edge="end" aria-label="cancel" type="submit" variant="contained" color="primary"  
                                className={classes.button}  onClick={ clickAddFollowUp } >
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

export default FollowUp
