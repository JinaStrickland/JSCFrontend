import React from 'react'
import { Link } from 'react-router-dom';

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
    
    const renderFollowUpEventContent = () => {
        return props.allFollowUps.map(followUp => {
            let id = followUp.job_application.id
            let name = followUp.job_application.application_name
            if(!name) { name = " " }
            let fId = followUp.id
            let fDate = followUp.follow_up_date 
            let fTitle = `${name} Follow Up`
            let url = `/job_applications/${id}`

            return {
                    id: fId,
                    title: fTitle,
                    date: fDate,
                    url: url
            }
        })
    }
  
    const renderInterviewEventContent = () => {
        return props.allInterviews.map(interview => {
            let id = interview.job_application.id
            let name = interview.job_application.application_name
            if(!name) { name = " " }
            let itrvwId = interview.id
            let itrvwDate = interview.interview_date 
            let itrvwTitle = `${name} Interview`
            let url = `/job_applications/${id}`

            return {
                    id: itrvwId,
                    title: itrvwTitle,
                    date: itrvwDate,
                    url: url
            }
        })
    }

    const calendarArray = () => {
        return [renderFollowUpEventContent(), renderInterviewEventContent()].flat() 
    } 

    const handleDateClick = (e) => {
        return (
            <Link to={`${e.url}`} > </Link>
        )
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
                    editable={true}
                    slotDuration='00:30'
                    // eventContent={ }
                    events={ calendarArray() }
                    eventClick={ (e) => handleDateClick(e.event._def) } 
                     />
            </div>
        </div>
    )
}
export default CalendarComponent 
