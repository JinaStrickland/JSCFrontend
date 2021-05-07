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

const CalendarComponent = (props) => {

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
            return {
                key: fId,
                id: fId,
                title: fTitle,
                date: fDate,
                jobAppId: jobAppId,
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
            return {
                key: itrvwId,
                id: itrvwId,
                title: itrvwTitle,
                date: itrvwDate,
                jobAppId: jobAppId,
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
            <div style={{variant: "contained", marginTop: "20px", marginRight: "40px" }} >
                <FullCalendar 
                    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin ]}
                    initialView="dayGridMonth"
                    headerToolbar={{ 
                        right: "dayGridMonth,timeGridWeek,timeGridDay,list",
                        center: "title",
                        left: "today,prev,next", }}
                    // titleFormat={{
                    //     year: "numeric", 
                    //     month: "long", 
                    //     day: "numeric",
                    //     weekday: "long",
                    //     hour: "numeric",
                    //     minute: "numeric"
                    // }}
                    editable={true}
                    slotDuration='00:30'
                    events={ calendarArray() }
                    eventClick={ (e) => handleDateClick(e.event._def) } />
            </div>
        </div>
    )
}
export default CalendarComponent 
