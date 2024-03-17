import React from "react";
import './ExperienceCard.css'



const ExperienceCard = ({ data, onClick }) => {

    return <div className="experienceCardContainer">
        <div>

            <div className="header">
                <strong>Company : {data.details.company}</strong>
                <p>Location : {data.details.location}</p>
                <label>Period : {data.details.period}</label>
            </div>

            <div className="responsibilities">Responsibilities</div>
            <ul>
                {
                    data.details.responsibilities.map(responsibility => {
                        return <>
                            <li>{responsibility}</li>
                            <br/>
                        </>
                    })
                }
            </ul>
        </div>

        <button  onClick={onClick}>
            Close
        </button>
    </div>
}


export default ExperienceCard