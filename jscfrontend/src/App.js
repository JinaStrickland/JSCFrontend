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

  const commOptions = [ "Email", "Phone", "Zoom", "In Person", "LinedIn Message"  ]
  const statusOptions = [ "Sent Resume", "Interview Scheduled", "Wating...", "Another Round of Interview Scheduled", "I Did It! Got the Offer",  "Regrets by Me", "Regrets by Them", "With Pleasure!", "Bummer...Next!", "On Hold" ]

  useEffect(() => {
    // changeAllJAsLoading(true)

    const fetchJAs = async () => {
      const response = await fetch("http://localhost:3000/job_applications")
      const jobapps = await response.json()
      const sortedJobs = jobapps.sort((a, b) => a.id - b.id)
      changeJAs(sortedJobs)
    }
    fetchJAs()

    const fetchFollowUps = async () => {
      const response = await fetch("http://localhost:3000/follow_ups")
      const followups = await response.json()
      changeFollowUps(followups)
    }
    fetchFollowUps()

    const fetchInterviews = async () => {
      const response = await fetch("http://localhost:3000/interviews")
      const interviews = await response.json()
      changeInterviews(interviews)
    }
    fetchInterviews()

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
    ja.follow_ups[0].job_application = { application_name: ja.application_name, id: ja.id }
    changeFollowUps([...allFollowUps, ...ja.follow_ups])
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
      <header className="App-header">
        <Navbar />
      </header>
        <Container maxWidth="xl" >
          <Switch>
            <Typography component="div"  >   
              <div>
                <Route path="/login" render={ () => { return <Login  />}} /> 

                <Route path="/homepage" showNavbar="true" render={() => {
                  return <JobApplications   jobApplications={ allJAs }  
                                            allFollowUps={ allFollowUps }
                                            allInterviews={ allInterviews } /> }}/> 
                                 
                <Route path="/job_applications/:id" render={(props) => {
                  let id = parseInt(props.match.params.id)
                  let currentJA = allJAs.find(ja => ja.id === id)
                    if(!currentJA) { currentJA = {} }
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
