import React from "react";
import './PersonalInformation.css'
import Image from 'next/image'


const PersonalInformation = ({ intro, ...options }) => {

    return <div className="infoContainer" {...options}>
        <div>
            <p className="anim-intro">{intro}</p>
        </div>
        <div>
            <Image src='/tarek.jpg' width={350} height={350} alt="tarek" />
        </div>
    </div>

}

export default PersonalInformation