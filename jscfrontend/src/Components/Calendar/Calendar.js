import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import "./Calendar.css"
// import { Calendar } from '@material-ui/pickers';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     truncate: {
//         width: "20px",
//         whiteSpace: "nowrap",
//         overflow: "hidden",
//         textOverflow: "ellipsis"
//     },
// }));

//  { <div style={{ width: "20px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
//                 title={ "FullCalendarIsAPain" }>
//             FullCalendarIsAPain  // Truncate string w/ Ellipsis
//           </div> }

const CalendarComponent = (props) => {
    // const classes = useStyles();

    const [url, setUrl] = useState("")
    const [clicked, setClicked] = useState(false)
    
    const renderFollowUpEventContent = () => {
        return props.allFollowUps.map(followUp => {
            if(!followUp) { followUp = " " }
            let name = followUp.job_application.application_name
            let fId = followUp.id
            let fDate = followUp.follow_up_date 
            let fTitle = `${name} Follow Up`
            let jobAppId = followUp.job_application_id
            // let url = `/job_applications/${jobAppId}`
            return {
                key: fId,
                id: fId,
                title: fTitle,
                date: fDate,
                jobAppId: jobAppId,
                // url: url
            }
        })
    }
  
    const renderInterviewEventContent = () => {
        return props.allInterviews.map(interview => {
            let name = interview.job_application.application_name
            if(!name) { name = " " }
            let itrvwId = interview.id
            let itrvwDate = interview.interview_date 
            let itrvwTitle = `${name} Interview`
            let jobAppId = interview.job_application_id
            // let url = `/job_applications/${jobAppId}`
            return {
                key: itrvwId,
                id: itrvwId,
                title: itrvwTitle,
                date: itrvwDate,
                jobAppId: jobAppId,
                // url: url
            }
        })
    }

    const calendarArray = () => {
        return [renderFollowUpEventContent(), renderInterviewEventContent()].flat() 
    } 

    const handleDateClick = (e) => {
        let id = e.extendedProps.jobAppId
        let newUrl = `/job_applications/${id}`
        setUrl(newUrl) 
        setClicked(!clicked)
    }

    if(clicked === true) {
        return <Redirect to={`${url}`}/>
    }

    return (
        <div className="calendar">
            <div style={{variant: "contained" }} >
                <FullCalendar 
                    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin ]}
                    initialView="dayGridMonth"
                    headerToolbar={{ 
                        left: "dayGridMonth,timeGridWeek,timeGridDay,list",
                        center: "title",
                        right: "today,prev,next", }}
                    titleFormat={{
                        year: "numeric", 
                        month: "long", 
                        day: "numeric",
                        weekday: "long",
                        hour: "numeric",
                        minute: "numeric"
                    }}
                    editable={true}
                    slotDuration='00:30'
                    events={ calendarArray() }
                    eventClick={ (e) => handleDateClick(e.event._def) } />
            </div>
        </div>
    )
}
export default CalendarComponent 
