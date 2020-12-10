import React from 'react'
import { Link } from 'react-router-dom'
import CalendarComponent from '../Calendar/Calendar'
import JobApplication from './JobApplication'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const JobApplications = (props) => {

  // const [ clickToAdd, changeClickToAdd ] = useState(false)

  // const handleClickToAdd = () => {
  //   changeClickToAdd(!clickToAdd)
  //   if(clickToAdd === true) {
  //     return <Redirect to="/"
  //   }

  // }

    
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          marginTop: "10px",
          marginRight: "30px",
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
          boxShadow: "none",
        },
      }));
      const classes = useStyles();

      return (
          <div className={classes.root}>
            <br/>
              <Grid container spacing={3}>
                  <Grid item xs={3}>
                  <Paper className={classes.paper} elevation={0} style={{ height: '85vh' }}>
                      <h2 color="primary" > Job Applications </h2>
                        <Link to="/addjobapplication" style={{ color: "black" }}>
                              <Fab color="primary" aria-label="add" size="small" >
                                  <AddIcon size="small" fontSize="small" />
                              </Fab>
                          </Link>
                          <br/>
                          <br/>
                          { props.jobApplications.map(jobApp => 
                                <JobApplication key={ jobApp.id }
                                                  jobApp={ jobApp } />)}
                                                 
                        </Paper>
                  </Grid>
            
                  <Grid item xs={9}>
                      <Paper className={classes.paper} elevation={0} style={{ position: "relative", height: '85vh' }} >
                      {/* <Paper className={classes.paper} elevation={5} style={{ backgroundColor: '#cfe8fc', height: '100vh' }} > */}
                          <CalendarComponent style={{ position: "relative", height: '100vh' }} 
                                jobApplications={ props.jobApplications }
                                allFollowUps={ props.allFollowUps }
                                allInterviews={ props.allInterviews } />
                        </Paper>
                  </Grid>
              </Grid>                      
          </div>
      )
}

export default JobApplications