'use client';

import React, { useState } from "react";
import './Experiences.css'
import ExperienceCard from "../ExperienceCard/ExperienceCard";




const Experiences = ({ data, headline, ...options }) => {


    const [selectedDate, setSelectedDate] = useState(null)
   

    return <div className="experienceContainer" {...options}>
        <div>
            {
                selectedDate === null ?
                    <span className="anim-headline">{headline}</span>
                    :
                    data.map((experience, index) => {
                        return <>
                            {
                                selectedDate === index &&
                                <ExperienceCard data={experience} key={index} onClick={() => setSelectedDate(null)} />
                            }
                        </>
                    })
            }
        </div>

        <div>
            <div className="expereinces">

                {data.map((experience, index) => {

                    return <div key={index} onClick={() => setSelectedDate(index)} className={selectedDate === index && "active"}>

                        <label>{experience.date}</label>
                        <div>{experience.position}</div>
                    </div>
                })}
            </div>
        </div>

    </div>
}


export default Experiences