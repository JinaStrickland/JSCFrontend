import React from 'react'
import FullCalendar from "@fullcalendar/react";

// import { makeStyles } from '@material-ui/core/styles';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import "./Calendar.css"

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

    return (
        <div className="calendar">
            <div style={{variant: "contained" }} >
                <FullCalendar 
                    initialView="dayGridMonth"
                    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin ]}
                    headerToolbar={{ 
                        left: "dayGridMonth,timeGridWeek,timeGridDay,list",
                        center: "title",
                        right: "today,prev,next", }}
                    editable={true}
                    slotDuration='00:30'
                    // eventContent={ }
                    events={ calendarArray() } />
            </div>
        </div>
    )
}
export default CalendarComponent 
