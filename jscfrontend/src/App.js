import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import JobApplicationDetail from './Components/JobApplication/JobApplicationDetail';
import JobApplicationAdd from './Components/JobApplicationAdd/JobApplicationAdd';
import JobApplications from './Components/JobApplication/JobApplications'
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'fontsource-roboto'


const App = () => {

  const [ allJAs, changeJAs ] = useState([])
  // const [ allJAsLoading, changeAllJAsLoading ] = useState(false)
  const [ allFollowUps, changeFollowUps ] = useState([])
  const [ allInterviews, changeInterviews ] = useState([])

  const commOptions = [ "Email", "Phone", "Zoom", "In Person"  ]
  const statusOptions = [ "Sent Resume", "Interview Scheduled", "Wating...", "Another Round of Interview Scheduled", "I Did It! Got the Offer",  "Regrets by Me", "Regrets by Them", "With Pleasure!", "Bummer...Next!", "On Hold" ]

  useEffect(() => {
    // changeAllJAsLoading(true)
    fetch("http://localhost:3000/job_applications")
    .then(res => {
            // changeAllJAsLoading(false)
            return res.json()
    })
    .then(jobapps => changeJAs(jobapps))

    fetch("http://localhost:3000/follow_ups")
    .then(res => res.json())
    .then(followups => changeFollowUps(followups))
    
    fetch("http://localhost:3000/interviews")
    .then(res => res.json())
    .then(interviews => changeInterviews(interviews))
  }, [])

  const handleDeleteJA = (id) => {
    let findJobApp = [...allJAs].filter(job => job.id !== id)
 
    fetch("http://localhost:3000/job_applications/" + id, {
      method: "DELETE",
    })
    .then(() => {
      changeJAs(findJobApp)
    })

    let findF = allFollowUps.find(followup => followup.job_application_id !== id)
    let updatedFs = [...allFollowUps].filter(followup => followup.job_application_id !== id)
    changeFollowUps(updatedFs, findF)

    let findInt = allInterviews.find(int => int.job_application_id !== id)
    let updatedInts = [...allInterviews].filter(int => int.job_application_id !== id)
    changeInterviews(updatedInts, findInt)

  }

  const handleAddJA = (ja) => {
    changeJAs([...allJAs, ja])
    let updatedFs = allFollowUps.map(followup => {
      if (followup.id === ja.follow_ups.id) {
          let newFollowup = [...followup, ja.follow_ups]
          followup = newFollowup
      }
      return followup
    })
    return changeFollowUps(updatedFs)
  }

  const addFollowUp = (followUp) => {
    changeFollowUps([...allFollowUps, followUp])
    let id = followUp.job_application_id
    let updatedJAs = allJAs.map(app => {
      if (app.id === id) {
          let newFollowup = [...app.follow_ups, followUp]
          app.follow_ups = newFollowup
      }
      return app
    })
    return changeJAs(updatedJAs)
  }

  // const addInterview = (interview) => {
  //   changeInterviews([allInterviews, interview])
  //   let id = interview.job_application_id
  //   let findJA = allJAs.find(job => job.id === id)
  //   let updatedJAs = allJAs.filter(job => job.id !== id)
  //   return changeJAs([updatedJAs, findJA])
  // }
  const addInterview = (interview) => {
    changeInterviews([...allInterviews, interview])
    let id = interview.job_application_id
    let updatedJAs = allJAs.map(app => {
      if (app.id === id) {
          let newInterviews = [...app.interviews, interview]
          app.interviews = newInterviews
      }
      return app
    })
    return (changeJAs(updatedJAs))
  }



  return (
    
    <div className="App"  >
      {/* {console.log(allJAs)} */}
        <header className="App-header">
          <Navbar />
          {/* <div style={{ width: "20px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                title={ "FullCalendarIsAPain" }>
            FullCalendarIsAPain  // Truncate string w/ Ellipsis
          </div> */}
        </header>
        {/* style={{ backgroundColor: '#cfe8fc', height: '105vh' }} */}
        <Container maxWidth="xl" >
          <Switch>
            <Typography component="div"  >   
              <div>
                <Route path="/login" render={ () => { return <Login  />}} /> 

                <Route path="/homepage" showNavbar="true" render={() => {
                  return <JobApplications  jobApplications={ allJAs }  
                                              allFollowUps={ allFollowUps }
                                              allInterviews={ allInterviews } /> }}/> 
                                 
                <Route path="/job_applications/:id" render={(props) => {
                  let id = parseInt(props.match.params.id)
                  let currentJA = allJAs.find(ja => ja.id === id)
                    if(!currentJA) { currentJA = {} }
                    // return null
                    return <JobApplicationDetail  jobApp={ currentJA } id={ id } 
                                                  // allJAsLoading={ allJAsLoading }
                                                  handleDeleteJA={ handleDeleteJA }
                                                  addInterview={addInterview}
                                                  addFollowUp={addFollowUp}
                                                  commOptions={ commOptions } /> }} /> 

                <Route path="/addjobapplication" render={ () => {
                    return <JobApplicationAdd   allJAs={ allJAs } 
                                                handleAddJA={handleAddJA}
                                                commOptions={ commOptions }
                                                statusOptions={ statusOptions }/> }} /> 
              </div>
            </Typography>
          </Switch>
        </Container> 
    </div>
  );
}

export default App;
