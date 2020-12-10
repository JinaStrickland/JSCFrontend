import React from 'react'
import { Link } from 'react-router-dom';

function JobApplication(props) {

    let id = props.jobApp.id 

    return (
        <div>
            <div>
                <Link to={`/job_applications/${id}`} >
                    <h3 className="jas-title" style={{color: "black"}}> 
                        { props.jobApp.application_name } 
                    </h3>
                </Link>
            </div>
        </div>
    )
}

export default JobApplication
