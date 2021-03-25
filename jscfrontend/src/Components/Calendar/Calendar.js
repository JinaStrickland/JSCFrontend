import React from 'react'
import { Link } from 'react-router-dom';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import "./Calendar.css"

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
            let name = followUp.job_application.application_name
            if(!name) { name = " " }
            let fId = followUp.id
            let fDate = followUp.follow_up_date 
            let fTitle = `${name} Follow Up`
            return {
                    id: fId,
                    title: fTitle,
                    date: fDate,
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
            return {
                    id: itrvwId,
                    title: itrvwTitle,
                    date: itrvwDate,
            }
        })
    }

    const calendarArray = () => {
        return [renderFollowUpEventContent(), renderInterviewEventContent()].flat() 
    } 

    // const handleDateClick = (e) => {
    //     alert(e.dateStr)
    //     return console.log("I've been clicked")
    // }

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
                    />
            </div>
        </div>
    )
}
export default CalendarComponent 
